// import React from 'react'
import NavLogo from './navLogo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
  return (
    <nav>
        <div class='container'>
          <div class='menu'>
            <div class='logo'><img src={NavLogo} alt="Navbar Logo" /></div>
            <div class='hamburguer'><FontAwesomeIcon icon={faNavicon} /></div>
          </div>
        </div>
    </nav>
  )
}

export default Nav;
