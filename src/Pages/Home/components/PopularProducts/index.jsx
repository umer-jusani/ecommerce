import React from 'react';
import Item from './components/item';

const PopularProducts = () => {
    return (
        <section className='container mt-[3rem]'>
            {/* Heading and Menus */}
            <div className='flex justify-between items-center mb-[2rem]'>
                <h2 className='section-Heading'>Popular Products</h2>
                <ul className='flex space-x-4 font-medium'>
                    <li className='cursor-pointer hover:text-primary'>All</li>
                    <li className='cursor-pointer hover:text-primary'>Milk&Diaries</li>
                    <li className='cursor-pointer hover:text-primary'>Coffee&Teas</li>
                    <li className='cursor-pointer hover:text-primary'>PetFoods</li>
                    <li className='cursor-pointer hover:text-primary'>Meats</li>
                    <li className='cursor-pointer hover:text-primary'>Vegetables</li>
                    <li className='cursor-pointer hover:text-primary'>Foods</li>
                </ul>
            </div>

            {/* products */}
            <div className='grid grid-cols-5 gap-y-10'>
                <Item tag={"sale"} />
                <Item tag={"hot"} />
                <Item />
                <Item tag={"discount"} />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

        </section>
    )
}

export default PopularProducts
