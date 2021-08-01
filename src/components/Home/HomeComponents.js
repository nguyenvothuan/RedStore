import React from 'react'
import cat1 from '../images/category-1.jpg';
import cat2 from '../images/category-2.jpg';
import cat3 from '../images/category-3.jpg';
import p1 from '../images/product-1.jpg';
import p9 from '../images/product-9.jpg';
import p2 from '../images/product-2.jpg';
import p3 from '../images/product-3.jpg';
import p4 from '../images/product-4.jpg';
import p5 from '../images/product-5.jpg';
import p6 from '../images/product-6.jpg';
import p7 from '../images/product-7.jpg';
import p8 from '../images/product-8.jpg';
import p10 from '../images/product-10.jpg';
import p11 from '../images/product-11.jpg';
import p12 from '../images/product-12.jpg';
import exclusive from "../images/exclusive.png"
import user1 from '../images/user-1.png';
import user2 from '../images/user-2.png';
import user3 from '../images/user-3.png';
import godrej from '../images/logo-godrej.png';
import oppo from '../images/logo-oppo.png';
import coca from '../images/logo-coca-cola.png';
import paypal from '../images/logo-paypal.png';
import philips from '../images/logo-philips.png';

export const Categories = () => {
    return (
        <div className="categories">
        <div className="small-container">
            <div className="row">
                <div className="col-3">
                    <img src={cat1}/>
                </div>
                <div className="col-3">
                    <img src={cat2}/>
                </div>
                <div className="col-3">
                    <img src={cat3}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export const Featured = () => {
    return (
        <div class="small-container">
        <h2 class="title">Featured shit</h2>
        <div class="row">
            <div class="col-4">
                <img src={p1}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <span class="fa fa-star"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p2}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p3}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p4}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
        </div>

        <h2 class="title">Latest Products </h2>
        <div class="row">
            <div class="col-4">
                <img src={p5}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <span class="fa fa-star"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p6}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p7}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p8}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p9}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <span class="fa fa-star"></span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p12}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p10}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
            <div class="col-4">
                <img src={p11}/>
                <h4>Red shit</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50</p>
            </div>
        </div>
    </div>
    )
}

export const Offer = () => {
    return(
    <div class="offer">
        <div class="small-container">
            <div class="row">
                <div class="col-2">
                    <img src={exclusive} class="offer-img" alt=""/>
                </div>
                <div class="col-2">
                    <p>Only on RedStore</p>
                    <h1>Smart Band 4</h1>
                    <small>
                        Look at little Goblin Junior, gonna cry
                    </small>
                    <br />
                    <a href="" class="btn">Buy Now &#10132</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export const Testimonials = () => {
    return(
    <div class="testimonial">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>Some shit gets repeated, Some shit gets repeated, Some shit gets repeated,Some shit gets
                        repeated. Some shit gets repeatedSome shit gets repeated</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <img src={user1}/>
                    <h3>Sean Ali</h3>
                </div>
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>Some shit gets repeated, Some shit gets repeated, Some shit gets repeated,Some shit gets
                        repeated. Some shit gets repeatedSome shit gets repeated</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <img src={user2} />
                    <h3>Sean Ali</h3>
                </div>
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>Some shit gets repeated, Some shit gets repeated, Some shit gets repeated,Some shit gets
                        repeated. Some shit gets repeatedSome shit gets repeated</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <img src={user3} />
                    <h3>Sean Ali</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export const Brands = () => {
    return (
        <div class="brands">
        <div class="small-container">
            <div class="row">
                <div class="col-5">
                    <img src={godrej} alt=""/>
                </div>
                <div class="col-5">
                    <img src={oppo} alt=""/>
                </div>
                <div class="col-5">
                    <img src={coca} alt=""/>
                </div>
                <div class="col-5">
                    <img src={paypal} alt=""/>
                </div>
                <div class="col-5">
                    <img src={philips} alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}
