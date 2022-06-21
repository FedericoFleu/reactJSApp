import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../mock/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () =>{
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
   
    useEffect(() =>{
        setLoading(true)

        pedirDatos()
            .then((resp)=>{
                    if(!categoryId){
                        setItems( resp )
                    }else{
                        setItems( resp.filter( (item) => item.categoria === categoryId) )
                    }
        })
        .catch( (error) =>{
            console.log("ERROR",error)
        })
        .finally( ()=>{
            setLoading(false)
        })
    }, [categoryId])

    return(
        <section className="cardsContainer container my-5">
            {
                loading 
                ?   <Spinner animation="border" role="status" className="spiner">
                        <span className="visually-hidden"></span>
                    </Spinner> 
                    
                : <ItemList items={items}/>
            }
        </section>
    )
}