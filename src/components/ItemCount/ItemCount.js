import "./ItemCount.scss"
import { useState } from "react"
 
export const ItemCount = ( ) =>{

    const [estado, setEstado] = useState(1)
 
    const agregar = () =>{

            setEstado(estado + 1)
    }

    const quitar = () =>{

        estado > 1 && setEstado(estado - 1)
    }

    return (
            <section >
                
                    <div className="buttons">
                        <button className="btnOpe btn-danger" onClick={quitar}>-</button>

                        <p className="cantProd" >{estado}</p>

                         <button className="btnOpe btn-success" onClick={agregar}>+</button>
                    </div>

                    <button className="btn btn-success carrito">Añadir al carrito</button>
                        
        </section>

    )

}