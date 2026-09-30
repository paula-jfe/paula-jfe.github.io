import { sendMessage } from '../services/api';

const form = { name: 'Jane', email: 'jane@company.com', message: 'Hello there, this is a test.' };

describe('sendMessage', () => {
    const originalFetch = globalThis.fetch;
    afterEach(() => {
        globalThis.fetch = originalFetch;
    });

    it('posts JSON to Formspree and reports success', async () => {
        const fetchMock = jest.fn().mockResolvedValue({ ok: true, status: 200 });
        globalThis.fetch = fetchMock as unknown as typeof fetch;

        await expect(sendMessage(form)).resolves.toEqual({ ok: true, status: 200 });
        const [, init] = fetchMock.mock.calls[0];
        expect(init.method).toBe('POST');
        expect(JSON.parse(init.body)).toEqual(form);
    });

    it('returns the server errors and status on failure', async () => {
        globalThis.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 422,
            json: () => Promise.resolve({ errors: [{ message: 'email invalid' }, { message: 'too short' }] }),
        }) as unknown as typeof fetch;

        await expect(sendMessage(form)).resolves.toEqual({
            ok: false,
            status: 422,
            errors: 'email invalid, too short',
        });
    });

    it('handles unreadable error bodies', async () => {
        globalThis.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 429,
            json: () => Promise.reject(new Error('not json')),
        }) as unknown as typeof fetch;

        await expect(sendMessage(form)).resolves.toEqual({
            ok: false,
            status: 429,
            errors: 'Unknown error',
        });
    });

    it('reports network failures', async () => {
        globalThis.fetch = jest.fn().mockRejectedValue(new TypeError('offline')) as unknown as typeof fetch;
        await expect(sendMessage(form)).resolves.toEqual({ ok: false, errors: 'Network error' });
    });
});
