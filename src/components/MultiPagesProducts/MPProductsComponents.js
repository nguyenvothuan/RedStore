import React, { useEffect, useState } from 'react'
import { products } from './product';
import p1 from '../images/product-1.jpg';
import p2 from '../images/product-2.jpg';
import p3 from '../images/product-3.jpg';
import p4 from '../images/product-4.jpg';
import gal1 from '../images/gallery-1.jpg';
import gal2 from '../images/gallery-2.jpg';
import gal3 from '../images/gallery-3.jpg';
import gal4 from '../images/gallery-4.jpg';

export const MPProductsComponents = ({ setSelected }) => {
    //12 products each page
    let noPages = Math.floor(products.length % 12);
    let pages = new Array(noPages);

    const renderPage = (index) => {
        let start = index * 12; //the first item's index of the current page
        let rows = [];
        for (let i = start; i < start + 12; i++) {
            rows.push(renderItem(products[i]))
        }
        return (
            <div className='row'>
                {rows}
            </div>
        )

    }

    const renderItem = (item) => {

        return (
            <div className="col-4" onClick={() => setSelected(item.id - 1)}>
                <img src={item.image} alt="item" />
                <h4>{item.name}</h4>
                <div className="rating">
                    {renderRating(item.rating)}
                </div>
                <p>{item.price}</p>
            </div>
        )
    }

    const renderRating = (rating) => {
        let whole = Math.floor(rating);
        let ratings = [];
        for (let i = 0; i < whole; i++) {
            ratings.push(
                <i class="fa fa-star"></i>
            )
        }
        if (rating % 1 !== 0) {
            ratings.push(<i class="fa fa-star-o"></i>);
        }
        return ratings;
    }

    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className="small-container">
            <div class="row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default Sorting</option>
                    <option>Sort by price</option>
                    <option>Sort by popularity</option>
                    <option>Sort by rating</option>
                    <option>Sort by sale</option>

                </select>
            </div>

            {renderPage(currentPage)}

            <div class="page-btn">
                <span onClick={() => setCurrentPage(0)}>1</span>
                <span onClick={() => setCurrentPage(1)}>2</span>
                <span onClick={() => setCurrentPage(2)}>3</span>
                <span onClick={() => setCurrentPage(3)}>4</span>
                <span>&#8594;</span>
            </div>
        </div>
    )
}

export const ProductDetail = ({ index }) => {
    return (
        <div>
            <div class="small-container single">
                <div class="row">

                    <div class="col-2">
                        <img src={p1} width="100%" id="productImg" class="small-img" />
                        <div class="small-img-row">
                            <div class="small-img-col"><img src={gal1} width="100%" class="small-img" /></div>
                            <div class="small-img-col"><img src={gal2} width="100%" class="small-img" /></div>
                            <div class="small-img-col"><img src={gal3} width="100%" class="small-img" /></div>
                            <div class="small-img-col"><img src={gal4} width="100%" class="small-img" /></div>
                        </div>
                    </div>

                    <div class="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>Red Printed T-Shirt by HRX</h1>
                        <h4>$99</h4>
                        <select>
                            <option>Select Size</option>
                            <option>XXXL</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>Medium</option>
                        </select>
                        <input type='number' value="1" />
                        <a href="" class="btn">Add to cart</a>
                        <h3>Product Details <i class="fa fa-indent"></i></h3>
                        <br />
                        <p>Some shit description about this shit product you shit can make a decision to buy this shit or not
                        </p>
                    </div>
                </div>
            </div>

            <div class="small-container">
                <div class="row row-2">
                    <h2>Related Products</h2>
                    <p>View more</p>
                </div>
            </div>

            <div class="small-container">
                <div class="row">
                    <div class="col-4">
                        <img src={p1} />
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
                        <img src={p2} />
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
                        <img src={p3} />
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
                        <img src={p4} />
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
        </div>
    )
}
