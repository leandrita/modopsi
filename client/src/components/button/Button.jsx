import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button type="submit" className={`button ${props.bgColorClass} ${props.widthClass} ${props.fsClass} ${props.hoverClass}`}>{props.text}</button>
    );
};

export default Button;