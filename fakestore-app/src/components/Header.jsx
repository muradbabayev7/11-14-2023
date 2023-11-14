import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './Header.css';

const Header = ({Fidan}) => {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='hamburger'>
          <GiHamburgerMenu />
        </div>
        <div className='logo'>
          <h2>FakeStore</h2>
        </div>
      </div>
      <div className='header__right'>
        PRODUCT COUNT: {Fidan.length}
      </div>
    </div>
  )
}

export default Header