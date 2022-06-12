// import React from 'react'
import NavLogo from './navLogo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  const OpenSidebar = () => {
    const sidebar = document.querySelector('aside');
    const darkBg = document.querySelector('.darkBg');

    sidebar.classList.toggle('sidebar-activated');
    darkBg.classList.toggle('activated-sidebar');

    darkBg.onclick = () => {
      sidebar.classList.remove('sidebar-activated');
      darkBg.classList.remove('activated-sidebar');
    }
  }

  return (
    <nav>
        <div class='container'>
          <div class='menu'>
            <div class='logo'><img src={NavLogo} alt="Navbar Logo" /></div>
            <div style={{zIndex:'999'}} class='hamburguer'><FontAwesomeIcon onClick={OpenSidebar} icon={faNavicon} /></div>
          </div>
        </div>
    </nav>
  )
}

export default Nav;
