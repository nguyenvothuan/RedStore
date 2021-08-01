import React from 'react'
import buy1 from '../images/buy-1.jpg';
import buy2 from '../images/buy-2.jpg';
import buy3 from '../images/buy-3.jpg';
import p12 from '../images/product-12.jpg'
const CartComponent = () => {
    return (
        <div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={buy1} alt=""/>
                        <div>
                            <p>Printed T shirt in red</p>
                            <small>Price: $50.00</small>
                            <br/>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value='1'/></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={buy2} alt=""/>
                        <div>
                            <p>Printed T shirt in red</p>
                            <small>Price: $50.00</small>
                            <br/>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value='1'/></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={buy3} alt=""/>
                        <div>
                            <p>Printed T shirt in red</p>
                            <small>Price: $50.00</small>
                            <br/>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value='1'/></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={p12} alt=""/>
                        <div>
                            <p>Printed T shirt in red</p>
                            <small>Price: $50.00</small>
                            <br/>
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value='1'/></td>
                <td>$50.00</td>
            </tr>
            
        </table>

        <div class="total-price">
            <table>
                <tr>
                    <td>
                        Subtotal
                    </td>
                    <td>
                        $200
                    </td>
                </tr>
                <tr>
                    <td>Tax:</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$235</td>
                </tr>
            </table>
        </div>
    </div>
    )
}

export default CartComponent
