import React, { useEffect, useReducer } from 'react';
import { BsCartDash } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoIosGitCompare } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import DropDown from './components/dropDown';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setLocationData } from './locationSlice/locationSlice';

const Header = () => {
  const country = useSelector(state => state.locationSlice.country);
  const dispatch = useDispatch();
  const locationApi = async (url) => {
    try {
      const response = await axios.get(url);
      const data = await response.data.data;
      dispatch(setLocationData(data));
    }
    catch (error) {
      console.log("failed to fetch data from location");
    }
  };

  useEffect(() => {
    locationApi("https://countriesnow.space/api/v0.1/countries/");
  }, [])


  useEffect(() => {
    console.log("country state", country);
  }, [country])


  // data for categories
  const categories = [
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood',
    'Pet Foods & Toy',
    'Fast food',
    'Baking material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice',
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood'
  ]

  return (
    <Container className='container py-3'>
      <Logo src={logo} />
      <Wrapper className='space-x-2'>
        <DropDown data={categories} label={"Categories"} />
        <Search type="search" placeholder='Search For Items...' />
        <IoSearch size={20} color='gray' />
      </Wrapper>

      <DropDown data={country} label={"Location"} />

      <IconWrapper className='space-x-5'>
        <div className='flex items-end space-x-1 relative'>
          <Count compare={true} >2</Count>
          <IoIosGitCompare size={23} />
          <IconsHeading className='text-sm'>Compare</IconsHeading>
        </div>
        <div className='flex items-end space-x-1 relative'>
          <Count wishlist={true}>2</Count>
          <FiHeart size={23} />
          <IconsHeading className='text-sm'>WishList</IconsHeading>
        </div>
        <div className='flex items-end space-x-1 relative'>
          <Count cart={true}>2</Count>
          <BsCartDash size={23} />
          <IconsHeading className='text-sm'>Cart</IconsHeading>
        </div>
        <div className='flex items-end space-x-1 relative'>
          <Count account={true}>2</Count>
          <FiUser size={23} />
          <IconsHeading className='text-sm'>Account</IconsHeading>
        </div>
      </IconWrapper>



    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

const Logo = styled.img`
     width: 168px;
    height: 56px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`
const Search = styled.input`
  padding: 5px;
  padding-left: 10px;
  border-radius: 5px;
  border: 2px solid gray;
  width: 300px;
  
  &:focus {
    border-style: none;
    border: 2px solid gray;

  }

`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const IconsHeading = styled.h5`
  color: gray;
  font-size: 2;
`

const Count = styled.span`
  position: absolute;
  color: white;
  background-color: rgba(50,179,50, 0.8);
  padding:  5px;
  border-radius: 50%;
  font-size: 10px;
  right: ${({ compare, wishlist, cart, account }) => [compare ? '60px' : '20px', wishlist ? '20px' : '50']} ;
  top: -16px;


`

export default Header
