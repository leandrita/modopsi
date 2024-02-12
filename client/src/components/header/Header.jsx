import React, { useState, useEffect } from "react";
import './Header.css'
import Logo3 from '../../assets/Logo3.svg'
import Nav from '../../components/nav/Nav'
import Menu from '../menu/Menu'

const Header = ({ currentPage }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isHomePage = currentPage === '/';
    const isSmallScreen = !isLargeScreen;
    const isHomePageClass = isHomePage ? 'home-page' : '';
    const menuIcon = isHomePage ? 'MenuCream.svg' : 'MenuGreen.svg';

    return (
        <div className={`header ${isHomePageClass}`}>
            {isSmallScreen ? (
                isHomePage ? <Menu currentPage={currentPage} icon={menuIcon} /> : (
                    <>
                        <img className='small-logo' src={Logo3} alt="Logo" />
                        <Menu currentPage={currentPage} icon={menuIcon} />
                    </>
                )
            ) : (
                <>
                    {isHomePage ? <Nav isHomePage={true} /> : (
                        <>
                            <img className='small-logo' src={Logo3} alt="Logo" />
                            <Nav isHomePage={false} />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Header