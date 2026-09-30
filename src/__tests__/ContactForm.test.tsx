import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm, { MESSAGE_MAX, validate } from '../components/sections/ContactForm';
import * as api from '../services/api';

jest.mock('../services/api');
const sendMessage = api.sendMessage as jest.MockedFunction<typeof api.sendMessage>;

const VALID_MESSAGE = 'Hi Jessica, we are rebuilding our marketing site.';

const fill = async (name: string, email: string, message: string) => {
    if (name) await userEvent.type(screen.getByLabelText('Name'), name);
    if (email) await userEvent.type(screen.getByLabelText('Email'), email);
    if (message) await userEvent.type(screen.getByLabelText('Message'), message);
};

const submit = () => userEvent.click(screen.getByRole('button', { name: /send message|try again/i }));

describe('ContactForm', () => {
    beforeEach(() => {
        sendMessage.mockReset();
        Object.defineProperty(window.navigator, 'onLine', { value: true, configurable: true });
    });

    it('shows an error summary and inline errors when submitted empty', async () => {
        render(<ContactForm />);
        await submit();

        expect(await screen.findByRole('alert')).toHaveTextContent('Please fix 3 fields');
        expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true');
        expect(screen.getByLabelText('Name')).toHaveAccessibleDescription('Please enter your name.');
        expect(screen.getByLabelText('Email')).toHaveAccessibleDescription(
            'Please enter a valid email address.',
        );
        expect(screen.getByLabelText('Message')).toHaveAccessibleDescription(
            'Please write at least 20 characters.',
        );
        expect(sendMessage).not.toHaveBeenCalled();
    });

    it('flags only the invalid field and clears it as the user fixes it', async () => {
        render(<ContactForm />);
        await fill('Jane Smith', 'jane@company', VALID_MESSAGE);
        await submit();

        expect(await screen.findByRole('alert')).toHaveTextContent('Please fix 1 field');
        expect(screen.getByLabelText('Name')).not.toHaveAttribute('aria-invalid');
        // Focus moves to the error summary on the next frame; wait for it before typing so the
        // keystrokes can't be split between the field and the summary on slower machines.
        await waitFor(() => expect(screen.getByRole('alert')).toHaveFocus());

        await userEvent.type(screen.getByLabelText('Email'), '.com');
        expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid');
    });

    it('validates a field on blur only when it has content', async () => {
        render(<ContactForm />);
        await userEvent.click(screen.getByLabelText('Email'));
        await userEvent.tab();
        expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid');

        await userEvent.type(screen.getByLabelText('Email'), 'nope');
        await userEvent.tab();
        expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');

        await userEvent.type(screen.getByLabelText('Email'), '@mail.com');
        await userEvent.tab();
        expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-invalid');
    });

    it('shows a live counter near the limit and an error above it', () => {
        expect(validate({ name: 'Jane', email: 'jane@company.com', message: 'x'.repeat(MESSAGE_MAX + 143) }))
            .toEqual({ message: '2,143 / 2,000 characters. Please shorten your message.' });
    });

    it('renders the character counter hint near the limit', async () => {
        render(<ContactForm />);
        const message = screen.getByLabelText('Message');
        await userEvent.click(message);
        await userEvent.paste('x'.repeat(1850));
        expect(message).toHaveAccessibleDescription('1,850 / 2,000 characters');
    });

    it('sends trimmed values, blocks double submits, and confirms success', async () => {
        let resolve: (value: { ok: boolean }) => void = () => {};
        sendMessage.mockImplementation(() => new Promise((r) => (resolve = r)));
        render(<ContactForm />);
        await fill('  Jane Smith ', 'jane@company.com', VALID_MESSAGE);
        await submit();

        const sending = screen.getByRole('button', { name: 'Sending…' });
        expect(sending).toBeDisabled();
        expect(screen.getByLabelText('Name')).toBeDisabled();
        expect(sendMessage).toHaveBeenCalledWith({
            name: 'Jane Smith',
            email: 'jane@company.com',
            message: VALID_MESSAGE,
        });

        resolve({ ok: true });
        expect(await screen.findByRole('status')).toHaveTextContent(
            'Message sent!Thanks, Jane. I usually reply within a day.',
        );

        await userEvent.click(screen.getByRole('button', { name: 'Send another message' }));
        expect(screen.getByLabelText('Name')).toHaveValue('');
    });

    it('keeps the message and offers a retry when the server fails', async () => {
        sendMessage.mockResolvedValueOnce({ ok: false, status: 500 }).mockResolvedValueOnce({ ok: true });
        render(<ContactForm />);
        await fill('Jane Smith', 'jane@company.com', VALID_MESSAGE);
        await submit();

        expect(await screen.findByRole('alert')).toHaveTextContent('Message not sent');
        expect(screen.getByLabelText('Message')).toHaveValue(VALID_MESSAGE);

        await userEvent.click(screen.getByRole('button', { name: 'Try again' }));
        expect(await screen.findByRole('status')).toHaveTextContent('Message sent!');
    });

    it('explains rate limiting (HTTP 429)', async () => {
        sendMessage.mockResolvedValueOnce({ ok: false, status: 429 });
        render(<ContactForm />);
        await fill('Jane Smith', 'jane@company.com', VALID_MESSAGE);
        await submit();
        expect(await screen.findByRole('alert')).toHaveTextContent('Too many attempts');
    });

    it('does not call the API when offline', async () => {
        Object.defineProperty(window.navigator, 'onLine', { value: false, configurable: true });
        render(<ContactForm />);
        await fill('Jane Smith', 'jane@company.com', VALID_MESSAGE);
        await submit();
        expect(await screen.findByRole('alert')).toHaveTextContent('You’re offline');
        expect(sendMessage).not.toHaveBeenCalled();
    });

    it('silently drops submissions that fill the honeypot', async () => {
        render(<ContactForm />);
        await userEvent.type(screen.getByLabelText('Company', { selector: 'input' }), 'spam inc');
        await submit();
        await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Message sent!'));
        expect(sendMessage).not.toHaveBeenCalled();
    });
});
