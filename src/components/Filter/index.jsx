import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { MdOutlineGridView } from "react-icons/md";
import styled from 'styled-components';
import BrowseCategories from './components/browseCategories';
import Menu from './components/menu';

const Filter = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(0)

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 40) {
        headerRef.current.classList.add('navigation-OnScroll');

      } else {
        headerRef.current.classList.remove('navigation-OnScroll');
      }
    })
  }, [])



  return (
    <MenuContainer ref={headerRef}>
      <div className="flex gap-3 relative border-red-900">
        {/* Categories */}
        <div className='flex bg-primary gap-2 items-center  px-4 py-2 rounded-lg cursor-pointer hover:bg-lightPrimary' onClick={() => setIsOpen(!isOpen)}>
          <MdOutlineGridView color='white' />
          <span className='text-[white]'>Browse All Categories</span>
          <FaAngleDown color='white' />
          {isOpen && <BrowseCategories />}
        </div>
        {/* Menu */}
        <Menu />
      </div>
      {/* Support Center */}
      <Support>
        <FaHeadphones size={30} />
        <div className='relative  '>
          <h3 className='text-primary font-semibold text-xl' >1900 - 888</h3>
          <div className='text-center top-[30px] text-sm text-gray  '>24/7 Support Center</div>
        </div>
      </Support>
    </MenuContainer >
  )
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  transition: all 0.5s ease-out;
`
const Support = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export default Filter
