import React from "react";
import styled from "styled-components";
import colors from "../../theme";
import { FaArrowPointer } from "react-icons/fa6";

const NewsletterSearchBar = () => {
  return (
    <>
      <InputWrapper>
        <FaArrowPointer
          size={20}
          color={colors.primary}
          className="absolute top-4 left-2 inputIcon"
        />
        <SliderIinput type="text" placeholder="Enter Your Placeholder" />
        <button className="bg-primary py-2 px-6 rounded-3xl text-[white] text-[15px] ms-2">
          Subscribe
        </button>
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  left: 6rem;
  filter: drop-shadow(-3px 10px 30px #0d9276);
`;

const SliderIinput = styled.input`
  height: 20px;
  padding: 1.5rem 2rem;
  background-color: white;
  border-radius: 5px;
`;

export default NewsletterSearchBar;
