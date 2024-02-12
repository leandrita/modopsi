import React, { useState } from "react";
import './Menu.css';
import { Link } from "react-router-dom";
import CruzGreen from '../../assets/CruzGreen.svg';
import MenuCream from '../../assets/MenuCream.svg';
import MenuGreen from '../../assets/MenuGreen.svg';

const Menu = ({ icon }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const menuIcon = icon === 'MenuCream.svg' ? MenuCream : MenuGreen;

    return (
        <div className="menu-container">
            {menuVisible && <div className="overlay" onClick={toggleMenu}></div>}
            <div className="menu-hamburguesa">
                <div className="menu-icon" onClick={toggleMenu}>
                    <img src={menuIcon} alt="" className='menu-icon-img' />
                </div>
                {menuVisible && (
                    <div>
                        <div className="close-icon" onClick={toggleMenu}>
                            <span><img src={CruzGreen} alt="" className='close-icon-img' /></span>
                        </div>
                        <ul className="menu-list">
                            <li className="list-item">
                                <Link to={'/'} className='menu-link'>
                                    <p>Quienes somos?</p>
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to={'/therapies'} className='menu-link'>
                                    <p>Terapias</p>
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to={'/team'} className='menu-link'>
                                    <p>Equipo</p>
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link to={'/contact'} className='menu-link'>
                                    <p>Contacto</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
