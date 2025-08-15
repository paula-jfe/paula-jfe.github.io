import { ReactNode, HTMLAttributes } from 'react';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export interface FormspreeResponse {
    ok: boolean;
    next?: string;
}

export interface FormspreeAPIResponse extends FormspreeResponse {
    errors?: string;
}
