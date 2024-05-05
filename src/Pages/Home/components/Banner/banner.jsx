import React from 'react'
import Banner1 from '../../../../assets/images/banner1.png'
import Banner2 from '../../../../assets/images/banner2.png'
import Banner3 from '../../../../assets/images/banner3.png'
import styled from 'styled-components'
import Image from './components/imageBanner'

const Banner = () => {
    return (
        <Container className='container mt-[2rem] flex justify-between space-x-2'>
            <Image src={Banner1} />
            <Image src={Banner2} />
            <Image src={Banner3} />
        </Container>
    )
}

const Container = styled.div`
    & div{
        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
`



export default Banner
