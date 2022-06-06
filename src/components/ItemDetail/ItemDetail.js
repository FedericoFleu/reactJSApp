import "./ItemDetail.css"

export const ItemDetail = ({item}) =>{

    return(
        <div className="itemDetail container my-5">

           <img className="imgDetail" alt={item.nombre} src={item.img} />
        
            <div className="dataPrd">

                <h2>{item.nombre}</h2>
                <p className="itemDescr">{item.descrip}</p>

                    <div className="precioItem">
                        <strong className="prodcPrecio">${item.precio}</strong>
                        <button className="btn btn-success">Añadir al carrito </button>
                    </div>

            </div>

        </div>

    )
}