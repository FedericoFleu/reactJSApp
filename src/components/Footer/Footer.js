import { useState } from "react"

export const Footer = () =>{

    const [values, setValues] = useState({
        nombre: ``,
        email: ``, 
        telefono: ``
    })

    const handleInputChange = (e) =>{
            setValues({
                ...values,
                [e.target.name]: e.target.value 
            })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="container my-5">
            <h3 className="my-5">Contacto</h3>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <h4>Datos del usuario</h4>

                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    placeholder="Nombre completo"
                    type={"text"}
                    className="form-control my-3"
                />

                <input 
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    type={"email"}
                    className="form-control my-3"
                />

                <input 
                    name="telefono"
                    onChange={handleInputChange}
                    placeholder="Numero de telefono"
                    type={"number"}
                    className="form-control my-3"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}