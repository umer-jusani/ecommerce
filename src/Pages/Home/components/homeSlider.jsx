import React from 'react';
import Slider from 'react-slick';
import { FaArrowPointer } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import slider1 from '../../../assets/images/slider-1.png';
import slider2 from '../../../assets/images/slider-2.png';
import colors from '../../../theme';
// import { TbPointerFilled } from "react-icons/tb";


const HomeSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false
    };

    return (
        <Container>
            <Slider {...settings} className='relative -z-10'>
                <div className='relative'>
                    <img src={slider1} alt="" />
                    <div className='absolute top-1/4 space-y-5 left-24'>
                        <div>
                            <SliderHeading> Don't miss amazing<br /> grocery deals</SliderHeading>
                        </div>
                        <p className='text-sliderHeading text-xl'>Sign up for the daily news letter</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src={slider2} alt="" />
                    <div className='absolute top-1/4 space-y-5 left-24'>
                        <div>
                            <SliderHeading>Fresh Vegetables <br /> Big discount</SliderHeading>
                        </div>
                        <p className='text-sliderHeading text-xl'>Save upto 50% off on your first order</p>
                    </div>
                </div>
            </Slider>
            <InputWrapper>
                <FaArrowPointer size={20} color={colors.primary} className='absolute top-4 left-2 inputIcon' />
                <SliderIinput type="text" placeholder='Enter Your Placeholder' />
                <button className='bg-primary py-2 px-6 rounded-3xl text-[white] text-[15px] ms-2'>Subscribe</button>
            </InputWrapper>

        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    overflow: hidden;

 & img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    &:hover {
        box-sizing: border-box;
        border: 4px solid ${colors.primary};
    }

    &:focus {
        border: none;
    }
     & > .slick-arrow .slick-prev {
        position: absolute;
    } 
 }
`
const SliderHeading = styled.h1`
    color: ${colors.sliderHeading};
    font-size: 55px;
    font-weight: bolder;
    line-height: 1;
    border-radius: 1.6rem;
`

const SliderIinput = styled.input`
    height: 20px;
    padding: 1.5rem 2rem;
    background-color: white;
    &:hover{
        border: 1px solid ${colors.primary};
    }
`

const InputWrapper = styled.div`
    position: absolute;
    top: 55%;
    left: 6rem;
    filter: drop-shadow(-3px 10px 30px #0D9276);
    z-index: -1;
    
`

export default HomeSlider
