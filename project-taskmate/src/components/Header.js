import React from 'react'
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header><div className='logo'>
          <img src={logo} alt='' />
          <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className='light'></span>
        <span className='medium'></span>
        <span className='dark'></span>
        <span className='gOne'></span>
        <span className='gTwo'></span>
      </div>
      </header>
  )
}

export default Header
