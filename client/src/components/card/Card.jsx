import React from 'react'
import Perfil2 from '../../assets/Perfil2.svg'
import './Card.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Card = ({ currentPage }) => {
    const linkTo = currentPage === 'team' ? '/professional' : '/adult-terapy';

    return (
        <div className={currentPage === 'team' ? 'professional-box' : 'terapy-box'}>
            {currentPage === 'team' ? (
                <>
                    <img className='avatar' src={Perfil2} alt='professional avatar' />
                    <h2 className='professional-name'>María Susana Giménez</h2>
                    <p className='profesional-title'>Licenciada en psicología</p>
                </>
            ) : (
                <>
                    <h2 className='terapy-title'>Terapia Individual Adulto</h2>
                </>
            )}
            <Link to={linkTo}>
                <Button bgColorClass='more-info-button-bgc' text='Más información' widthClass='more-info-button-width' fsClass='more-info-button-fs' hoverClass='more-info-button-hover' />
            </Link>
        </div>
    );
};

export default Card;