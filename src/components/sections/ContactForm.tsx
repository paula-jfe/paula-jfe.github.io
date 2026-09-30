import React, { useEffect, useRef, useState } from 'react';

import { EMAIL } from '../../data/content';
import * as api from '../../services/api';
import type { ContactField, ContactFormErrors, ContactFormValues } from '../../types/contact';
import Button from '../ui/Button';
import FormField from '../ui/FormField';
import Icon from '../ui/Icon';

export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 2000;
const COUNTER_FROM = 1800;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'sending' | 'error' | 'offline' | 'rateLimited' | 'success';

const EMPTY: ContactFormValues = { name: '', email: '', message: '' };
const FIELD_ORDER: ContactField[] = ['name', 'email', 'message'];

export function validateField(field: ContactField, value: string): string | undefined {
    const trimmed = value.trim();
    if (field === 'name') {
        return trimmed.length < 2 ? 'Please enter your name.' : undefined;
    }
    if (field === 'email') {
        return EMAIL_PATTERN.test(trimmed) ? undefined : 'Please enter a valid email address.';
    }
    if (trimmed.length > MESSAGE_MAX) {
        return `${trimmed.length.toLocaleString('en-US')} / ${MESSAGE_MAX.toLocaleString('en-US')} characters. Please shorten your message.`;
    }
    return trimmed.length < MESSAGE_MIN
        ? `Please write at least ${MESSAGE_MIN} characters.`
        : undefined;
}

export function validate(values: ContactFormValues): ContactFormErrors {
    return FIELD_ORDER.reduce<ContactFormErrors>((acc, field) => {
        const error = validateField(field, values[field]);
        return error ? { ...acc, [field]: error } : acc;
    }, {});
}

const FAILURE_COPY: Record<'error' | 'offline' | 'rateLimited', { title: string; body: string }> = {
    error: {
        title: 'Message not sent',
        body: `Something went wrong on our side. Your text is still here. Try again, or email ${EMAIL}.`,
    },
    offline: {
        title: 'You’re offline',
        body: 'Your message is saved here. Reconnect to the internet and press Try again.',
    },
    rateLimited: {
        title: 'Too many attempts',
        body: `Please wait a minute before sending again, or email ${EMAIL}.`,
    },
};

const Alert: React.FC<{ title: string; children: React.ReactNode; alertRef?: React.Ref<HTMLDivElement> }> = ({
    title,
    children,
    alertRef,
}) => (
    <div
        ref={alertRef}
        role="alert"
        tabIndex={-1}
        className="flex gap-3 rounded-sm border border-danger/30 bg-danger-bg px-4 py-3.5 focus:outline-hidden focus-visible:shadow-[0_0_0_4px_rgba(217,45,53,0.25)]"
    >
        <span
            aria-hidden="true"
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger text-white"
        >
            <Icon name="alert" size={16} strokeWidth={3} />
        </span>
        <div className="flex flex-col gap-1">
            <p className="text-body-sm font-bold text-danger">{title}</p>
            <div className="text-body-sm text-ink">{children}</div>
        </div>
    </div>
);

const ContactForm: React.FC = () => {
    const [values, setValues] = useState<ContactFormValues>(EMPTY);
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState<Status>('idle');
    const [honeypot, setHoneypot] = useState('');
    const summaryRef = useRef<HTMLDivElement>(null);
    const failureRef = useRef<HTMLDivElement>(null);
    const successRef = useRef<HTMLDivElement>(null);

    const errorCount = Object.keys(errors).length;
    const showSummary = submitted && errorCount > 0;

    useEffect(() => {
        if (status === 'success') successRef.current?.focus();
        if (status === 'error' || status === 'offline' || status === 'rateLimited') {
            failureRef.current?.focus();
        }
    }, [status]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = event.target.name as ContactField;
        const next = { ...values, [field]: event.target.value };
        setValues(next);
        if (errors[field]) {
            const error = validateField(field, next[field]);
            setErrors((prev) => {
                const copy = { ...prev };
                if (error) copy[field] = error;
                else delete copy[field];
                return copy;
            });
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const field = event.target.name as ContactField;
        if (!values[field] && !submitted) return;
        const error = validateField(field, values[field]);
        setErrors((prev) => {
            const copy = { ...prev };
            if (error) copy[field] = error;
            else delete copy[field];
            return copy;
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === 'sending') return;

        if (honeypot) {
            setStatus('success');
            return;
        }

        const found = validate(values);
        setSubmitted(true);
        setErrors(found);
        if (Object.keys(found).length > 0) {
            requestAnimationFrame(() => summaryRef.current?.focus());
            return;
        }

        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
            setStatus('offline');
            return;
        }

        setStatus('sending');
        const result = await api.sendMessage({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
        });

        if (result.ok) setStatus('success');
        else if (result.status === 429) setStatus('rateLimited');
        else setStatus('error');
    };

    const reset = () => {
        setValues(EMPTY);
        setErrors({});
        setSubmitted(false);
        setStatus('idle');
        requestAnimationFrame(() => document.getElementById('name')?.focus());
    };

    if (status === 'success') {
        const firstName = values.name.trim().split(' ')[0];
        return (
            <div
                ref={successRef}
                role="status"
                tabIndex={-1}
                className="flex flex-col items-center gap-4 rounded-lg bg-white px-6 py-14 text-center shadow-[0_24px_48px_0_rgba(26,0,51,0.18)] focus:outline-hidden md:px-10"
            >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success-bg text-success">
                    <Icon name="check" size={30} strokeWidth={2.5} />
                </span>
                <p className="font-sans text-heading-5 font-bold text-ink">Message sent!</p>
                <p className="text-body text-muted">
                    Thanks{firstName ? `, ${firstName}` : ''}. I usually reply within a day.
                </p>
                <Button variant="secondary" fullWidth onClick={reset}>
                    Send another message
                </Button>
            </div>
        );
    }

    const sending = status === 'sending';
    const failure = status === 'error' || status === 'offline' || status === 'rateLimited';
    const messageLength = values.message.trim().length;

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            aria-busy={sending}
            aria-labelledby="contact-form-title"
            className="flex flex-col gap-5 rounded-lg bg-white p-5 shadow-[0_24px_48px_0_rgba(26,0,51,0.18)] md:p-10"
        >
            <h3 id="contact-form-title" className="font-sans text-heading-5 font-bold text-ink">
                Send me a message
            </h3>

            {showSummary && (
                <Alert
                    alertRef={summaryRef}
                    title={`Please fix ${errorCount} field${errorCount > 1 ? 's' : ''}`}
                >
                    Your message wasn’t sent. Check the highlighted field{errorCount > 1 ? 's' : ''}{' '}
                    below.
                </Alert>
            )}
            {failure && (
                <Alert alertRef={failureRef} title={FAILURE_COPY[status].title}>
                    {FAILURE_COPY[status].body}
                </Alert>
            )}

            <FormField
                id="name"
                label="Name"
                placeholder="Jane Smith"
                autoComplete="name"
                value={values.name}
                error={errors.name}
                disabled={sending}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <FormField
                id="email"
                type="email"
                label="Email"
                placeholder="jane@company.com"
                autoComplete="email"
                value={values.email}
                error={errors.email}
                disabled={sending}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <FormField
                id="message"
                label="Message"
                placeholder="Tell me about your project…"
                multiline
                value={values.message}
                error={errors.message}
                hint={
                    messageLength >= COUNTER_FROM
                        ? `${messageLength.toLocaleString('en-US')} / ${MESSAGE_MAX.toLocaleString('en-US')} characters`
                        : undefined
                }
                disabled={sending}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                />
            </div>

            <Button
                type="submit"
                fullWidth
                disabled={sending}
                icon={sending ? undefined : failure ? 'retry' : 'arrowRight'}
                className={sending ? '!bg-brand/75 !text-white' : ''}
            >
                {sending && (
                    <span
                        aria-hidden="true"
                        className="h-[18px] w-[18px] animate-spin rounded-full border-[2.5px] border-white border-r-transparent"
                    />
                )}
                {sending ? 'Sending…' : failure ? 'Try again' : 'Send message'}
            </Button>
        </form>
    );
};

export default ContactForm;
