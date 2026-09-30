import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import App from '../App';

export const renderApp = (path = '/') =>
    render(
        <MemoryRouter initialEntries={[path]}>
            <App />
        </MemoryRouter>,
    );
