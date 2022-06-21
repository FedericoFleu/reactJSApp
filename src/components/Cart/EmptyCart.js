import { Link } from "react-router-dom"

export const EmptyCart = () =>{

    return(
        <div className="container my-5">
            <h3>Tu carrito esta vacio</h3>
            <hr/>

            <Link to="/" className="btn btn-primary">Iniciar tu compra</Link>
        </div>
    )
}