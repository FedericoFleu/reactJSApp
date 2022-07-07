import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Spinners } from "../Spinners/Spinners"
import { useItem } from "../../Hooks/UseItem"

export const ItemDetailContainer = () => {
    
    const { item, loading } =  useItem()

    return(
        <section className="cardsContainer container my-5">
            {
                loading 
                ?   <div className="containerSpinner">
                        <Spinners/>
                    </div> 
                : <ItemDetail item={item}/>
            }
        </section>
    )
}