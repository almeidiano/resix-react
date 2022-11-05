import Button from '../components/Button.js';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Form({method}) {
const [esp8266Url, setEsp8266Url] = useState('');

const handleMessage = messageEvent => {
  setEsp8266Url(messageEvent.target.value);
} 

const navigate = useNavigate();

async function fetchEsp8266Response() {
    const data = {
      almeidianoProject: 'resix',
      launchMethod: method 
    }
  
    if(method === 'singleLaunch') {
        try {
            let req = await fetch(esp8266Url, {
              method: "POST",
              body: JSON.stringify(data)
            });
      
            let res = await req.json();
            if(res.result.error === false) {
              alert('Lançado!');
            }else{
                alert('Ocorreu um erro');
            }
          } catch (error) {
            alert('Link invalido!');
          }
    }else{
        try {
            let req = await fetch(esp8266Url, {
              method: "POST",
              body: JSON.stringify(data)
            });
      
            let res = await req.json();
            if(res.result.error === false) {
              localStorage.setItem('resixUrl', esp8266Url);
              navigate('/LaunchBtns');
            }else{
                alert('Ocorreu um erro');
            }
          } catch (error) {
            alert('Link invalido!');
          }
    }
  }

  const connect = event => {
    event.preventDefault();
    fetchEsp8266Response();
  }
  return (
    <div className="form-area">
        <form onSubmit={connect}>
            <input value={esp8266Url} required onChange={handleMessage} name="esp8266Api" placeholder="Digite o link de conexão..." /> 
            <div className='buttonArea'>
                <Button text={method === 'singleLaunch' ? 'Lançar' : 'Conectar'} />
            </div>
        </form>
  </div>
  )
}

export default Form