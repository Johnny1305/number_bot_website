import React from 'react';
import Logo from '../assets/logo.gif'


const SetLogo = () => {

    return (
        <div className='logo-container'>
            <img className='logo-container__logo' src={Logo} alt="Logo" />
        </div>
    );
};

export default SetLogo;