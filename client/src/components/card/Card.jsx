import React from 'react'
import './Card.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Card = ({ currentPage, therapy, professional }) => {
    const linkTo = currentPage === 'team' ? `/professional/${professional.id}` : `/therapy/${therapy.id}`;
    // console.log(professional);

    return (
        <div className={currentPage === 'team' ? 'professional-box' : 'therapy-box'}>
            {currentPage === 'team' && professional ? (
                <>
                    <img className='avatar' src={professional.image_url} alt='professional avatar' />
                    <div className='professional-data'>
                        <h2 className='professional-name'>{professional.name}</h2>
                        <p className='professional-title'>{professional.title}</p>
                    </div>
                </>
            ) : (
                <>
                    {therapy && <h2 className='therapy-title'>{therapy.title}</h2>}
                </>
            )}
            <Link to={linkTo}>
                <Button bgColorClass='more-info-button-bgc' text='Más información' widthClass='more-info-button-width' fsClass='more-info-button-fs' hoverClass='more-info-button-hover' />
            </Link>
        </div>
    );
};

export default Card;