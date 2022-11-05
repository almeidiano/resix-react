import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Card from '../components/Card.js';
import Sidebar from '../components/Sidebar.js';

function Home() {
  return (
    <div className='app'>
      <Sidebar />
      <Nav />
      <div className="container">
        <main>
          <div className="section">
            <FontAwesomeIcon icon={faHome} />
            Home
          </div>
          <div className="card-area">
            <Link to="/SingleLaunch"><Card icon={faRocket} text='Lançamento único' /></Link>
            <Link to="/MultiLaunch"><Card icon={faRocket} text='Lançamento múltiplo' /></Link>
          </div>
        </main> 
      </div>
      <Footer />
    </div>
  )
}

export default Home