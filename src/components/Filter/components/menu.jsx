import React from 'react';
import { GiFireBowl } from "react-icons/gi";
import styled from 'styled-components';
import colors from '../../../theme';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <Container>
            {/* Menu */}
            <div className='flex items-center gap-1'>
                <GiFireBowl size={23} color={colors.primary} />
                <Item colors={colors.primary}>Deals</Item>
            </div>
            <Item colors={colors.primary}>About</Item>
            <Item colors={colors.primary}>Shop</Item>
            <Item colors={colors.primary}>Vendors</Item>

            {/* Mega Menu*/}
            <MenuWrapper>
                <Item colors={colors.primary} className='me-1'>Mega Menu</Item>
                <FaChevronDown size={13} color={colors.primary} fontWeight={"bold"} />
                <MenuItem className='space-y-1'>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li>Contact</li>
                    <li>My Account</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Forgot Password</li>
                    <li>Reset Password</li>
                    <li>Purchase Guide</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>404 Page</li>
                </MenuItem>
            </MenuWrapper>

            {/* Blogs */}
            <MenuWrapper>
                <Item colors={colors.primary} className='me-1'>Blog</Item>
                <FaChevronDown size={13} color={colors.primary} fontWeight={"bold"} />

                <MenuItem className='space-y-1'>
                    <li>Fruits & Vegetables</li>
                    <li>Meat & Poultry</li>
                    <li>Herbs & Seasonings</li>
                    <li>Cuts & Sprouts</li>
                    <li>Exotic Fruits & Veggies</li>
                    <li>Packaged Produce</li>
                </MenuItem>

            </MenuWrapper>





            {/* Pages */}
            <MenuWrapper>
                <Item colors={colors.primary} className='me-1'>Pages</Item>
                <FaChevronDown size={13} color={colors.primary} fontWeight={"bold"} />
                <MenuItem className='space-y-1'>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li>Contact</li>
                    <li>My Account</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Forgot Password</li>
                    <li>Reset Password</li>
                    <li>Purchase Guide</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>404 Page</li>
                </MenuItem>
            </MenuWrapper>



            <Item colors={colors.primary}>Contact</Item>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.8rem;
`;




const Item = styled.h5`
cursor: pointer;
    &:hover {
    color: ${(props) => props.colors};
    transition: 0.3s;
}
`

const MenuItem = styled.ul`
    position: absolute;
    top: 26px;
    width: max-content;
    padding: 0.5rem ;
    gap: 1;
    border-radius: 10px;
    border: 3px solid rgba(13, 146, 118, 0.1);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    /* opacity: 0; */

    display: none;
    & > li {
    cursor: pointer;
    padding: 5px 1rem;
    &:hover{
        color: ${colors.primary};
        font-weight: 600;
    }
}

`

const MenuWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-right: 0.25rem;
    background-color: white;
    /* replace gap with margin */
    &:hover ${MenuItem} {
        /* opacity: 1; */
        display: block;
    }

`

export default Menu
