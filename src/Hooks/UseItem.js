import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"


export const useItem = () =>{

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

    return {
        item, loading
    }
}