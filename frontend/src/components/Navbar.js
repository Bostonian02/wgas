import React from 'react';
import '../stylesheets/Navbar.css';
import { useState, state } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
   
    return (
        <nav id="navbar">
            <Link to="/" id="logoBox"><img id="logo" src="/images/Logo.png" alt="WGAS logo"/></Link>
            <div
                className={ isNavExpanded ? "navbar-menu expanded" : "navbar-menu" }
            >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    {/* Hamburger Theme Button */}
                    { isNavExpanded ? <li><ThemeButton styleClass={isNavExpanded ? "themeButton menu" : "themeButton"}></ThemeButton></li> : null }
                </ul>
            </div>
            {/* Navbar Theme Button */}
            <div id="themeButtonBox">
                <ThemeButton styleClass="themeButton"></ThemeButton>
            </div>
            <button
                className='hamburger'
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <ion-icon name="menu-outline"></ion-icon>
            </button>
        </nav>
    );
}

export default Navbar;