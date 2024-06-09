import React from 'react';
import styled from 'styled-components';
import { RxCross2 } from "react-icons/rx";
import mango from '../../../assets/images/mango.jpg'
import colors from '../../../theme';

const Cart = () => {
    return (
        <Container className='space-y-5'>
            <Product>
                <div>
                    <img src={mango} alt="" width={40} height={40} />
                </div>
                <div>
                    <h5 className='text-primary'>Daisy Casual Name</h5>
                    <span className='text-sm text-gray'>1 * $800.00</span>
                </div>
                <RxCross2 size={20} color='black' />
            </Product>
            <Product>
                <div>
                    <img src={mango} alt="" width={40} height={40} />
                </div>
                <div>
                    <h5 className='text-primary'>Daisy Casual Name</h5>
                    <span className='text-sm text-gray'>1 * $800.00</span>
                </div>
                <RxCross2 size={20} color='black' />
            </Product>
            <Product>
                <div>
                    <img src={mango} alt="" width={40} height={40} />
                </div>
                <div>
                    <h5 className='text-primary'>Daisy Casual Name</h5>
                    <span className='text-sm text-gray'>1 * $800.00</span>
                </div>
                <RxCross2 size={20} color='black' />
            </Product>
            {/* Total */}
            <Total>
                <h5>Total: </h5>
                <span>$4000.00</span>
            </Total>
            {/* Buutton Container */}
            <ButtonContainer>
                <ViewCart>View Cart</ViewCart>
                <Checkout>Checkout</Checkout>
            </ButtonContainer>



        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 10px;
    border: 3px solid rgba(13, 146, 118, 0.1);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 1rem 1.5rem;
    z-index: 1;
    top: 50px;
    right: -100px;
    width: 350px;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;


    & > h5{
        font-weight: 600;
        font-size: 18px;
        color: ${colors.gray};
    }

    & > span{
        font-weight: bolder;
        color: ${colors.primary};
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;


    & > button{
        background-color: ${colors.lightPrimary};
        color: white;
        border: none;
        padding: 9px;
        
    }

`

const ViewCart = styled.div`
    border: 2px solid ${colors.primary};
    background: transparent;
    color: ${colors.primary};
    border-radius: 4px;
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: #c5c565;
        transition-duration: 0.5s;
    }
`

const Checkout = styled.div`
    border: 2px solid ${colors.primary};
    padding: 5px 10px;
    background: ${colors.primary};
    color: white;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #c5c565;
        transition-duration: 0.5s;
    }
`

export default Cart
