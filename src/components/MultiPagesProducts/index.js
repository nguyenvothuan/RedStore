import React, { useEffect, useState } from 'react'
import NavBar from '../global/NavBar'
import Footer from '../global/Footer'
import { MPProductsComponents, ProductDetail } from './MPProductsComponents'
const MultiPagesProducts = () => {
    const [selected, setSelected] = useState(null);
    useEffect(()=>console.log(selected), [selected]);
    return (
        <>
            <NavBar/>
            {selected?<ProductDetail selected={selected}/>:<MPProductsComponents setSelected={setSelected}/>}
            <Footer />
        </>
    )
}

export default MultiPagesProducts
