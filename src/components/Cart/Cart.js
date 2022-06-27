import { useCartContext } from "../../context/CartContext"
import { IoMdClose } from "react-icons/io"
import { EmptyCart } from "./EmptyCart"
import { Link } from "react-router-dom";
import "./Cart.css"

export const Cart = () =>{

    const {cart, totalPrice, removeItem ,emptyCart} = useCartContext()

    if (cart.length === 0) return <EmptyCart/>

    return(
        <div className="container my-5">
            <h2>Carrito de la compra</h2>
            <hr/>

            {
            cart.map((item) => (

            <div key={item.id} className="my-2 container">
                <div className="containerCart">
                    <IoMdClose className="iconRemove" onClick={() => removeItem(item.id)} />
                    <img className="imgCardsCart" alt={item.nombre} src={item.img} />
                    <h2>{item.nombre}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <p className="prodPre">Precio: ${item.precio * item.cantidad}</p>
                    <hr/>
                </div>
                <hr/>
                
            </div>))
            }

            <div className="container my-5 detail">
                <strong className="totalCart">Total del Carrito: ${totalPrice()}</strong>       
            </div>

            <button onClick={emptyCart} className="btn btn-outline-dark">Vaciar Carrito</button>

            <Link to={"/checkout"} className="btn btn-dark mx-4">Terminar mi compra</Link>
        </div>
    )
} 