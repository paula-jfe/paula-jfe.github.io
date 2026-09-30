import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

describe('Button', () => {
    it('renders a native button (type="button" by default) with variant styles', () => {
        render(<Button variant="secondary">Save</Button>);
        const button = screen.getByRole('button', { name: 'Save' });
        expect(button).toHaveAttribute('type', 'button');
        expect(button.className).toContain('border-brand/20');
        expect(button.className).toContain('h-12');
    });

    it('renders an anchor when given href', () => {
        render(
            <Button href="https://example.com" variant="onDark" icon="arrowUpRight">
                Visit
            </Button>,
        );
        expect(screen.getByRole('link', { name: 'Visit' })).toHaveAttribute('href', 'https://example.com');
    });

    it('renders a router link when given to', () => {
        render(
            <MemoryRouter>
                <Button to="/work" fullWidth>
                    Work
                </Button>
            </MemoryRouter>,
        );
        const link = screen.getByRole('link', { name: 'Work' });
        expect(link).toHaveAttribute('href', '/work');
        expect(link.className).toContain('w-full');
    });

    it('supports disabled state', () => {
        render(<Button disabled>Send</Button>);
        expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    });
});

describe('Icon', () => {
    it('is decorative by default and labelled when given a title', () => {
        const { container, rerender } = render(<Icon name="check" />);
        expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');

        rerender(<Icon name="check" title="Done" />);
        expect(screen.getByRole('img', { name: 'Done' })).toBeInTheDocument();
    });
});
