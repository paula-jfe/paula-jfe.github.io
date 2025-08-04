import React from 'react';
import logo from '../assets/logos/logo_light.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    return (
        <header className="header">
            <div
                style={{
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}
            >
                <a href="/" className="">
                    <img src={logo} alt="J smile logo" style={{ width: '40px', height: '40px' }} />
                </a>
            </div>
            <div>
                <button className="text-24b bg-blue-500 text-white rounded px-4 py-2">About</button>
                <button className="text-24b bg-blue-500 text-white rounded px-4 py-2">
                    Contact
                </button>
                <GitHubIcon />
                <LinkedInIcon />
            </div>
        </header>
    );
};

export default Header;
