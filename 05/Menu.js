import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../03/MenuItem';

const Menu = ({items}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <MenuItem 
                    key={index}
                    text={item.text}
                    url={item.url}
                />    
            ))}
        </ul>
    );
};

Menu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Menu;