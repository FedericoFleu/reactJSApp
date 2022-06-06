import { products } from "./data"

export  const pedirDatos=()=>{
    
    return new Promise((resolve,reject)=>{

        setTimeout(() =>{
                resolve(products)
        }, 1500)

    })
}