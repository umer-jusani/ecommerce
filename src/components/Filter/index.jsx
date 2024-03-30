import React from 'react'
import Menu from './components/menu'
import styled from 'styled-components'
import { FaHeadphones } from "react-icons/fa6";

const Filter = () => {
  return (
    <MenuContainer className='container'>
      <Menu />
      {/* Support Center */}
      <Support>
        <FaHeadphones size={30} />
        <div className='relative'>
          <h3 className='text-primary font-semibold text-2xl' >1900 - 888</h3>
          <span className='absolute top-[30px] text-sm text-gray'>24/7 Support Center</span>
        </div>
      </Support>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  /* border: 2px solid black; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Support = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export default Filter
