import Rating from '@mui/material/Rating';
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import styled from 'styled-components';
import colors from '../../../../../theme';
import { FaRegHeart } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaCodeCompare } from "react-icons/fa6";
import { TbView360 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const BestSellItem = ({ tag }) => {
    let ratingValue = 2;

    return (
        <Container>
            <Overlay>
                <Tooltip title="Add to WishList">
                    <IconButton>
                        <FaRegHeart size={20} color={colors.primary} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Compare">
                    <IconButton>
                        <FaCodeCompare size={20} color={colors.primary} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Quik View ">
                    <IconButton>
                        <TbView360 size={20} color={colors.primary} />
                    </IconButton>
                </Tooltip>
            </Overlay>

            {tag !== undefined ? <Badge>{tag}</Badge> : null}
            <div>
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" className='w-full h-full' />
            </div>
            <div className='space-y-3 mt-2'>
                <span className='text-sm'>Snack</span>
                <h3 className='text-lg font-medium leading-[1.4rem] cursor-pointer hover:text-primary duration-[0.5s]'><Link> Seeds of Change Organic Quinoa,Brown,&Red Rice</Link></h3>

                <div className='flex space-x-2 items-center'>
                    <Rating name="read-only" value={ratingValue} readOnly size='1' style={{ fontSize: "20px" }} />
                    <span className='text-Lightgray text-[14px] opacity-95'>({ratingValue})</span>
                </div>


                <h5 className='text-primary cursor-pointer hover:text-'>
                    <Link>
                        <span className='text-Lightgray text-[14px] pr-1'>By</span>
                        NestFood
                    </Link>
                </h5>

                <AddToCartContainer>
                    <h5 className='text-[17px] text-primary font-medium'>
                        $28.85
                        <span className='line-through ps-2 text-[14px] text-Lightgray'>$32.6</span>
                    </h5>

                    <button className='bg-primary w-[40%] flex justify-center items-center rounded'>
                        <CiShoppingCart size={18} className='me-1 font-bold' />
                        Add
                    </button>

                </AddToCartContainer>
            </div>
        </Container>
    )
}



const Overlay = styled.div`
    position: absolute;
    width: 50%;
    background-color: white;
    top: 20%;
    transform: translate(50%, 50%);
    padding: 10px 0;
    opacity: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 0px 25px -4px rgba(0,250,88,0.75);
-webkit-box-shadow: -1px 0px 25px -4px rgba(0,250,88,0.75);
-moz-box-shadow: -1px 0px 25px -4px rgba(0,250,88,0.75);
`

const Container = styled.div`
    width: 98%;
    min-height: 300px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 15px;
    padding-bottom: 0.5rem;
    position: relative;

& > div{
    padding: 0 10px 5px 10px;
    overflow: hidden;
}
    &:hover{
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

        & img {
            transform: scale(1.08);
            transition: all 0.3s ease-in-out;
            overflow: hidden
        }

        & > ${Overlay} {
            opacity: 1;
            transition: all 0.5s ease-in-out;
    }
}

`

const AddToCartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &> button{
        background-color: rgba(88,190,126, 0.3);
        padding: 5px;
        color: ${colors.primary};
        font-weight: 600;
        font-size: 14px;
        transition-duration: 0.4s;

        & > span {
            color: ${colors.primary};
            font-weight: 600;
        }


        &:hover {
            color: white;
            background-color: ${colors.primary};
            transition-duration: 0.4s;
        }
    }   
`

const Badge = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: red;
    color: #fff;
    padding: 0 16px 5px 10px;
    border-bottom-right-radius: 50px;
    font-size: 14px;
    z-index: 10;
`



export default BestSellItem

