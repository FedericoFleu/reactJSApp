import "./ItemCount.css"
 
export const ItemCount = ( {max, setCounter, counter, handleAgregar} ) =>{

        const handleSumar = () =>{
            counter < max && setCounter(counter + 1)
        }

        const handleRestar = () =>{
            counter > 1 && setCounter(counter - 1)
        }

    return (
            <section >
                    <p className="cantText">Cantidad:</p>

                        <div className="my-3 buttons">  
                            <button className="btn btn-outline-danger btnOpe" onClick={handleRestar}>-</button>

                            <span className="cantProd my-2" >{counter}</span>

                            <button className="btn btn-outline-success btnOpe" onClick={handleSumar}>+</button>

                        </div>

                        <button className="btn btn-success btncCarrito" onClick={handleAgregar} >Añadir al carrito</button>
                        
        </section>

    )

}