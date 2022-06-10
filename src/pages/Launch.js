import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CounterPage from '../pages/CounterPage.js';

function Launch() {

  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  const handleMessage = messageEvent => {
    setMessage(messageEvent.target.value);
  }

  let navigate = useNavigate();

  async function doSomething(event){
    event.preventDefault();
    setIsActive(current => !current);

    setTimeout(async () => {
      setIsActive(isActive);

      try{
        return await fetch(message)
        .then((res) => {
          if(res.status === 202) {
            navigate('/CounterPage');
          }else{
            document.querySelector("form input").style.borderColor = 'rgb(183, 9, 0)';
            setError('Não foi possível conectar ao link');
            document.querySelector(".errorMessage").style.display = 'block';
          }
        })
      }catch(error) {
        setError('Não foi possível conectar ao link');
      }

    }, 600);
  }
  
  return (
    <div className='app'>
      <Nav />
      <div className="container">
      <main>
        <div className="section">
          <FontAwesomeIcon icon={faRocket} />
          Lançar
        </div>
        <div className="form-area">
          <form onSubmit={doSomething}>
            <input value={message} required onChange={handleMessage} name="text" placeholder="Digite o link de conexão..." /> 
            <div className='buttonArea'>
              <span className="errorMessage">{error}</span>
              <button  className={isActive ? 'activated' : 'redButton'}>LANÇAR</button>
            </div>
          </form>
        </div>
      </main> 
      </div>
      <Footer />
    </div>
  )
}

export default Launch