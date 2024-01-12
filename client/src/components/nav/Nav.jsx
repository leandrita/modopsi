import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ isHomePage }) => {
    return (
        <div className={`links ${isHomePage ? 'home-page' : ''}`}>
            <Link to={'/'} className='link'><p>Quienes somos?</p></Link>
            <Link to={'/terapies'} className='link'><p>Terapias</p></Link>
            <Link to='' className='link'><p>Equipo</p></Link>
            <Link to='' className='link'><p>Contacto</p></Link>
        </div>

    )
}

export default Nav