import React from 'react';
import Banner from './components/Banner/banner';
import BestSell from './components/BestSellsProducts';
import CategoriesSlider from './components/CategoriesSlider/categoriesSlider';
import PopularProducts from './components/PopularProducts';
import HomeSlider from './components/homeSlider';
import PreminumProducts from './components/PremiumProducts';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <HomeSlider />
            <CategoriesSlider />
            <Banner />
            <PopularProducts />
            <BestSell />
            <PreminumProducts />
        </div>
    )
}

export default Home