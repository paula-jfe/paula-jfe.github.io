import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import userEvent from '@testing-library/user-event';

let clickMock: jest.Mock;
let createElementSpy: jest.SpyInstance;

beforeEach(() => {
    clickMock = jest.fn();

    // get the original DOM function (document.createElement) before making mocks and bind(document) to ensure that the method's context (this) remains correct
    const realCreateElement = document.createElement.bind(document);

    createElementSpy = jest
        .spyOn(document, 'createElement')
        .mockImplementation((tagName: string) => {
            const element = realCreateElement(tagName) as HTMLAnchorElement; // real DOM element
            if (tagName === 'a') {
                element.click = clickMock; // mock click
            }
            return element;
        });
});

afterEach(() => {
    createElementSpy.mockRestore();
    jest.clearAllMocks();
});

describe('downloadFile inside Home component', () => {
    it('triggers download when button is clicked', async () => {
        render(<Home />);
        const downloadResumeButton = screen.getByRole('button', { name: 'Download resume' });

        await userEvent.click(downloadResumeButton);

        expect(createElementSpy).toHaveBeenCalledWith('a');
        expect(clickMock).toHaveBeenCalled();
    });
});
