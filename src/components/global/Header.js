import React, { useState, useEffect } from 'react'
import cart from '../images/cart.png';
import logo from '../images/logo.png';
import cap from '../images/transLogo.png'
import menuIcon from "../images/menu.png";
import bigPic from "../images/image1.png";
import { Link } from 'react-router-dom';
const Header = () => {
    
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
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Account</Link></li>
        </ul>
    )
    return (
        <div class="header">
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
            <div class="row">
                <div class="col-2">
                    <h1>Give your workout a new shit</h1>
                    <p>
                        You get your rent when you fix this damn door
                    </p>
                    <a href="" class="btn">Explore now &#10132</a>
                </div>
                <div class="col-2">
                    <img src={bigPic} alt="shit" />
                </div>
            </div>
        </div>
    )
}






export default Header
