import '../../hoja-estilos/Card.css';
import { Link } from 'react-router-dom';



const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} className="card-image" alt="" />
            <div className="cardBody">
                <h5>{props.text}</h5>
                <p>{props.parr}</p>
                <Link to={props.link} className="card-link">Leer más</Link>
            </div>
        </div>
    );
}
export default Card;
