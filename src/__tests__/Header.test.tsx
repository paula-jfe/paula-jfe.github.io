import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';
import * as scrollUtils from '../helpers/handleClickScroll';

jest.mock('../helpers/handleClickScroll', () => ({
    handleClickScroll: jest.fn(),
}));

afterEach(() => {
    jest.clearAllMocks();
});

describe('changing page location is possible', () => {
    it('should update page location on button click and go to about section', () => {
        render(<Home motion={false} />);
        const aboutButton = screen.getByRole('button', {
            name: 'Go to about section with experience and education information',
        });

        fireEvent.click(aboutButton);

        const handleClickMethod = scrollUtils.handleClickScroll;
        expect(handleClickMethod).toHaveBeenCalled();
        expect(handleClickMethod).toHaveBeenCalledTimes(1);
        expect(handleClickMethod).toHaveBeenCalledWith(expect.anything(), 'about');
    });
    it('should update page location on button click and go to contact section', () => {
        render(<Home motion={false} />);
        const contactButton = screen.getByRole('button', {
            name: 'Go to contact section with contact form',
        });

        fireEvent.click(contactButton);

        const handleClickMethod = scrollUtils.handleClickScroll;
        expect(handleClickMethod).toHaveBeenCalled();
        expect(handleClickMethod).toHaveBeenCalledTimes(1);
        expect(handleClickMethod).toHaveBeenCalledWith(expect.anything(), 'contact');
    });
    it('should update page location on button click and go to herobanner section', () => {
        render(<Home motion={false} />);
        const logoIconButton = screen.getByAltText('Header J smile logo');

        fireEvent.click(logoIconButton);

        const handleClickMethod = scrollUtils.handleClickScroll;
        expect(handleClickMethod).toHaveBeenCalled();
        expect(handleClickMethod).toHaveBeenCalledTimes(1);
        expect(handleClickMethod).toHaveBeenCalledWith(expect.anything(), 'herobanner');
    });
});
