import React from 'react';
import './Card.css';
import Button from '../button/Button';

const Card = () => {
    return (
        <div className='terapy-box'>
            <h2 className='terapy-title'>Terapia Individual Adulto</h2>
            <Button bgColorClass='more-info-button-bgc' text='Más información' widthClass='more-info-button-width' fsClass='more-info-button-fs' hoverClass='more-info-button-hover' />
        </div>
    );
};

export default Card;