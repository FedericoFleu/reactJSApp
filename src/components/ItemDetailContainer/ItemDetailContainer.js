import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../mock/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
   
    useEffect(() =>{
        setLoading(true)
        
        // 1- armar la referncia 
       const docRef = doc(db, "productos", itemId)
       //2-  llamar a firestone
        getDoc(docRef)
            .then((doc) =>{
                setItem( { id: doc.id, ...doc.data()} )
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [itemId])

    return(
        <section className="cardsContainer container my-5">
            {
                loading 
                ?   <Spinner animation="border" role="status" className="spiner">
                        <span className="visually-hidden"></span>
                    </Spinner> 
                : <ItemDetail item={item}/>
            }
        </section>
    )
}