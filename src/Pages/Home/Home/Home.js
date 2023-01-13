import React from 'react';
import AboutUs from './AboutUs';
import ProductCategory from './ProductCategory';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <ProductCategory></ProductCategory>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;