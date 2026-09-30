import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import '@fontsource/outfit/latin-800.css';
import '@fontsource/roboto/latin-300-italic.css';
import '@fontsource/roboto/latin-700.css';
import '@fontsource/spline-sans/latin-400.css';
import '@fontsource/spline-sans/latin-500.css';
import '@fontsource/spline-sans/latin-600.css';
import '@fontsource/spline-sans/latin-700.css';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
