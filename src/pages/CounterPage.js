import Button from '../components/Button.js';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function CounterPage() {
    let count = 10;
    const counter = setInterval(timer, 1000);

    function timer() {
        const formArea = document.querySelector('.form-area h1');
        count = count-1;
        formArea.innerHTML = count;

        if(count <= 0) {
          clearInterval(counter);
          formArea.innerText = 'Lançado!';
          document.querySelector('.form-area a').style.display = 'block';
          // do nodemcu action here
        }
      }

    return (
    <div className='app'>
        <div class="container">
          <main>
            <div class="section">
              <div class="form-area" style={{flexDirection: 'column'}}>
                <h1 style={{fontSize: 'xxx-large'}}>{count}</h1>
                <Link style={{display: 'none'}} to="/"><Button icon={faHome} text='Voltar ao inicio' /></Link>
              </div>
            </div>
          </main>
        </div>
    </div>
    )
}

export default CounterPage;