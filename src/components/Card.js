import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Card = ({icon, text}) => {
  return ( 
    <div href="#" className="card">
        <div className="card-content">
            <div className="card-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="card-text">
                {text}
            </div>
        </div>
    </div>
  )
}

export default Card;