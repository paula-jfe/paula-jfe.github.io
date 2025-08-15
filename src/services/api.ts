import { FormData, FormspreeResponse, FormspreeAPIResponse } from '../types/sections/Contact';
const apiURL = 'https://formspree.io/f/mdkdyywe';

export async function sendMessage(form: FormData): Promise<FormspreeAPIResponse> {
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const data: FormspreeAPIResponse = await response.json();

        if (response.ok) {
            return { ok: true, next: data.next };
        } else {
            const errorMessage =
                data.errors && Array.isArray(data.errors)
                    ? data.errors.map((err: { message: string }) => err.message).join(', ')
                    : 'Unknown error';

            throw { ok: false, errors: errorMessage } as FormspreeAPIResponse;
        }
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'errors' in error) {
            return error as FormspreeAPIResponse;
        }

        return { ok: false, errors: 'Unexpected error occurred' };
    }
}
