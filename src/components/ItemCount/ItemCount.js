import "./ItemCount.scss"
import { useState } from "react"

export const ItemCount = ( {img, nombre, precio} ) =>{

    const [estado, setEstado] = useState(1)
 
    const agregar = () =>{

        setEstado(estado + 1)
    }

    const quitar = () =>{

        if (estado <= 0) {
            return;
          }

        setEstado(estado - 1)
    }

    return (
            <section className="cards">

                <div className="row">

                    <div className="card" > 

                        <h3 className="cardsTitle">{nombre}</h3>

                        <img className="imagCards" alt="product imgaen" src={img} />

                        <strong className="precioCard">{precio}</strong>

                            <div className="buttons">
                                    <button className="btn btn-danger" onClick={quitar}>-</button>

                                    <p className="cantProd" >{estado}</p>

                                    <button className="btn btn-primary agregar" onClick={agregar}>+</button>
                            </div>

                            <button className="btn btn-success carrito">Añadir al carrito</button>
                        
                    </div>

                </div>

        </section>

    )

}