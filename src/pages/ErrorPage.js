import NavLogo from '../components/navLogo.svg';
import Button from '../components/Button.js';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function ErrorPage() {
  let theme = localStorage.getItem("theme");
    
  switch (theme) {
      case "white":
          document.documentElement.setAttribute("data-theme", "light");  
      break;
      case "dark":
          document.documentElement.setAttribute("data-theme", "dark");
      break;
      case null:
          document.documentElement.setAttribute("data-theme", "light");
      break;
  }
  return (
    <div className='app'>
      <div className="container">
          <div className='errorPage'>
              <img src={NavLogo} alt="Navbar Logo" />
              <h1>Oops!</h1>
              <Link to="/"><Button icon={faCircleArrowLeft} text='Voltar ao inicio' /></Link>
          </div>
          <span class='version'>v1.0</span>
      </div>
    </div>
  )
}

export default ErrorPage