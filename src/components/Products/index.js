import  Footer from '../global/Footer';
import Header from '../global/Header';
import React from 'react'
import NavBar from '../global/NavBar';
import { AllProducts, ProductDetail } from './ProductComponents';

const Product = ({id}) => {
    return (
        <>
        <NavBar />
        <AllProducts />
        <Footer />
        </>
        
    )
}

export default Product
