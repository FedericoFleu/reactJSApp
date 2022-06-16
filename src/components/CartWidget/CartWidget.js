import "./CartWidget.css"
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () =>{

    const {totalQuantity} = useCartContext()

    return(
        <div className='cart'>
            <Link to="/cart">
                <FiShoppingCart className="iconCarrito"/>
                <span className='cantCart'>{totalQuantity()}</span>
            </Link>
        </div>
    )
}