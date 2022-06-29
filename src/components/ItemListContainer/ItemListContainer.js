// import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
// import { useParams } from "react-router-dom"
// import { collection, getDocs, query, where } from "firebase/firestore"
// import { db } from "../../firebase/config"
import { Spinners } from "../Spinners/Spinners"
import { useProducts } from "./useProducts"

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
        </section>
    )
}