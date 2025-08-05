import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './pages/Landing';
import './index.css';

const App = () => (
    <div>
        <Landing />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
