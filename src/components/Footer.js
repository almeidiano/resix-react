// import React from 'react'
import SamLogo from './SamLogo.svg';

export const Footer = () => {
  return (
    <footer>
        <div className='container footer'>
          <span>Developed by <img src={SamLogo} alt="Samuel Logo" /></span>
        </div>
        <span class='version'>v1.0</span>
    </footer>
  )
}

export default Footer;
