import React from 'react'
import { useLocation } from 'react-router-dom'
import './Home.css'
import Header from '../../components/header/Header'
import Logo2 from '../../assets/Logo2.svg'
import Button from '../../components/button/Button'

const Home = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={`home-bg ${isHomePage ? 'home-page' : ''}`}>
            <Header currentPage={location.pathname} />
            <div className='hero-home'>
                <img className='big-logo' src={Logo2} alt="Logo" />
                <h2 className='about'>Somos un equipo de profesionales que ofrecen orientación personalizada, ayudándote a superar desafíos y encontrar un equilibrio en tu bienestar emocional.</h2>
                <Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' />
            </div>
            <div className='hero-value'>
                <h1 className='value-title'>Importancia de la salud mental</h1>
                <p className={`underline-sup ${isHomePage ? 'home-page' : ''}`}></p>
                <p className={`underline-inf ${isHomePage ? 'home-page' : ''}`}></p>
                <div className='value-text-box'>
                    <p className='value-text'>La salud mental es un viaje íntimo y personal, una conexión profunda contigo mismo. Un proceso continuo de autodescubrimiento y autocuidado.</p>
                    <p className='value-text'>En este espacio, te invitamos a explorar la riqueza de tu mundo interior, a entender que cuidar de tu bienestar mental es una forma de amor propio, un acto de compasión hacia tu ser.</p>
                    <p className='value-text'>Cuida de tu mente con la misma dedicación con la que cuidarías de un amigo. Permítete el espacio para respirar, para reflexionar, para crecer.</p>
                    <p className='value-text'>En este rincón seguro, te ofrecemos el acompañamiento necesario para que florezcas en tu singularidad.</p>
                    <p className='value-text'>La importancia de la salud mental radica en abrazar tu autenticidad, en nutrir tu bienestar desde adentro.</p>
                    <p className='value-text'>Te invitamos a ser amable contigo mismo, a reconocer la belleza en la vulnerabilidad y a descubrir la serenidad que proviene de honrar tu salud mental.</p>
                </div>
            </div>
        </div>
    )
}

export default Home