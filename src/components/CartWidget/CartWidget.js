import "./CartWidget.css"
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () =>{

    const {totalQuantity, cart} = useCartContext()

    if (cart.length === 0) return <Link to={"/"}/>

    return(
        <div>
            <Link to="/cart">
                <FiShoppingCart className="iconCarrito"/>
                <span className={`totalCart ${totalQuantity() === 0 ? "hidden" : " "}`}>{totalQuantity()}</span>
            </Link>
        </div>
    )
}

