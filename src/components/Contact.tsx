import React from 'react';
import ContactForm from './ContactForm';
import dev_vector from '../assets/pictures/dev_vector.svg';
import polygon from '../assets/pictures/polygon.svg';
import logo_smiling from '../assets/pictures/logo_smiling.svg';

const Contact = () => {
    return (
        <div className="padding-x-5p h-full w-full">
            <div className="h-auto w-full contact-container flex flex-col items-center justify-center">
                <h2 className="text-h1 text-light_orchid-50 py-12 text-center">Let's connect</h2>
                <div className="h-auto w-full grid grid-cols-12 gap-8 place-items-center mx-auto">
                    <div className="w-full col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <ContactForm />
                    </div>
                    <div className="w-full col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 relative">
                        <div className="group relative w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto md:mx-0 md:right-0 md:-translate-x-[-20%]">
                            <img
                                key="2"
                                src={dev_vector}
                                alt="Developer vector"
                                className="absolute inset-0 w-full h-full md:-translate-y-[2%] object-contain transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0"
                            />
                            <img
                                key="3"
                                src={logo_smiling}
                                alt="Smiling logo"
                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="py-12">
                    <p className="text-center text-light_orchid-50 text-14b">
                        © All rights reserved
                    </p>
                    <p className="text-center text-light_orchid-50 text-14b">
                        Made by Jessica Ladislau
                    </p>
                </div>
            </div>

            <img
                key="1"
                src={polygon}
                alt="Polygon background"
                className="absolute top-0 right-0 z-[-1] -translate-y-[0%] -translate-x-[0%] sm:-translate-y-[0%] sm:-translate-x-[-0%] lg:-translate-y-[3%] lg:-translate-x-[-5%] object-cover"
                style={{ height: '910px', width: '1200px' }}
            />
        </div>
    );
};
export default Contact;
