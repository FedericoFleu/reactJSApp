import { Footer } from "../Footer/Footer"
import { ItemList } from "../ItemList/ItemList"
import { Spinners } from "../Spinners/Spinners"
import { useProducts } from "../../Hooks/useProducts"

export const ItemListContainer = () =>{

    const { items, loading } =  useProducts()

    return(
        <section className="cardsContainer container my-5">
            {
                loading 
                ?   <div className="containerSpinner">
                        <Spinners/>
                    </div> 
                : <ItemList items={items}/>
            }
            
            <Footer/>
        </section>
    )
}