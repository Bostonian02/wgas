import React from 'react';
import '../stylesheets/Main.css';
import { useState, state } from 'react';

const LIGHTMODE = {TextColor:"#000000", TextMidtone:"#9f9f9f", BackgroundColor:"#ffffff", BackgroundMidtone:"#f4f4f4", LogoFilters:"none"};
const DARKMODE = {TextColor:"#ffffff", TextMidtone:"#9f9f9f", BackgroundColor:"#151111", BackgroundMidtone:"#414141", LogoFilters:"invert(1)"};
const NAVY = {TextColor:"#F1F6F9", TextMidtone:"#212A3E", BackgroundColor:"#212A3E", BackgroundMidtone:"#9BA4B5", LogoFilters:"invert(0.5) sepia(1) saturate(3) hue-rotate(203deg) brightness(2.49)"};
const themes=[LIGHTMODE, DARKMODE, NAVY];

function Navbar() {
    const [themeID, changeTheme] = React.useState(0);
    document.documentElement.style.setProperty('--TextColor', themes[themeID].TextColor);
    document.documentElement.style.setProperty('--TextMidtone', themes[themeID].TextMidtone);
    document.documentElement.style.setProperty('--BackgroundColor', themes[themeID].BackgroundColor);
    document.documentElement.style.setProperty('--BackgroundMidtone', themes[themeID].BackgroundMidtone);
    document.documentElement.style.setProperty('--LogoFilters', themes[themeID].LogoFilters);


    return (
        <div id="navbar">
            <a id="logoBox"><img id="logo" src={require('../images/Logo.png')}/></a>
            <div class="navItem"><a href="#">Home</a></div>
            <div class="navItem"><a href="#">About</a></div>
            <div class="navItem"><a href="#">Contact</a></div>
            <div id="themeButtonBox"><button id="themeButton" onClick={()=>changeTheme((themeID+1)%3)}>Theme</button></div>
        </div>
    );
}

export default Navbar;