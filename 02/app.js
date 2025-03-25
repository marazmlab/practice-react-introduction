import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const HeaderFn = () => {
    return <header style={{textAlign: 'center', color: 'blue'}}>Moja pierwsza strona w React</header>;    
};

class HeaderCl extends React.Component {
    render() {
        return <header style={{textAlign: 'center', color: 'green'}}>Moja pierwsza strona w React</header>;
    }
}

const App = () => {
    return (
        <>
            <HeaderFn></HeaderFn>
            <HeaderCl></HeaderCl>
        </>
    );
};

root.render(<App></App>);