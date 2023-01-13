import React from 'react';
import AboutUs from './AboutUs';
import ProductCategories from './Categories/ProductCategories';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <ProductCategories></ProductCategories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;