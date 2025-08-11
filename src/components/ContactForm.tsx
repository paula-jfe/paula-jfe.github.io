import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import SendIcon from '@mui/icons-material/Send';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [status, setStatus] = useState<'Send' | 'Sending...' | 'Sent!' | 'Error'>('Send');
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
        setErrors({ ...errors, [id]: '' });
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!form.message.trim()) {
            newErrors.message = 'Menssage is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus('Sending...');

        setErrors({
            name: '',
            email: '',
            message: '',
        });

        try {
            const response = await fetch('https://formspree.io/f/mdkdyywe', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setStatus('Sent!');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setStatus('Send');
                }, 3000);
            } else {
                setStatus('Error');
            }
        } catch (error) {
            console.log(error.message);
            setStatus('Error');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto p-8 bg-biloba_flower-50 rounded-[0.2rem]"
        >
            <label htmlFor="name" className="text-left text-biloba_flower-900 font-bold mb-1">
                Name
            </label>
            <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className={`${
                    errors.name ? 'mb-0' : 'mb-6'
                } contact-form-input required focus:outline-none focus:ring-2 focus:ring-biloba_flower-900 p-3 border bg-biloba_flower-200 placeholder-biloba_flower-700 text-sm rounded-[0.2rem] w-full ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                }`}
            />
            <p className={`${errors.name ? 'py-3' : 'py-0'} form-error text-red-600 text-sm`}>
                {errors.name ? errors.name : ''}
            </p>
            <label htmlFor="email" className="text-left text-biloba_flower-900 font-bold mb-1">
                Email
            </label>
            <input
                id="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                autoComplete="email"
                className={`${
                    errors.email ? 'mb-0' : 'mb-6'
                } contact-form-input required focus:outline-none focus:ring-2 focus:ring-biloba_flower-900 p-3 border bg-biloba_flower-200 placeholder-biloba_flower-700 text-sm rounded-[0.2rem] w-full ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                }`}
            />
            <p className={`${errors.email ? 'py-3' : 'py-0'} form-error text-red-600 text-sm`}>
                {errors.email ? errors.email : ''}
            </p>
            <label htmlFor="message" className="text-left text-biloba_flower-900 font-bold mb-1">
                Message
            </label>
            <textarea
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className={`${
                    errors.message ? 'mb-0' : 'mb-6'
                } contact-form-textarea required focus:outline-none focus:ring-2 focus:ring-biloba_flower-900 p-3 border bg-biloba_flower-200 placeholder-biloba_flower-700 text-sm rounded-[0.2rem] w-full h-32 ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-transparent'
                }`}
            ></textarea>
            <p
                className={`${
                    errors.message ? 'pt-2 pb-3' : 'py-0'
                } form-error text-red-600 text-sm`}
            >
                {errors.message ? errors.message : ''}
            </p>
            <div className="flex items-center justify-center">
                <AnimatedButton text={status} type="submit" disabled={status !== 'Send'}>
                    {status === 'Send' && (
                        <SendIcon
                            fontSize="inherit"
                            className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-600 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 text-light_orchid-50 ml-2"
                            style={{ width: '20px', height: '20px' }}
                        />
                    )}
                </AnimatedButton>
            </div>
        </form>
    );
};

export default ContactForm;
