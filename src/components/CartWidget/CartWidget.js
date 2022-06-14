import { FiShoppingCart } from 'react-icons/fi';
import "./CartWidget.css"
import { Link } from 'react-router-dom';

export const CartWidget = () =>{


    return(
        <Link to="/cart">
            <FiShoppingCart className="iconCarrito"/>
        </Link>
    )
}