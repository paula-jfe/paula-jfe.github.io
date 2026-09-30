import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

Object.assign(globalThis, { TextEncoder, TextDecoder });

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

/** Minimal IntersectionObserver that lets tests trigger intersections by element id. */
class MockIntersectionObserver {
    static instances: MockIntersectionObserver[] = [];
    elements: Element[] = [];

    constructor(public callback: ObserverCallback) {
        MockIntersectionObserver.instances.push(this);
    }

    observe(element: Element) {
        this.elements.push(element);
    }

    unobserve() {}

    disconnect() {
        this.elements = [];
    }

    trigger(id: string) {
        const target = this.elements.find((el) => el.id === id);
        if (target) this.callback([{ target, isIntersecting: true, intersectionRatio: 1 }]);
    }
}

Object.assign(globalThis, { IntersectionObserver: MockIntersectionObserver });
Element.prototype.scrollIntoView = jest.fn();
window.scrollTo = jest.fn() as unknown as typeof window.scrollTo;
