import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useCounter } from "../../Hooks/useCounter"

export const ItemDetail = ( {item} ) =>{

    const {addItem, isInCart} = useContext(CartContext)

    const {counter, handleSumar, handleRestar} = useCounter(0, item.stock)

    const handleAgregar = () =>{

        if (counter === 0) return

        const itemToCart = {
            ...item,
            cantidad: counter
        }

        addItem(itemToCart) 
    }

    return(
        <div className="itemDetail container my-5">
            <img className="imgDetail" alt={item.nombre} src={item.img} />
        
            <div className="dataPrd">
                <h2>{item.nombre}</h2>
                <p className="itemDescr">{item.descrip}</p>
                <strong className="prodcPrecio">${item.precio}</strong>

                <div className="precioItem">
                    {
                        isInCart(item.id)
                        ? <div>
                            <Link to={"/"}><button className="btn btn-outline-dark mx-3">Seguir Comprando</button></Link>
                            <Link to={"/cart"}><button className="btn btn-outline-dark ">Finalizar mi compra</button></Link>
                        </div>
                        :
                        <ItemCount
                        max={item.stock}
                        counter = {counter}
                        handleSumar = {handleSumar}
                        handleRestar = {handleRestar}
                        handleAgregar ={handleAgregar}
                        />
                    }           
                </div>
            </div>
        </div>
    )
}