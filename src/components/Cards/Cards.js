import { Link } from "react-router-dom"
import "./Cards.css"
import { IoBagAddOutline } from 'react-icons/io5';
 
export const Cards = ( {items} ) =>{

    return (
        <div className="col-md-3">

            <div className="cards">
                <Link to={`/item/${items.id}`}>
                    <img className="imgCards" alt={items.nombre} src={items.img} />
                    <p className="tituloCards">{items.nombre}</p>
                    <hr/> 
                        <div className="containerPrecio">
                                <strong className="precioCards">$ {items.precio}</strong>
                                <Link to={`/item/${items.id}`}>
                                    <button className="btn btn-outline-dark"><IoBagAddOutline className="bag"/></button>
                                </Link>
                        </div>
                </Link>
            </div>

        </div>
    )
}