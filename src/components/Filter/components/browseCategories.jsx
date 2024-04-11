import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import React from 'react';
import styled from 'styled-components';
import icon from '../../../assets/images/icon-1.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";
import colors from '../../../theme';

const BrowseCategories = () => {
    return (
        <Container>
            <MenuList dense sx={{ display: 'flex', }}>
                <div style={{ boxSizing: 'border-box', width: '50%' }} className='space-y-4 box-border'>
                    <MenuItem style={{ gap: 5 }} >
                        <img src={icon} alt="" width={30} height={30} />
                        <span className='flex-wrap hover:text-primary'>Milks and Diaries</span>
                    </MenuItem>
                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Clothing & Beauty</ListItemText>
                    </MenuItem>

                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary' aria-valuetext='Pet Foods & Toy' onChange={()}>Pet Foods & Toy</ListItemText>
                    </MenuItem>

                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Baking material</ListItemText>
                    </MenuItem>

                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Fresh Fruit</ListItemText>
                    </MenuItem>
                </div>

                {/* <Divider /> */}
                <div className='space-y-4'>
                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Wines & Drinks</ListItemText>
                    </MenuItem>
                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Fresh Seafood</ListItemText>
                    </MenuItem>
                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Fast Food</ListItemText>
                    </MenuItem>
                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Vegetables</ListItemText>
                    </MenuItem>
                    <MenuItem style={{ gap: 5 }}>
                        <img src={icon} alt="" width={30} height={30} />
                        <ListItemText className='hover:text-primary'>Bread and Juice</ListItemText>
                    </MenuItem>
                </div>
            </MenuList>
            <div className='text-center flex justify-center items-center gap-1 py-2'>
                <AiOutlinePlusCircle size={25} color={colors.primary} fontWeight={900} />
                <span className='font-semibold text-sm'>Show more...</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    box-sizing: border-box;
    top: 50px;
    border: 2px solid black;
    background-color: white;
    padding: 16px;
    border-radius: 10px;
    border: 3px solid rgba(13, 146, 118, 0.1);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`


export default BrowseCategories;
