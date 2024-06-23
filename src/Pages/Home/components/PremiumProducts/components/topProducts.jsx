import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../theme'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const TopProducts = ({ title }) => {
    return (
        <Container className='space-y-10 me-4'>
            <Heading className='section-Heading'>{title}</Heading>
            <Wrapper className='space-y-8'>
                <Product>
                    {/* img */}
                    <div className='w-[55%]'>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" />
                    </div>
                    {/* Information */}
                    <div className='space-y-2'>
                        <div>
                            <h3 className='text-[15px] font-medium leading-[1.4rem] cursor-pointer hover:text-primary duration-[0.5s]'><Link>Seeds of Change Organic Quinoa,Brown,&Red Rice</Link></h3>
                            <div className='flex space-x-2 items-center pt-1'>
                                <Rating name="read-only" value={4} readOnly size='1' style={{ fontSize: "20px" }} />
                                <span className='text-Lightgray text-[14px] opacity-95'>(4.00)</span>
                            </div>
                        </div>



                        <h5 className='text-[17px] text-primary font-medium'>
                            $28.85
                            <span className='line-through ps-2 text-[14px] text-Lightgray'>$32.6</span>
                        </h5>
                    </div>
                </Product>
                <Product>
                    {/* img */}
                    <div className='w-[55%]'>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" />
                    </div>
                    {/* Information */}
                    <div className='space-y-2'>
                        <div>
                            <h3 className='font-medium leading-[1.4rem] cursor-pointer hover:text-primary duration-[0.5s]'><Link>Seeds of Change Organic Quinoa,Brown,&Red Rice</Link></h3>
                            <div className='flex space-x-2 items-center'>
                                <Rating name="read-only" value={4} readOnly size='1' style={{ fontSize: "20px" }} />
                                <span className='text-Lightgray text-[14px] opacity-95'>(4.00)</span>
                            </div>
                        </div>



                        <h5 className='text-[17px] text-primary font-medium'>
                            $28.85
                            <span className='line-through ps-2 text-[14px] text-Lightgray'>$32.6</span>
                        </h5>
                    </div>
                </Product>
                <Product>
                    {/* img */}
                    <div className='w-[55%]'>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" />
                    </div>
                    {/* Information */}
                    <div className='space-y-2'>
                        <div>
                            <h3 className='font-medium leading-[1.4rem] cursor-pointer hover:text-primary duration-[0.5s]'><Link>Seeds of Change Organic Quinoa,Brown,&Red Rice</Link></h3>
                            <div className='flex space-x-2 items-center'>
                                <Rating name="read-only" value={4} readOnly size='1' style={{ fontSize: "20px" }} />
                                <span className='text-Lightgray text-[14px] opacity-95'>(4.00)</span>
                            </div>
                        </div>



                        <h5 className='text-[17px] text-primary font-medium'>
                            $28.85
                            <span className='line-through ps-2 text-[14px] text-Lightgray'>$32.6</span>
                        </h5>
                    </div>
                </Product>
                <Product>
                    {/* img */}
                    <div className='w-[55%]'>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" alt="" />
                    </div>
                    {/* Information */}
                    <div className='space-y-2'>
                        <div>
                            <h3 className='font-medium leading-[1.4rem] cursor-pointer hover:text-primary duration-[0.5s]'><Link>Seeds of Change Organic Quinoa,Brown,&Red Rice</Link></h3>
                            <div className='flex space-x-2 items-center'>
                                <Rating name="read-only" value={4} readOnly size='1' style={{ fontSize: "20px" }} />
                                <span className='text-Lightgray text-[14px] opacity-95'>(4.00)</span>
                            </div>
                        </div>



                        <h5 className='text-[17px] text-primary font-medium'>
                            $28.85
                            <span className='line-through ps-2 text-[14px] text-Lightgray'>$32.6</span>
                        </h5>
                    </div>
                </Product>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
`

const Heading = styled.span`
padding-bottom: 8px;
border-bottom: 2px solid ${colors.primary};
font-size: 22px;
    margin-left: 25px;
`

const Wrapper = styled.div`

`


const Product = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 0.25s;
    background-color: #ffffff;
    padding: 10px;
    
    
    
    &:hover {
        transition-duration: 0.25s;
        transform: translateY(-10px);
        cursor: pointer;
    }


    & img{
        background: transparent;
    }
`;



export default TopProducts;
