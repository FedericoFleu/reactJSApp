import { Cards } from "../Cards/Cards"
import "./ItemList.css"

export const ItemList = ( {items} ) =>{

    return(
        <div className="row">
            <h2 className="titleProd">Nuestros Productos</h2>
            
            <hr/>
            {
                items.map((items) => <Cards key={items.id} items={items} />)
            }
        </div>
    )
}