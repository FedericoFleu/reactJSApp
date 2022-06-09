import "./ItemCount.css"
import { useState } from "react"
 
export const ItemCount = ( {max} ) =>{

    const [estado, setEstado] = useState(1)
 
    const handleSumar = () =>{
            estado < max && setEstado(estado + 1)
    }

    const handleRestar = () =>{
        estado > 1 && setEstado(estado - 1)
    }

    const handleAgregar = () =>{
        console.log("Añadido al carrito")
    }

    return (
        <section >
                <p className="cantText">Cantidad:</p>

                    <div className="my-3 buttons">  
                        <button className="btn btn-outline-danger btnOpe" onClick={handleRestar}>-</button>

                        <span className="cantProd my-2" >{estado}</span>

                        <button className="btn btn-outline-success btnOpe" onClick={handleSumar}>+</button>

                    </div>

                    <button className="btn btn-success btncCarrito" onClick={handleAgregar}>Añadir al carrito</button>
                        
        </section>

    )

}