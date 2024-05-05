import React from 'react';
import HomeSlider from './components/homeSlider';
import CategoriesSlider from './components/CategoriesSlider/categoriesSlider';
import Banner from './components/Banner/banner';
import PopularProducts from './components/PopularProducts';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <HomeSlider />
            <CategoriesSlider />
            <Banner />
            <PopularProducts />
        </div>
    )
}

export default Home