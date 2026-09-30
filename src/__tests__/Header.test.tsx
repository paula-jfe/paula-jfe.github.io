import { act, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderApp } from '../test-utils/renderApp';

type MockObserver = { trigger: (id: string) => void };
const observers = () =>
    (globalThis.IntersectionObserver as unknown as { instances: MockObserver[] }).instances;

describe('Header', () => {
    it('uses in-page hash links on the home page', () => {
        renderApp('/');
        const nav = screen.getByRole('navigation', { name: 'Main' });
        expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    });

    it('routes back to home sections from other pages', () => {
        renderApp('/work/brightfield-solar');
        const nav = screen.getByRole('navigation', { name: 'Main' });
        expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/#work');
    });

    it('marks the section in view as the current location', () => {
        renderApp('/');
        act(() => observers().forEach((observer) => observer.trigger('process')));
        const nav = screen.getByRole('navigation', { name: 'Main' });
        expect(within(nav).getByRole('link', { name: 'Process' })).toHaveAttribute(
            'aria-current',
            'location',
        );
        expect(within(nav).getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current');
    });

    it('toggles the mobile menu and closes it with Escape, returning focus', async () => {
        renderApp('/');
        const toggle = screen.getByRole('button', { name: 'Open menu' });
        const menu = document.getElementById('mobile-menu') as HTMLElement;

        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(menu).not.toBeVisible();

        await userEvent.click(toggle);
        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        expect(toggle).toHaveAccessibleName('Close menu');
        expect(menu).toBeVisible();

        await userEvent.keyboard('{Escape}');
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(toggle).toHaveFocus();
    });

    it('closes the mobile menu after choosing a link', async () => {
        renderApp('/');
        await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
        const menu = document.getElementById('mobile-menu') as HTMLElement;
        await userEvent.click(within(menu).getByRole('link', { name: 'About' }));
        expect(menu).not.toBeVisible();

        await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
        await userEvent.click(within(menu).getByRole('link', { name: 'Get in touch' }));
        expect(menu).not.toBeVisible();
    });
});
