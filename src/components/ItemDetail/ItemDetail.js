import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const ItemDetail = ( {item} ) =>{

    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () =>{

        if (cantidad === 0) return

        const itemToCart = {
            ...item,
            cantidad
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
                            <Link to={"/cart"}><button className="btn btn-outline-dark mx-3">Finalizar mi compra</button></Link>
                            <Link to={"/"}><button className="btn btn-outline-dark">Seguir Comprando</button></Link>
                        </div>
                        :
                        <ItemCount
                        max={item.stock}
                        counter = {cantidad}
                        setCounter={setCantidad}
                        handleAgregar ={handleAgregar}
                        />
                    }          
                    
                </div>
            </div>
        </div>
    )
}