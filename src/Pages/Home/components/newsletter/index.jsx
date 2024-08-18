import React from 'react'
import Background from '../../../../assets/images/bg.png';
import NewsletterImage from '../../../../assets/images/newsletter.png';
import styled from 'styled-components';
import NewsletterSearchBar from '../../../../components/newsletter';

const Newsletter = () => {
    return (
        <Container>
            <Wrapper className='container'>
                <Content className='space-y-7 '>
                    <div className='space-y-2'>
                        <h1>Stay home & get your daily needs from our shops</h1>
                        <p>Start Your daily shoppiong with your Nest Meal</p>
                    </div>
                    <NewsletterSearchBar />
                </Content>
                <div>
                    <img src={NewsletterImage} alt="" className='h-full w-full' />
                </div>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${Background});
    max-width: 100%;
    padding: 2rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const Content = styled.div`
    display: block;
    

    & h1{
    color: rgba(0, 0, 0, 0.7);
    font-size: 35px;
    font-weight: bolder;
    line-height: 1;
    border-radius: 1.6rem;
     
    line-height: 1.2;
    }

    & p{
        font-style: italic;
    }

`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 4rem;

`


export default Newsletter
