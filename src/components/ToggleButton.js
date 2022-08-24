import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect } from 'react';

const ToggleButton = () => {
    const [toggle, setToggle] = useState(localStorage.getItem("theme") === "dark");
    const toggleRef = useRef('');

    const ToggleTheme = () => {
        if(toggle === true) {
            setToggle(!toggle);
            localStorage.setItem("theme", 'white');
        }else{
            setToggle(!toggle);
            localStorage.setItem("theme", 'dark');
        }
    }

    const theme = localStorage.getItem("theme");

    useEffect(() => {
        if(theme === 'dark') {
            console.log('dark');
            toggleRef.current.classList = 'wrg-toggle wrg-toggle--checked';
            document.documentElement.setAttribute("data-theme", "dark");
        }else if(theme === 'white') {
            console.log('white');
            document.documentElement.setAttribute("data-theme", "white");
        }else{
            console.log('white');
            document.documentElement.setAttribute("data-theme", "white");
        }
    }, [theme]);

    return(
        <div ref={toggleRef} onClick={ToggleTheme} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    <span><FontAwesomeIcon style={{color: 'yellow', paddingRight: '0'}} icon={faSun} /></span>
                </div>
                <div className="wrg-toggle-uncheck">
                    <span><FontAwesomeIcon style={{color: 'yellow', paddingRight: '0'}} icon={faMoon} /></span>
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

export default ToggleButton;