import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuItem from '../03/MenuItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Menu = () => {
    return (
        <ul>
            <MenuItem text='home' url='/'></MenuItem>
            <MenuItem text='kontakt' url='/contact'></MenuItem>
        </ul>
    );
};

const Nav = () => {
    return (
        <nav>
            <Menu></Menu>
        </nav>
    );
};

root.render(<Menu></Menu>);