import React from 'react'
import './Card.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Card = ({ currentPage, therapy, professional }) => {
    const linkTo = currentPage === 'team' ? '/professional' : '/adult-terapy';

    return (
        <div className={currentPage === 'team' ? 'professional-box' : 'terapy-box'}>
            {currentPage === 'team' && professional ? (
                <>
                    <img className='avatar' src={professional.image_url} alt='professional avatar' />
                    <h2 className='professional-name'>{professional.name}</h2>
                    <p className='profesional-title'>{professional.professional_title}</p>
                </>
            ) : (
                <>
                    {therapy && <h2 className='terapy-title'>{therapy.title}</h2>}
                </>
            )}
            <Link to={linkTo}>
                <Button bgColorClass='more-info-button-bgc' text='Más información' widthClass='more-info-button-width' fsClass='more-info-button-fs' hoverClass='more-info-button-hover' />
            </Link>
        </div>
    );
};

export default Card;