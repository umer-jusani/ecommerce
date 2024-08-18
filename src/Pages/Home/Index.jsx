import React from 'react';
import Banner from './components/Banner/banner';
import BestSell from './components/BestSellsProducts';
import CategoriesSlider from './components/CategoriesSlider/categoriesSlider';
import PopularProducts from './components/PopularProducts';
import HomeSlider from './components/HomeSlider/homeSlider';
import PreminumProducts from './components/PremiumProducts';
import Newsletter from './components/newsletter';
import BannersWithOffer from './components/offersBanner';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <HomeSlider />
            <CategoriesSlider />
            <Banner />
            <PopularProducts />
            <BestSell />
            <PreminumProducts />
            <Newsletter />
            <BannersWithOffer />
        </div>
    )
}

export default Home