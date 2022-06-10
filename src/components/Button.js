import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Button = ({icon, text}) => {
    return (
        <button className='default-button' type='submit'><FontAwesomeIcon icon={icon} /><span>{text}</span></button>
    )
}

export default Button