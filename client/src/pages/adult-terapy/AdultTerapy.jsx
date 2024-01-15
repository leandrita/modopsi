import React from 'react'
import './AdultTerapy.css'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const AdultTerapy = () => {
    return (
        <div className='terapy-bg'>
            <Header />
            <div className='hero-terapy'>
                <div className='adult-terapy-title-cont'>
                    <h1 className='adult-terapy-title'>Terapia Individual Adulto</h1>
                    <p className='underline-sup'></p>
                    <p className='underline-inf'></p>
                </div>
                <div className='content'>
                    <div className='terapy-description-box'>
                        <p className='terapy-info'>Nuestras sesiones de terapia psicológica individual para adultos, son un espacio seguro y confidencial donde puedes explorar y fortalecer tu bienestar emocional.</p>
                        <p className='terapy-info'>En cada sesión, te invitamos a sumergirte en un viaje de autoconocimiento, crecimiento personal y desarrollo de habilidades para afrontar los desafíos de la vida.</p>
                        <p className='terapy-info'>Nuestros psicólogos altamente capacitados ofrecen un enfoque compasivo y personalizado, adaptándose a tus necesidades y metas específicas.</p>
                        <p className='terapy-info'>Trabajaremos juntos para comprender tus pensamientos, emociones y patrones de comportamiento, identificando áreas de fortaleza y oportunidades para el cambio positivo.</p>
                    </div>
                    <div className='terapy-oportunity-box'>
                        <h2 className='oportunity-title'>Cada sesión es una oportunidad para:</h2>
                        <div className='oportunity-box'>
                            <p className='oportunity-text'>Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.</p>
                        </div>
                        <div className='oportunity-box'>
                            <p className='oportunity-text'>Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.</p>
                        </div>
                        <div className='oportunity-box'>
                            <p className='oportunity-text'>Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.</p>
                        </div>
                    </div>
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    );
};

export default AdultTerapy;