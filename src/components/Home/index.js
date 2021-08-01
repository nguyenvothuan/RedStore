import React from 'react'
import Header from '../global/Header';
import Footer from '../global/Footer';
import { Brands, Categories, Featured, Offer, Testimonials } from './HomeComponents';

const Home = () => {
    return (
        <>
            <Header />
            <Categories/>
            <Featured />
            <Offer/>
            <Testimonials />
            <Brands />
            <Footer />
        </>
    )
}

export default Home
