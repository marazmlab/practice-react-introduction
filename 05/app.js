import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));

const menuItems = [
    {text: 'strona główna', url:'/'},
    {text: 'kontakt', url:'/contact'},
];

root.render(<Nav items={menuItems}></Nav>);


