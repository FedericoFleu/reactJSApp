import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
// import { IoMdClose } from "react-icons/io"

export const Cart = () =>{

    const {cart, totalPrice, empycart} = useContext(CartContext)

    return(
        <div className="container my-5">
            
            <h2>Mi carrito</h2>
            <hr/>
            {
                cart.map((item) => (
                <div key={item.id} className="my-2">
                    {/* <IoMdClose onClick={empycart} /> */}
                    <img className="imgCards" alt="img Productos" src={item.img} />
                    <h2>{item.nombre}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <strong>Precio: ${item.precio * item.cantidad}</strong>
                    <hr/>
                </div>))
            }

            <div className="container my-5 detail">
                <p>Total del Carrito</p>
                <hr/>
                <h4>Total: ${totalPrice()}</h4>
            </div>

            <button onClick={empycart} className="btn btn-danger" >Vacias Carrito</button>
        </div>
    )

} 