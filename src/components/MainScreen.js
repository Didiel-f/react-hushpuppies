import React from 'react';

import Header from './Header';
import Product from './Product/Product';
import Slider from './Slider/Slider';
import { Footer } from './Footer/Footer';

export const MainScreen = () => {
    return (
        <>
            <Header />
            <Product />
            <Slider />
            <Footer />
        </>
    )
}
