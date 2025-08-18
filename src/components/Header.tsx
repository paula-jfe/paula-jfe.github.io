import React from 'react';
import logo from '../assets/logos/logo_light.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { handleClickScroll } from '../helpers/handleClickScroll';

const Header: React.FC = () => {
    return (
        <header id="homepage-header" className="header padding-x-5p">
            <div className="w-full">
                <nav
                    style={{
                        alignItems: 'center',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        flexShrink: 0,
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <button
                        type="button"
                        onClick={(e) => handleClickScroll(e, 'herobanner')}
                        aria-label="Go to top section with download resume button"
                        className="hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biloba_flower-900 focus-visible:rounded-[0.2rem]"
                    >
                        <img
                            src={logo}
                            alt="Header J smile logo"
                            style={{ width: '40px', height: '40px' }}
                        />
                    </button>

                    <div
                        style={{
                            alignItems: 'center',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'row',
                            flexShrink: 0,
                            gap: '1rem',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <button
                            type="button"
                            onClick={(e) => handleClickScroll(e, 'about')}
                            aria-label="Go to about section with experience and education information"
                            className="hover:scale-105 transition-transform bg-transparent text-24b text-perano-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biloba_flower-900 focus-visible:rounded-[0.2rem]"
                        >
                            About
                        </button>
                        <button
                            type="button"
                            onClick={(e) => handleClickScroll(e, 'contact')}
                            aria-label="Go to contact section with contact form"
                            className="hover:scale-105 transition-transform bg-transparent text-24b text-perano-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biloba_flower-900 focus-visible:rounded-[0.2rem]"
                        >
                            Contact
                        </button>
                        <a
                            href="https://github.com/paula-jfe"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to Jessica's GitHub page"
                            className="hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biloba_flower-900 focus-visible:rounded-[0.2rem]"
                        >
                            <GitHubIcon
                                fontSize="inherit"
                                data-testid="header-github-icon"
                                className="w-8 h-8 text-perano-700"
                                style={{ width: '35px', height: '35px' }}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jessica-ladislau/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Go to Jessica's LinkedIn page"
                            className="hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-biloba_flower-900 focus-visible:rounded-[0.2rem]"
                        >
                            <LinkedInIcon
                                fontSize="inherit"
                                data-testid="header-linkedin-icon"
                                className="w-8 h-8 text-perano-700 scale-[1.34]"
                                style={{ width: '32px', height: '32px' }}
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
