import React from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')); 

const App = () => {
    return <h1>React działa!</h1>;
};

root.render(<App></App>)