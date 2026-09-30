import React from 'react';

interface FormFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    error?: string;
    hint?: string;
    multiline?: boolean;
    type?: 'text' | 'email';
    autoComplete?: string;
    maxLength?: number;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const fieldBase =
    'w-full rounded-sm border-[1.5px] bg-surface-page px-4 font-sans text-body text-ink placeholder:text-placeholder transition-[border-color,box-shadow,background-color] duration-200 ease-out hover:border-brand-subtle focus:border-2 focus:border-brand focus:bg-white focus:shadow-[0_0_0_4px_rgba(127,19,236,0.15)] focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-70';

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    value,
    placeholder,
    error,
    hint,
    multiline = false,
    type = 'text',
    autoComplete,
    maxLength,
    disabled,
    onChange,
    onBlur,
}) => {
    const describedBy = [error ? `${id}-error` : '', hint ? `${id}-hint` : '']
        .filter(Boolean)
        .join(' ');
    const stateClasses = error ? 'border-danger border-2 hover:border-danger' : 'border-line';
    const shared = {
        id,
        name: id,
        value,
        placeholder,
        disabled,
        onChange,
        onBlur,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': describedBy || undefined,
        'aria-required': true,
    };

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-body-sm font-semibold text-ink">
                {label}
            </label>
            {multiline ? (
                <textarea
                    {...shared}
                    rows={5}
                    className={`${fieldBase} ${stateClasses} min-h-32 resize-y py-3.5`}
                />
            ) : (
                <input
                    {...shared}
                    type={type}
                    autoComplete={autoComplete}
                    maxLength={maxLength}
                    className={`${fieldBase} ${stateClasses} h-12`}
                />
            )}
            {error && (
                <p id={`${id}-error`} className="text-caption font-medium text-danger">
                    {error}
                </p>
            )}
            {hint && !error && (
                <p id={`${id}-hint`} className="text-caption text-muted">
                    {hint}
                </p>
            )}
        </div>
    );
};

export default FormField;
