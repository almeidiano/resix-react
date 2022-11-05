import { useState, useRef, useEffect } from 'react';
import Button from './Button.js';

const ToggleButtonLaunch = ({pinNumber}) => {
    const [toggle, setToggle] = useState(false);
    const pinNumberElement = useRef('');
    const toggleRef = useRef('');
    const buttonRef = useRef('');

    const ToggleButton = () => {
        setToggle(!toggle);
        if(toggle) {
            buttonRef.current.classList.add('disabled');
        }else{
            buttonRef.current.classList.remove('disabled');
        }
    }

    useEffect(() => {
        if(toggle) {
            toggleRef.current.classList = 'switchToggle switchToggle--checked';
        }
    }, []);

    async function launchToPinNumber(){
        const data = {
            almeidianoProject: 'resix',
            launchMethod: 'launch'   
        }
        if(toggle) {
            let esp8266Url = localStorage.getItem('resixUrl');

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
        }
    }

    return(
        <>
        <div ref={toggleRef} onClick={ToggleButton} className={`switchToggle ${toggle ? 'switchToggle--checked' : ''}`}>
            <div className="switchToggle-container">
                <div ref={pinNumberElement} className="switchToggle-pinNumber">{pinNumber}</div>
                <div className="switchToggle-check"></div>
                <div className="switchToggle-uncheck"></div>
            </div>
            <div className="switchToggle-circle"></div>
            <input className="switchToggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        <Button ref={buttonRef} disabled={true} onClick={launchToPinNumber} className='default-button' text='Lançar' />
        </>
    )
}

export default ToggleButtonLaunch;