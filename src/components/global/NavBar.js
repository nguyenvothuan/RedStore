import React, { useState, useEffect } from 'react'
import cart from '../images/cart.png';
import logo from '../images/logo.png';
import cap from '../images/Capture.PNG'
import menuIcon from "../images/menu.png";
import { Link } from 'react-router-dom';
import bigPic from "../images/image1.png";
const NavBar = () => {
    
    const [ulHeight, setUlHeight] = useState('0px');
    const menutoggle = () => {
        if (ulHeight === '0px') {
            setUlHeight('200px');
        }
        else { 
            setUlHeight('0px');
        }
    }
    const navBar = (
        <ul id="MenuItems" style={ {maxHeight: ulHeight }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Account</Link></li>
        </ul>
    )
    return (

            <div class="container">
                <div class="navbar">
                    <div class="logo">
                        <img src={logo} width="125px" />
                    </div>
                    <nav>
                        {navBar}
                    </nav>
                    <Link to='/cart'><img src={cart} width="30px" class="cart" /></Link>
                    <img src={menuIcon} class="menu-icon" onClick={menutoggle} />
                </div>
            </div>
            
    )
}






export default NavBar
