import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './index.css';

const App: React.FC = () => (
    <div>
        <Home />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
