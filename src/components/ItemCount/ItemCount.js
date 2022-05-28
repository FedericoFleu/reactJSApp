import "./ItemCount.scss"
import { useState } from "react"


export const ItemCount = ( {img, nombre, precio} ) =>{

    const [estado, setEstado] = useState(0)
 
    const agregar = () =>{

       setEstado (estado + 1)

    }

    const quitar = () =>{

        setEstado (estado - 1)

    }

    return (
            <section className="containerCards container my-5">

                <div className="card">
                    <h3 className="cardsTitle">{nombre}</h3>

                    <img className="imagCards" alt="product imgaen" src={img} />

                    <br/>

                    <strong className="precioCard">{precio}</strong>

                    <div className="buttons">
                        <button className="btn btn-danger" onClick={quitar}>-</button>

                        <p className="cantProd">{estado}</p>

                        <button className="btn btn-primary agregar" onClick={agregar}>+</button>
                    </div>

                    <button className="btn btn-success carrito">Añadir al carrito</button>

                </div>

                </section>
            

            

    )

}