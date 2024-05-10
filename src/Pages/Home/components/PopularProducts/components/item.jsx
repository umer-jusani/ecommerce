import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import colors from '../../../../../theme';
import { CiShoppingCart } from "react-icons/ci";

const Item = () => {
    let ratingValue = 2


    return (
        <Container>
            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="" className='w-full h-56' />
            <div className='border-2 border-red-900 space-y-2'>
                <span className='text-sm'>Snack</span>
                <h3 className='text-lg font-medium leading-[1.2rem]'>Seeds of Change Organic Quinoa,Brown,&Red Rice</h3>

                <div className='flex space-x-2 items-center'>
                    <Rating name="read-only" value={ratingValue} readOnly size='1' style={{ fontSize: "20px" }} />
                    <span className='text-Lightgray text-[14px] opacity-95'>({ratingValue})</span>
                </div>


                <h5 className='text-primary'>
                    <span className='text-Lightgray text-[14px] pr-1'>By</span>
                    NestFood
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

const Container = styled.div`
    width: 20%;
    min-height: 300px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 15px;

& > div{
    padding: 0 10px 5px 10px;
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

        & > span {
            color: ${colors.primary};
            font-weight: 600;
        }


        &:hover {
        }
    }
`

export default Item

