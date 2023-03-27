import React from 'react';
import './Header.css'
import  logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header-body'>
           <img src={logo} alt="" />
           <nav className='header-component'>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
           </nav>
            
        </div>
    );
};

export default Header;