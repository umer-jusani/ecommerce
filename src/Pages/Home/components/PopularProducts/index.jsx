import React from 'react';
import Item from './components/item';

const PopularProducts = () => {
    return (
        <section className='border-2 border-sky-900 container mt-[2rem]'>
            {/* Heading and Menus */}
            <div className='flex justify-between items-center'>
                <h2 className='text-[25px] font-bold'>Popular Products</h2>
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
            <div className='mt-[1rem] flex items-center'>
                <Item />
            </div>

        </section>
    )
}

export default PopularProducts
