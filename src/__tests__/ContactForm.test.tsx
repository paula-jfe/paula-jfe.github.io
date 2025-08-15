import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';
import * as api from '../services/api';
import { sendMessageSuccessMock, sendMessageFailMock } from '../__mocks__/sendMessageMock';

jest.mock('../services/api', () => ({
    sendMessage: jest.fn(),
}));

beforeEach(() => {
    jest.clearAllMocks();
});

const mockedSendMessage = api.sendMessage as jest.MockedFunction<typeof api.sendMessage>;

describe('Contact form is working', () => {
    it('should be possible to fill and change input and textarea values', async () => {
        render(<Home />);

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');

        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(messageInput).toHaveValue('');

        await userEvent.type(nameInput, 'Name test');
        await userEvent.type(emailInput, 'Email test');
        await userEvent.type(messageInput, 'Message test');

        await waitFor(() => {
            expect(nameInput).toHaveValue('Name test');
            expect(emailInput).toHaveValue('Email test');
            expect(messageInput).toHaveValue('Message test');
        });
    });
    it('should trigger validation errors if no value is provided', async () => {
        render(<Home />);

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');
        const sendButton = screen.getByRole('button', { name: 'Send' });

        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(messageInput).toHaveValue('');

        await userEvent.click(sendButton);

        const nameError = screen.queryByText('Name is required');
        const emailError = screen.queryByText('Email is required');
        const messageError = screen.queryByText('Message is required');

        await waitFor(() => {
            expect(nameError).toBeInTheDocument();
            expect(emailError).toBeInTheDocument();
            expect(messageError).toBeInTheDocument();
        });
    });
    it('should trigger validation errors if email is invalid', async () => {
        render(<Home />);

        const emailInput = screen.getByLabelText('Email');
        const sendButton = screen.getByRole('button', { name: 'Send' });

        expect(emailInput).toHaveValue('');

        await userEvent.type(emailInput, 'Email test');
        await userEvent.click(sendButton);

        const queryEmailError = () => screen.queryByText('Email is invalid');

        await waitFor(() => {
            expect(queryEmailError()).toBeInTheDocument();
        });

        await userEvent.type(emailInput, 'email@test.com');
        await userEvent.click(sendButton);

        await waitFor(() => {
            expect(queryEmailError()).not.toBeInTheDocument();
        });
    });
    it('it should send the message when the correct data is filled', async () => {
        render(<Home />);
        const user = userEvent.setup({ delay: null });
        jest.useFakeTimers();

        mockedSendMessage.mockResolvedValueOnce(sendMessageSuccessMock);

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');
        const sendButton = screen.getByRole('button', { name: 'Send' });

        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(messageInput).toHaveValue('');

        await user.type(nameInput, 'Name test');
        await user.type(emailInput, 'email@test.com');
        await user.type(messageInput, 'Message test');
        await user.click(sendButton);

        const sentButton = await screen.findByRole('button', { name: 'Sent!' });
        expect(sentButton).toBeInTheDocument();

        act(() => {
            jest.runAllTimers();
        });

        const sentButtonAfter3s = await screen.findByRole('button', { name: 'Send' });
        expect(sentButtonAfter3s).toBeInTheDocument();

        jest.useRealTimers();
    });
    it('it should show Error in the animated button when errors', async () => {
        render(<Home />);
        const user = userEvent.setup({ delay: null });
        jest.useFakeTimers();

        mockedSendMessage.mockResolvedValueOnce(sendMessageFailMock);

        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');
        const sendButton = screen.getByRole('button', { name: 'Send' });

        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
        expect(messageInput).toHaveValue('');

        await user.type(nameInput, 'Name test');
        await user.type(emailInput, 'email@test.com');
        await user.type(messageInput, 'Message test');
        await user.click(sendButton);

        const sentButton = await screen.findByRole('button', { name: 'Error' });
        expect(sentButton).toBeInTheDocument();

        act(() => {
            jest.runAllTimers();
        });

        const sentButtonAfter3s = await screen.findByRole('button', { name: 'Send' });
        expect(sentButtonAfter3s).toBeInTheDocument();

        jest.useRealTimers();
    });
});
