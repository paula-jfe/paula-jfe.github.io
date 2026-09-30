import React from 'react';
import { preload } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';
import robotoBold from './assets/fonts/Roboto-Bold.woff2';
import splineSansRegular from './assets/fonts/SplineSans-Regular.woff2';
import './index.css';

// Fetch the headline and body fonts early (React 19 resource API) to avoid a font swap flash.
[robotoBold, splineSansRegular].forEach((href) =>
    preload(href, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
