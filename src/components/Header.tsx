import React from 'react';
import logo from '../assets/logos/logo_light.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    return (
        <header className="header padding-x-5p">
            <div
                style={{
                    alignItems: 'center',
                    cursor: 'pointer',
                    display: 'flex',
                    flexShrink: 0,
                    justifyContent: 'center',
                }}
            >
                <a href="#herobanner" className="hover:scale-110 transition-transform">
                    <img src={logo} alt="J smile logo" style={{ width: '40px', height: '40px' }} />
                </a>
            </div>
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
                    className="hover:scale-110 transition-transform bg-transparent text-24b text-perano-700 font-roboto"
                >
                    About
                </button>
                <button
                    type="button"
                    className="hover:scale-110 transition-transform bg-transparent text-24b text-perano-700 font-roboto"
                >
                    Contact
                </button>
                <a
                    href="https://github.com/paula-jfe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <GitHubIcon
                        fontSize="inherit"
                        className="w-8 h-8 text-perano-700"
                        style={{ width: '35px', height: '35px' }}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/jessica-ladislau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                >
                    <LinkedInIcon
                        fontSize="inherit"
                        className="w-8 h-8 text-perano-700 scale-[1.34]"
                        style={{ width: '32px', height: '32px' }}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
