import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';

beforeEach(() => {
    Element.prototype.setPointerCapture = jest.fn();
    Element.prototype.releasePointerCapture = jest.fn();
});

describe('grab feedback list is working', () => {
    it('should add cursor-grabbing class on pointer down', () => {
        render(<Home />);

        const scroller = screen.getByRole('grab-region') as HTMLDivElement;
        fireEvent.pointerDown(scroller, { clientX: 100, pointerId: 1 });

        expect(scroller).toHaveClass('cursor-grabbing');
        expect(Element.prototype.setPointerCapture).toHaveBeenCalled();
    });
    it('should move scroll position on pointer move', async () => {
        const user = userEvent.setup();

        render(<Home />);

        const scroller = screen.getByRole('grab-region') as HTMLDivElement;

        Object.defineProperty(scroller, 'scrollLeft', {
            writable: true,
            value: 100, // Initial value of scroll
        });

        // Simulate the drag event sequence with clientX
        // The userEvent will simulate the down on clientX 200 and move on clientX 150
        await user.pointer([
            { keys: '[MouseLeft>]', target: scroller, coords: { clientX: 200 } },
            { coords: { clientX: 150 } }, // 100 - (150 - 200) = 150
        ]);

        const expectedScrollLeft = 150;
        expect(scroller.scrollLeft).toBe(expectedScrollLeft);
    });
    it('should remove cursor-grabbing class on pointer up', () => {
        render(<Home />);

        const scroller = screen.getByRole('grab-region') as HTMLDivElement;

        fireEvent.pointerDown(scroller, { clientX: 100, pointerId: 1 });
        fireEvent.pointerUp(scroller, { pointerId: 1 });

        expect(scroller).not.toHaveClass('cursor-grabbing');
        expect(scroller).toHaveClass('cursor-grab');
    });
    it('should stop dragging when pointer is canceled', () => {
        render(<Home />);

        const scroller = screen.getByRole('grab-region') as HTMLDivElement;

        fireEvent.pointerDown(scroller, { clientX: 100, pointerId: 1 });
        fireEvent.pointerCancel(scroller, { pointerId: 1 });

        expect(scroller).not.toHaveClass('cursor-grabbing');
        expect(scroller).toHaveClass('cursor-grab');
    });
});
