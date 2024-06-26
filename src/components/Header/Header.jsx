import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { BsCartDash } from "react-icons/bs";
import { FaJediOrder } from "react-icons/fa6";
import { FiHeart, FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { categories } from '../../constant/constant';
import Cart from './components/cart';
import DropDown from './components/dropDown';
import { setLocationData } from './locationSlice/locationSlice';



const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenCart, setIsOpenCart] = useState(false)
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const country = useSelector(state => state.locationSlice.country);
  const headerRef = useRef(0)


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
  }, []);



  return (
    <Container className='container py-3' ref={headerRef}>
      <Logo src={logo} />
      <Wrapper className='space-x-2'>
        <DropDown data={categories} label={"Categories"} />
        <Search type="search" placeholder='Search For Items...' />
        <IoSearch size={20} color='gray' />
      </Wrapper>

      <DropDown data={country} label={"Location"} />

      <IconWrapper className='space-x-5'>
        {/* Compare */}
        <div className='flex items-end space-x-1 relative cursor-pointer'>
          <Count compare={true} >2</Count>
          <IoIosGitCompare size={23} />
          <IconsHeading className='text-sm'>Compare</IconsHeading>
        </div>
        {/* WishList */}
        <div className='flex items-end space-x-1 relative cursor-pointer'>
          <Count wishlist={true}>2</Count>
          <FiHeart size={23} />
          <IconsHeading className='text-sm'>WishList</IconsHeading>
        </div>

        {/* Cart */}
        <div className='flex items-end space-x-1 relative cursor-pointer' onClick={() => setIsOpenCart(!isOpenCart)}>
          <Count cart={true}>2</Count>
          <BsCartDash size={23} />
          <IconsHeading className='text-sm'>Cart</IconsHeading>
          {isOpenCart && <Cart />}
        </div>


        {/* Account */}
        <div className='flex items-end space-x-1 relative cursor-pointer' onClick={handleClick}>
          <Count account={true}>2</Count>
          <FiUser size={23} />
          <IconsHeading className='text-sm'>Account</IconsHeading>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={e => handleClose()} className='gap-2'>
            <MdOutlineAccountCircle size={20} />
            <span>My Account</span>
          </MenuItem>
          <MenuItem onClick={e => handleClose()} className='gap-2'>
            <FaJediOrder size={20} />
            <span> Order Tacking</span>
          </MenuItem>
          <MenuItem onClick={e => handleClose()} className='gap-2'>
            <IoMdHeartEmpty size={20} />
            <span>My WishList</span>
          </MenuItem>
          <MenuItem onClick={e => handleClose()} className='gap-2'>
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </MenuItem>
          <MenuItem onClick={e => handleClose()} className='gap-2'>
            <GoSignOut size={20} />
            <span>Sign Out</span>
          </MenuItem>
        </Menu>

      </IconWrapper>
    </Container >
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;  

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
