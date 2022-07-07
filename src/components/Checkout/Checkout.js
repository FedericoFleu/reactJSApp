import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId} from "firebase/firestore"
import { Formik, Form} from 'formik';
import { TextField } from "../LoginScreen/TextFiled"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import { db } from "../../firebase/config"

const schema = Yup.object().shape({
    
    nombreCom: Yup.string()
                .required("Este campo es obligatorio")
                .min(5, "El nombre completo es demasiado corto")
                .max(30, "Maximo 30 caracteres"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("Fomarto de email ivalido, usar ej: example@gmail.com"),
    direccion: Yup.string()
                .required("Este campo es obligatorio")
                .min(4, "La direccion es demasiado corto")
                .max(40, "Maximo 40 caracteres"),

})

export const Checkout = () =>{

    const { cart, totalPrice, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const generarOrder = async (values) =>{

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: totalPrice()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach( (doc) => {
            const itemToUpdate = cart.find( prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if ( outOfStock.length === 0 ) {
            addDoc(ordersRef, orden) 
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            alert("Hay items sin stock")
        }
    }

    if  (orderId) {
        return (
            <div className="container my-5">
                <h3>Gracias por su compra!</h3>
                <hr/>
                <p>Su numero de orden es : {orderId}</p>

                <div className="containerEmpty">
                    <Link to="/" className="btn btn-outline-dark empty">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate  to="/" />
    }

    return(
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>
            
            <Formik 
                initialValues={ {
                    nombreCom: "",
                    email: "",
                    direccion: ""
                } }

                onSubmit={generarOrder}
                validationSchema={schema}
            >
                  {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                        
                        <TextField
                            label="Nombre Completo"
                            value={formik.values.nombre}
                            name="nombreCom"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Nombre Completo"
                        />  

                        <TextField
                            label="Email"
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"email"}
                            placeholder="email@example.com"
                        />

                        <TextField
                            label="Dirrecion de Envio"
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Dirrecion Completa"
                        />

                        <button onClick={emptyCart} className="btn btn-outline-dark my-2">Cancelar mi compra</button>
                        
                        <button type="submit" className="btn btn-dark mx-2">Enviar</button>
                </Form>
                )}
            </Formik>
        </div>  
    )
}



