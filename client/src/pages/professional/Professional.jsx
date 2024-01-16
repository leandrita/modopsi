import React from 'react'
import './Professional.css'
import Header from '../../components/header/Header'
import Perfil2 from '../../assets/Perfil2.svg'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const Professional = () => {
    return (
        <div className='professional-bg'>
            <Header />
            <div className='hero-professional'>
                <img className='avatar' src={Perfil2} alt='professional avatar' />
                <h2 className='professional-name'>María Susana Giménez</h2>
                <div className='professional-description-box'>
                    <div className='profile-section'>
                        <h3 className='profile-title'>Perfil</h3>
                        <p className='profile-info'>El primer objetivo de nuestras sesiones será que seas más consciente de cómo interpretas los acontecimientos de tu vida y cómo condicionan tus reacciones. Mientras tanto, descubriremos tus recursos internos para potenciarlos y, al mismo tiempo, combinarlos con nuevas habilidades que te ayudarán a alcanzar los objetivos que te propongas.</p>
                    </div>
                    <div className='profile-section'>
                        <h3 className='profile-title'>Áreas de trabajo</h3>
                        <ul>
                            <li className='profile-info' >Adicciones conductuales (relaciones, compras, juegos de azar...)</li>
                            <li className='profile-info'>Adicción a las drogas</li>
                            <li className='profile-info'>Trastornos con la alimentación</li>
                        </ul>
                    </div>
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    );
};

export default Professional;