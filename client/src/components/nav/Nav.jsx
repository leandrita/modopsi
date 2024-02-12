import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ isHomePage }) => {
    const navClass = isHomePage ? 'home-page' : '';

    return (
        <div className={`links ${navClass}`}>
            <Link to={'/'} className='nav-link'><p>Quienes somos?</p></Link>
            <Link to={'/therapies'} className='nav-link'><p>Terapias</p></Link>
            <Link to={'/team'} className='nav-link'><p>Equipo</p></Link>
            <Link to={'/contact'} className='nav-link'><p>Contacto</p></Link>
        </div>

    )
}

export default Nav