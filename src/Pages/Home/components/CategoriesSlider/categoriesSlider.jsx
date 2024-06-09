import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './style.css';
import styled from 'styled-components';
import colors from '../../../../theme';

const CategoriesSlider = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

    const settings = {
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        
    };
    /* justify-content: space-between; */

    return (
        <div className='mt-[3rem]'>
            <div className='mb-6'>
                <h1 className='section-Heading container'>Featured Categories</h1>
            </div>
            <Slider {...settings}>
                {
                    itemBg.map((ele, index) => {
                        return (
                            <CategoriesItem $bgColor={ele} key={index} >
                                <div className='h-[65px] w-[65px] m-auto'>
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" className='h-full w-full' />
                                </div>
                                <h3 className='hover:text-primary font-bold text-lg text-featuredProductHead'>Cake & Milk</h3>
                                <p className='text-sm text-Lightgray'>26items</p>
                            </CategoriesItem>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

const CategoriesItem = styled.div`
    text-align: center;
    padding: 0 1.25rem;
    background-color: ${props => props.$bgColor};

    &:hover > h3 {
        color: ${colors.primary}
        
    }
    
    &:hover img {
        transform: scale(1.1);
        transition-duration: 0.2s;
    }

`





export default CategoriesSlider
