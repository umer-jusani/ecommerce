import React from "react";
import styled from "styled-components";
import TopProducts from "./components/topProducts";

const PreminumProducts = () => {
  return (
    <Container className="container mt-[3rem] mb-[4rem]">



      <Wrapper>
        <TopProducts title="Top Selling" />
        <TopProducts title="Trending Products" />
        <TopProducts title="Recently Added" />
        <TopProducts title="Top Rated" />
      </Wrapper>




    </Container>
  )
};

const Container = styled.section`
  
`

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export default PreminumProducts;
