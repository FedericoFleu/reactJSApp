import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Spinners } from "../Spinners/Spinners"

export const ItemListContainer = () =>{
    
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
   
    useEffect(() =>{
        setLoading(true)

       // 1- armar la referncia 
        const productsRef = collection(db, "productos")
        const q = categoryId ? query(productsRef, where("categoria", "==", categoryId)) : productsRef
       //2- (async) llamar a firebase con la referencia del punto 1
        getDocs(q)
            .then((resp) =>  {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems( newItems )
            })
            .finally(() =>{
                setLoading(false)
            })

    }, [categoryId])

    return(
        <section className="cardsContainer container my-5">
            {
                loading 
                ?   <div className="containerSpinner">
                        <Spinners/>
                    </div> 
                    
                : <ItemList items={items}/>
            }
        </section>
    )
}