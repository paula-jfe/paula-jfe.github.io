import { ContactFormValues, SendMessageResult } from '../types/contact';

const apiURL = 'https://formspree.io/f/mdkdyywe';

export async function sendMessage(form: ContactFormValues): Promise<SendMessageResult> {
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return { ok: true, status: response.status };
        }

        const data: { errors?: { message: string }[] } = await response.json().catch(() => ({}));
        const errors = Array.isArray(data.errors)
            ? data.errors.map((err) => err.message).join(', ')
            : 'Unknown error';

        return { ok: false, status: response.status, errors };
    } catch {
        return { ok: false, errors: 'Network error' };
    }
}
