import { FiShoppingCart } from 'react-icons/fi';
import "./CartWidget.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)

    return(
        <div className='cart'>
            <Link to="/cart">
                <FiShoppingCart className="iconCarrito"/>
                <span className='cantCart'>{totalQuantity()}</span>
            </Link>
        </div>
    )
}