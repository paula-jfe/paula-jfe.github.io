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
            <div
                style={{
                    cursor: 'pointer',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}
            >
                <h1 className="text-3xl font-bold underline decoration-sky-500">Hello world!</h1>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                    About
                </button>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                    Contact
                </button>
                <GitHubIcon />
                <LinkedInIcon />
            </div>
        </header>
    );
};

export default Header;
