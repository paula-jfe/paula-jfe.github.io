export interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

export type ContactField = keyof ContactFormValues;

export type ContactFormErrors = Partial<Record<ContactField, string>>;

export interface SendMessageResult {
    ok: boolean;
    status?: number;
    errors?: string;
}
