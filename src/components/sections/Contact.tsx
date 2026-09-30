import React from 'react';

import resume from '../../assets/resume/CV_Jessica_TR.02v.pdf';
import { EMAIL, SOCIAL_LINKS } from '../../data/content';
import Button from '../ui/Button';
import ContactForm from './ContactForm';
import { textLinkClasses } from '../ui/textLink';

const directLinkClasses = `break-all text-body-lg font-semibold ${textLinkClasses({ onDark: true })}`;

const Contact: React.FC = () => (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-surface-alt px-3 md:px-0">
        <div className="container-content !px-0 md:!px-10 xl:!px-0">
            <div
                className="relative grid items-center gap-8 overflow-hidden rounded-lg px-5 py-10 shadow-[0_32px_64px_-16px_rgba(127,19,236,0.25)] md:gap-10 md:rounded-xl md:px-12 md:py-14 xl:grid-cols-[minmax(0,1fr)_500px] xl:gap-16 xl:p-20"
                style={{ backgroundImage: 'linear-gradient(115deg, #6A0FD0 0%, #7F13EC 60%, #B940A7 100%)' }}
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-36 -top-44 h-[420px] w-[420px] rounded-full bg-accent-yellow/[0.18] blur-[120px]"
                />
                <div className="relative flex flex-col items-start gap-7">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.14] px-3 py-1.5 text-caption font-bold uppercase tracking-[0.06em] text-white">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-yellow" />
                        Available for projects
                    </p>
                    <h2 id="contact-title" className="text-heading-1 font-bold tracking-[-0.02em] text-white">
                        Have a project <br />
                        <span className="text-accent-yellow">in mind?</span>
                    </h2>
                    <p className="max-w-[492px] text-body-lg text-white/85">
                        I’m open to freelance projects and full-time roles. Tell me what you’re
                        building. I usually reply within a day.
                    </p>
                    <dl className="flex w-full flex-col gap-3">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                            <dt className="w-20 shrink-0 text-caption font-bold uppercase tracking-[0.06em] text-white/60">
                                Email
                            </dt>
                            <dd>
                                <a href={`mailto:${EMAIL}`} className={directLinkClasses}>
                                    {EMAIL}
                                </a>
                            </dd>
                        </div>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                            <dt className="w-20 shrink-0 text-caption font-bold uppercase tracking-[0.06em] text-white/60">
                                LinkedIn
                            </dt>
                            <dd>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={directLinkClasses}
                                >
                                    linkedin.com/in/jessica-ladislau
                                    <span className="sr-only"> (opens in a new tab)</span>
                                </a>
                            </dd>
                        </div>
                    </dl>
                    <Button
                        href={resume}
                        download="Jessica-Ladislau-Resume.pdf"
                        variant="onDark"
                        icon="download"
                        className="w-full sm:w-auto"
                    >
                        Download resume
                    </Button>
                </div>
                <div className="relative">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
