import React from 'react'
import styled from 'styled-components'

const BannersWithOffer = () => {


  const bannerData = [
    {
      Title: "Best Prices & Offers",
      name: "Orders 50$ or more",
      imageURL: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg",
    },
    {
      Title: "Free Delivery",
      name: "24/7 amazing service",
      imageURL: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg",
    },
    {
      Title: "Great Daily Deal",
      name: "When you sign up",
      imageURL: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg",
    },
    {
      Title: "Wide Assorment",
      name: "Mega Discounts",
      imageURL: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg",
    },
    {
      Title: "Easy Returns",
      name: "With in 30 Days",
      imageURL: "https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg",
    }
  ]



  return (
    <div className='container mt-[3rem] flex flex-wrap justify-between'>

      {bannerData.map(({ imageURL, Title, name }) => (
        <CardContainer className='space-x-2'>
          <img src={imageURL} alt="" width={50} height={50} />
          <div >
            <h3 style={{ fontWeight: "550" }}  >{Title}</h3>
            <p className='text-h5 text-Lightgray'>{name}</p>
          </div>
        </CardContainer>
      ))}
    </div>
  )
}


const CardContainer = styled.div`
   margin-bottom: 20px;
   cursor: pointer;
   display: flex;
  & > h3{
    margin-bottom: 10px;
  }
`


export default BannersWithOffer
