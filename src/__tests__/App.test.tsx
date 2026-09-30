import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderApp } from '../test-utils/renderApp';

describe('App routing and home page', () => {
    it('renders every home section with a single h1', () => {
        renderApp('/');

        expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Crafting Digital Experiences That Pop.',
        );
        [
            'Engineer’s depth. Designer’s eye.',
            'About me',
            'Things I’ve designed & built',
            'How I Turn Ideas Into Interfaces',
            'What people say about me',
            'Have a project in mind?',
        ].forEach((name) =>
            expect(screen.getByRole('heading', { level: 2, name: new RegExp(name) })).toBeInTheDocument(),
        );
    });

    it('offers a skip link to the main content', () => {
        renderApp('/');
        expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    });

    it('opens external links in a new tab safely', () => {
        renderApp('/');
        screen
            .getAllByRole('link', { name: /opens in a new tab/i })
            .forEach((link) => expect(link).toHaveAttribute('rel', 'noopener noreferrer'));
    });

    it('links the live project card to its case study and navigates there', async () => {
        renderApp('/');
        const works = screen.getByRole('region', { name: /Things I’ve designed/ });
        await userEvent.click(within(works).getByRole('link', { name: 'Brightfield Solar' }));

        expect(screen.getByRole('heading', { level: 1, name: 'Brightfield Solar' })).toBeInTheDocument();
        expect(document.title).toBe('Brightfield Solar case study · Jessica Ladislau');
    });

    it('marks projects without a case study as coming soon, without a link', () => {
        renderApp('/');
        expect(screen.getAllByText('Case study coming soon')).toHaveLength(3);
        expect(screen.queryByRole('link', { name: 'Lean-ing' })).not.toBeInTheDocument();
    });

    it('renders the case study with a working back link and live-site link', async () => {
        renderApp('/work/brightfield-solar');

        expect(screen.getByRole('link', { name: /Visit live site/ })).toHaveAttribute(
            'href',
            'https://brightfieldsolar.vercel.app/phoenix-az',
        );
        await userEvent.click(screen.getByRole('link', { name: 'All projects' }));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Crafting Digital');
        expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    });

    it('goes back to the home page from the case study button', async () => {
        renderApp('/work/brightfield-solar');
        await userEvent.click(screen.getByRole('link', { name: 'Back to all projects' }));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Crafting Digital');
    });

    it('shows a friendly 404 for unknown routes', async () => {
        renderApp('/nope');
        expect(screen.getByRole('heading', { name: 'This page doesn’t exist.' })).toBeInTheDocument();
        await userEvent.click(screen.getByRole('link', { name: 'Back to the portfolio' }));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Crafting Digital');
    });

    it('scrolls to the top when the logo is clicked on the home page', async () => {
        renderApp('/');
        await userEvent.click(screen.getByRole('link', { name: 'Jessica Ladislau, home' }));
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0 });
    });

    it('exposes proficiency bars with an accessible description', () => {
        renderApp('/');
        expect(
            screen.getByRole('img', { name: 'UI/UX Design & Prototyping: 2 yrs of professional use' }),
        ).toBeInTheDocument();
    });

    it('offers the resume as a download', () => {
        renderApp('/');
        expect(screen.getByRole('link', { name: 'Download resume' })).toHaveAttribute(
            'download',
            'Jessica-Ladislau-Resume.pdf',
        );
    });

    it('keeps the tech marquee duplicate hidden from assistive tech', () => {
        renderApp('/');
        const marquee = screen.getByRole('region', { name: 'Tech stack' });
        expect(within(marquee).getAllByRole('list')).toHaveLength(1);
    });
});
