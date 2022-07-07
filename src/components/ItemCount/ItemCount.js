import "./ItemCount.css"
 
export const ItemCount = ( {handleAgregar, max, counter, handleSumar, handleRestar} ) =>{

    if (max === 0) {    
        return(
            <div className="my-3">
                <strong>No hay stock para este producto</strong>
            </div>
        )
    }

    return (
            <div >
                <p className="cantText">Cantidad:</p>

                <div className="my-3 buttons">  
                    <button 
                        className="btn btn-outline-danger btnOpe" 
                        onClick={handleRestar}
                        disabled= {counter === 0}
                        >
                            -
                    </button>

                    <span className="cantProd my-2" >{counter}</span>

                    <button 
                        className="btn btn-outline-success btnOpe"
                         onClick= {handleSumar}
                         disabled= {counter === max}
                         >
                            +
                    </button>
                </div>
                
                <button disabled={counter === 0} className="btn btn-outline-dark btncCarrito" onClick={handleAgregar} >Añadir al carrito</button>    
            </div>
    )
}