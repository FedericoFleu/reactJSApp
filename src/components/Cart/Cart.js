import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () =>{

    const {cart, totalPrice} = useContext(CartContext)

    return(
        <div className="container my-5">
            
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                <div key={item.id} className="my-2">
                    <img className="imgCards" alt="img Productos" src={item.img} />
                    <h2>{item.nombre}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <strong>Precio: ${item.precio * item.cantidad}</strong>
                </div>))
            }

            <h4>Total: ${totalPrice()}</h4>

        </div>
    )

} 