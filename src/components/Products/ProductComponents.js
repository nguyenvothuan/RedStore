import React, { useEffect, useState } from 'react'
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
import gal1 from '../images/gallery-1.jpg';
import gal2 from '../images/gallery-2.jpg';
import gal3 from '../images/gallery-3.jpg';
import gal4 from '../images/gallery-4.jpg';

export const AllProducts = () => {
    const [selected, setSelected] = useState(null);
    useEffect(()=>console.log(selected), [selected]);
    return (
        selected?
        <ProductDetail id={selected}/>:

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

            <div class="row">
                <div class="col-4" onClick={()=>setSelected(1)}>
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
                <div class="col-4" onClick={()=>setSelected(2)}>
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
                <div class="col-4" onClick={()=>setSelected(3)}>
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
                <div class="col-4" onClick={()=>setSelected(4)}>
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

            <div class="row">
                <div class="col-4" onClick={()=>setSelected(5)}>
                    <img src={p5} />
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
                <div class="col-4" onClick={()=>setSelected(6)}>
                    <img src={p6} />
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
                <div class="col-4" onClick={()=>setSelected(7)}>
                    <img src={p7} />
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
                <div class="col-4" onClick={()=>setSelected(8)}>
                    <img src={p8} />
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
                <div class="col-4" onClick={()=>setSelected(9)}>
                    <img src={p9} />
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
                <div class="col-4" onClick={()=>setSelected(10)}>
                    <img src={p10} />
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
                <div class="col-4" onClick={()=>setSelected(11)}>
                    <img src={p11} />
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
                <div class="col-4" onClick={()=>setSelected(12)}>
                    <img src={p12} />
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
            <div class="page-btn">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span><i className='fa fa-arrow-right'></i></span>
            </div>
        </div>
    )
}
export const ProductDetail = () => {
    return (
        <div>
            <div class="small-container single">
                <div class="row">

                    <div class="col-2">
                        <img src={gal1} width="100%" id="productImg" class="small-img" />
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

