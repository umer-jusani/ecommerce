import React from 'react'
import styled from 'styled-components'
import { data, companyDetails } from './constanst/constant'
import BrandLogo from '../../assets/images/logo.svg'
import { CiLocationOn } from "react-icons/ci";
import Listing from './components/Listing';
import { IoLocationOutline } from "react-icons/io5";
import colors from '../../theme';
// Importing Images
import AppStore from "../../assets/images/app-store.jpg"
import GooglePlay from "../../assets/images/google-play.jpg"

const Footer = () => {

  return (
    <FooterWrapper className='container mt-[3rem]  '>


      {/* Company Details */}
      <div className="company-details ">
        {/* Brand Logo */}
        <Logo src={BrandLogo} className='mb-3' />


        {/* <Wrapper> */}
        {/* Details */}
        <ul className='space-y-1'>
          {companyDetails.map((e) => {
            return (
              <div key={e.id} className='flex gap-1'>
                <IoLocationOutline size={20} color={colors.primary} />
                <li className='text-sm'><span className='font-[italic]'>{e.name}: </span>{e.value}</li>
              </div>
            );
          })}
        </ul>


        {/* Accounts Corporate and Popular */}


        {/* </Wrapper> */}


      </div>


      {/* Contact */}
      <div className=' space-y-2'>
        <h4 className='text-footerHeadings font-footerHeadings'>Company</h4>
        <ul className='space-y-0.5'>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Contact Us</li>
          <li>Support Center</li>
          <li>Careers</li>
        </ul>
      </div>

      {/* Corporate */}
      <div className=' space-y-2'>
        <h4 className='text-footerHeadings font-footerHeadings'>Corporate</h4>
        <ul className='space-y-0.5'>
          <li>Account</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Contact Us</li>
          <li>Support Center</li>
          <li>Careers</li>
        </ul>
      </div>

      {/* Popular */}
      <div className=' space-y-2'>
        <h4 className='text-footerHeadings font-footerHeadings'>Popular</h4>
        <ul className='space-y-0.5'>
          <li>Account</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Contact Us</li>
          <li>Support Center</li>
          <li>Careers</li>
        </ul>
      </div>

      {/* Install App */}
      <div className=' space-y-2'>
        <h4 className='text-footerHeadings font-footerHeadings'>Popular</h4>
        <ul className='space-y-0.5'>
          <li>From App store and Google Play</li>
          <li className='flex gap-1'>
            <img src={AppStore} width={100} height={100} />
            <img src={GooglePlay} width={100} height={100} />
          </li>
        </ul>
      </div>





    </FooterWrapper>
  )
}


const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center; 
`
const Wrapper = styled.div`
  
`


const Logo = styled.img`
     width: 168px;
    height: 56px;
`

export default Footer



