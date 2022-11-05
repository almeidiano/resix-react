import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar.js';
import Form from '../components/Form.js';

function MultiLaunch() {
  return (
    <div className='app'>
      <Sidebar />
      <Nav />
      <div className="container">
      <main>
        <div className="section">
          <FontAwesomeIcon icon={faRocket} />
          Lançamento Único
        </div>
        <div>
          <Form method='singleLaunch' />
        </div>
      </main> 
      </div>
      <Footer />
    </div>
  )
}

export default MultiLaunch