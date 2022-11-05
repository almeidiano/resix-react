import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NavLogo from './navLogo.svg';
import {Link} from 'react-router-dom';
import ToggleButton from '../components/ToggleButton.js';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    return (
        <>
            <div className='darkBg'></div>
            <aside>
                <div className="sidebar-logo">
                    <img src={NavLogo} alt="Navbar Logo" />
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li><Link to="/"><FontAwesomeIcon icon={faHome} />Inicio</Link></li>
                        <li><Link to="/SingleLaunch"><FontAwesomeIcon icon={faRocket} />Lançamento único</Link></li>
                        <li><Link to="/MultiLaunch"><FontAwesomeIcon icon={faRocket} />Lançamento múltiplo</Link></li>
                        <li><Link to="#"><ToggleButton /></Link></li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
