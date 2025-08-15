import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

describe('changing page location is possible', () => {
    it('should update window.location.hash on button click and go to about section', () => {
        render(<Home />);
        const aboutButton = screen.getByRole('button', {
            name: 'Go to about section with experience and education information',
        });

        fireEvent.click(aboutButton);

        expect(window.location.hash).toBe('#about');
    });
    it('should update window.location.hash on button click and go to contact section', () => {
        render(<Home />);
        const contactButton = screen.getByRole('button', {
            name: 'Go to contact section with contact form',
        });

        fireEvent.click(contactButton);

        expect(window.location.hash).toBe('#contact');
    });
});
