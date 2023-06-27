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
                </ul>
            </div>
            {/* <div class="navItem"><Link to="/">Home</Link></div>
            <div class="navItem"><Link to="/">About</Link></div>
            <div class="navItem"><Link to="/">Contact</Link></div> */}
            <div id="themeButtonBox">
                <ThemeButton></ThemeButton>
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