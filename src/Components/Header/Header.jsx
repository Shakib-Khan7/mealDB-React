import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='logos'> 
            <img src={logo} alt="" />
            </div>
            <div className='info'>
                <a href="">Click</a>
                <a href="">Click</a>
                <a href="">Click</a>
                <a href="">Click</a>
            </div>
        </div>
    );
};

export default Header;