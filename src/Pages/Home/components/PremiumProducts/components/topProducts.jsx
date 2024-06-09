import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../theme'

const TopProducts = ({ title }) => {
    return (
        <Container>
            <Heading className='section-Heading'>{title}</Heading>

            <Wrapper>

                <Product>
                    
                </Product>



            </Wrapper>




        </Container>
    )
}


const Container = styled.div`
    border: 2px solid black;
    
`

const Heading = styled.span`
padding-bottom: 8px;
border-bottom: 2px solid ${colors.primary};
font-size: 22px;
`

const Wrapper = styled.div`
`


const Product = styled.div`
`



export default TopProducts
