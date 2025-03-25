import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuItem from './MenuItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <ul>
            <MenuItem text='home' url='/index.html'></MenuItem>
            <MenuItem text='contact' url='/contact'></MenuItem>
        </ul>
    );
};

root.render(<App></App>);