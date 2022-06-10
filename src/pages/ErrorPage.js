import NavLogo from '../components/navLogo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../components/Button.js';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="container">
        <div className='errorPage'>
            <img src={NavLogo} alt="Navbar Logo" />
            <h1>Oops!</h1>
            <Link to="/"><Button icon={faCircleArrowLeft} text='Voltar ao inicio' /></Link>
        </div>
        <span class='version'>v1.0</span>
    </div>
  )
}

export default ErrorPage