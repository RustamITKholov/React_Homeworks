import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { totalCount } = useCart();
    const [showMobileIcons, setShowMobileIcons] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuClick = () => {
        if (isMobile) {
            setShowMobileIcons(prev => !prev);
        } else {
            document.getElementById('header_check').click();
        }
    };

    return (
        <div className="top">
            <header className="header center">
                <div className="header__icons">
                    <Link to="/"><img src="/img/header1.svg" alt="logo" /></Link>
                    <Link to="/product"><img src="/img/header2.svg" alt="search" /></Link>
                </div>

                <nav className="header__icons header__icons_right">
                    <div className="menu-icons" onClick={handleMenuClick}>
                        <img style={{ cursor: 'pointer' }} src="/img/header3.svg" alt="menu" />
                    </div>

                    <div className={`mobile-icons ${showMobileIcons ? 'mobile-icons_visible' : ''}`}>
                        <Link className="header__icons_mobile" to="/registration">
                            <img src="/img/header4.svg" alt="registration" />
                        </Link>
                        <Link className="header__icons_mobile cart-icon" to="/cart">
                            <img src="/img/header5.svg" alt="cart" />
                            {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
                        </Link>
                    </div>
                </nav>

                <input className="header__checkbox" id="header_check" type="checkbox" />

                <div className="menu">
                    <h3 className="menu__heading">MENU</h3>

                    <div className="menu__section">
                        <p className="menu-list__title">MAN</p>
                        <ul className="menu-list">
                            <li className="menu__li"><a href="#" className="menu-list__link">Accessories</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Bags</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Denim</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">T-Shirts</a></li>
                        </ul>
                    </div>

                    <div className="menu__section">
                        <p className="menu-list__title">WOMAN</p>
                        <ul className="menu-list">
                            <li className="menu__li"><a href="#" className="menu-list__link">Accessories</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Jackets & Coats</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Polos</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">T-Shirts</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Shirts</a></li>
                        </ul>
                    </div>

                    <div className="menu__section">
                        <p className="menu-list__title">KIDS</p>
                        <ul className="menu-list">
                            <li className="menu__li"><a href="#" className="menu-list__link">Accessories</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Bags</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Polos</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">T-Shirts</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Shirts</a></li>
                            <li className="menu__li"><a href="#" className="menu-list__link">Bags</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
