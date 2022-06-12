import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect } from 'react';

const ToggleButton = () => {
    const [toggle, setToggle] = useState(true);
    const toggleRef = useRef('');

    const ToggleTheme = () => {
        setToggle(!toggle);
        if(toggle === true) {
            localStorage.setItem("theme", 'white');
        }else{
            localStorage.setItem("theme", 'dark');
        }
    }

    const theme = localStorage.getItem("theme");

    useEffect(() => {
        if(theme === 'dark') {
            toggleRef.current.classList = 'wrg-toggle wrg-toggle--checked';
        }
    }, [theme]);
    
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