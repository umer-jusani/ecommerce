import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Banner4 from '../../../../assets/images/banner4.jpg';
import "../BestSellsProducts/style.css";
import BestSellItem from "./components/bestsellItem";

const BestSell = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <section className='container mt-[3rem]'>
      {/* Heading and Menus */}
      <div className='flex justify-between items-center mb-[1rem]' >
        <h2 className='section-Heading'>Daily Best Sells</h2>
        <ul className='flex space-x-4 font-medium'>
          <li className='cursor-pointer hover:text-primary'>Featured</li>
          <li className='cursor-pointer hover:text-primary'>Popular</li>
          <li className='cursor-pointer hover:text-primary'>New added</li>
        </ul>
      </div>

      {/* Cards */}
      <BannerWithSlider className="space-x-3">
        {/* BannerImage */}
        <div>
          <img src={Banner4} style={{ height: "95%" }} />
        </div>
        {/* <Loading color="success" /> */}
        <Slider {...settings} className="w-[75%]">
          <div>
            <BestSellItem />
          </div >
          <div>
            <BestSellItem />
          </div>
          <div>
            <BestSellItem />
          </div>
          <div>
            <BestSellItem />
          </div>
          <div>
            <BestSellItem />
          </div>

        </Slider>
      </BannerWithSlider>
    </section>
  )
};

const BannerWithSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: "center";
  height: 100%;
  width: 100%;
  & > .slick-arrow {
  position: absolute;
  top: 28%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #0d9276;
  padding: 5px;
}


  & > .slick-slider .slick-arrow .slick-prev{
    left: 90%;
  color: white;
  }

  & > .slick-slider .slick-arrow .slick-next{
    right: 5%;
  }

  & > .slick-slider .slick-arrow .slick-prev::before{
    color: white;
  }

  & > .slick-slider .slick-arrow .slick-next::before{
    color: white;
  }

`

export default BestSell;

