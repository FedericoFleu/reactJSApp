import "./ItemDetail.css"
import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ( {item} ) =>{

    return(
        <div className="itemDetail container my-5">

           <img className="imgDetail" alt={item.nombre} src={item.img} />
        
            <div className="dataPrd">

                <h2>{item.nombre}</h2>
                <p className="itemDescr">{item.descrip}</p>

                <strong className="prodcPrecio">${item.precio}</strong>
                    <div className="precioItem">
                        <ItemCount
                           max={item.stock}
                        />
                    </div>

            </div>

        </div>

    )
}