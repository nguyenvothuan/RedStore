import React from 'react'
import appstore from '../images/app-store.png';
import playstore from '../images/play-store.png';
import logoWhite from '../images/logo-white.png';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row">
                    <div className='footer-col-1'>
                        <h3>
                            Download our app
                        </h3>
                        <p>Download App for Android and IOS mobile phone</p>
                        <div class="app-logo">
                            <img src={appstore} alt="" />
                            <img src={playstore} alt="" />
                        </div>
                    </div>
                    <div class="footer-col-2">
                    <img src={logoWhite} alt=""/>
                    <p>I alone decide my fate. Kill me, you can try</p>
                </div>
                <div class="footer-col-3">
                    <h3>
                        Useful links
                    </h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>
                        Follow us
                    </h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
