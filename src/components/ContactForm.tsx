import React from 'react';

const ContactForm = () => {
    return (
        <form className="flex flex-col items-center justify-center p-4">
            <input
                type="text"
                placeholder="Your Name"
                className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
            />
            <textarea
                placeholder="Your Message"
                className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md h-32"
            ></textarea>
            <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
