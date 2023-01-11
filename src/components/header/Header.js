import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'



const Header = () => {
    return (
        <div className='header'>

            <img className='logo' src={logo} alt="" />
            <nav>
                <a href=""> Shop  </a>
                <a href=""> Order Review  </a>
                <a href=""> Manage Inventory </a>
                <a href=""> Setting  </a>
                <a href=""> Your Acoount </a>
            </nav>
            
        </div>
    );
};

export default Header;