import React from 'react';
import '../stylesheets/Navbar.css';

const LIGHTMODE = {TextColor:"#000000", TextMidtone:"#9f9f9f", BackgroundColor:"#ffffff", BackgroundMidtone:"#f4f4f4", LogoFilters:"none"};
const DARKMODE = {TextColor:"#ffffff", TextMidtone:"#9f9f9f", BackgroundColor:"#151111", BackgroundMidtone:"#414141", LogoFilters:"invert(1)"};
// const NAVY = {TextColor:"#F1F6F9", TextMidtone:"#212A3E", BackgroundColor:"#212A3E", BackgroundMidtone:"#9BA4B5", LogoFilters:"invert(0.5) sepia(1) saturate(3) hue-rotate(203deg) brightness(2.49)"};
//const ROYAL = {TextColor:"#a88a38", TextMidtone:"#7a662f", BackgroundColor:"#2e2045", BackgroundMidtone:"#9BA4B5", LogoFilters:"invert(0.5) sepia(1) saturate(2.55) hue-rotate(0deg) brightness(2)"};
const themes=[LIGHTMODE, DARKMODE];

function ThemeButton() {
    const [themeID, changeTheme] = React.useState(0);
    const [numThemes, updateNumThemes] = React.useState(themes.length);
    document.documentElement.style.setProperty('--TextColor', themes[themeID].TextColor);
    document.documentElement.style.setProperty('--TextMidtone', themes[themeID].TextMidtone);
    document.documentElement.style.setProperty('--BackgroundColor', themes[themeID].BackgroundColor);
    document.documentElement.style.setProperty('--BackgroundMidtone', themes[themeID].BackgroundMidtone);
    document.documentElement.style.setProperty('--LogoFilters', themes[themeID].LogoFilters);


    return (
        <button id="themeButton" onClick={()=>changeTheme((themeID+1)%numThemes)}>
            <ion-icon name={ themeID % numThemes === 1 ? "sunny-outline" : "moon-outline" }></ion-icon>
        </button>
    );
}

export default ThemeButton;