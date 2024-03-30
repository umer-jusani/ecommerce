import React from 'react';
import styled from 'styled-components';
import { GiFireBowl } from "react-icons/gi";
import colors from '../../../theme';

const Menu = () => {
    return (
        <Container>
            {/* Menu */}
            <div className='flex items-center gap-1'>
                <GiFireBowl size={23} color='' />
                <Item colors={colors.primary}>Deals</Item>
            </div>
            <Item colors={colors.primary}>About</Item>
            <Item colors={colors.primary}>Shop</Item>
            <Item colors={colors.primary}>Vendors</Item>
            <Item colors={colors.primary}>Mega Menu</Item>
            <Item colors={colors.primary}>Blog</Item>
            <Item colors={colors.primary}>Pages</Item>
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

const MenuWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.8rem;
`

const Item = styled.h5`
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.colors};
        transition: 0.3s;
    }
`




export default Menu
