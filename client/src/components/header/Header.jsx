import React from 'react'
import './Header.css'
import Logo3 from '../../assets/Logo3.svg'
import Nav from '../../components/nav/Nav'

const Header = ({ currentPage }) => {

    const isHomePage = currentPage === '/';

    return (
        <div className={`header ${isHomePage ? 'home-page' : ''}`}>
            {!isHomePage && <img className='small-logo' src={Logo3} alt="Logo" />}
            <Nav isHomePage={isHomePage} />
        </div>
    )
}

export default Header