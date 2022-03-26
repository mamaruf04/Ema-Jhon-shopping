import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Invenrtory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;