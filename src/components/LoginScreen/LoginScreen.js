import { useAuthContext } from "../../context/AuthContext"
import "./LoginScreen.css"
import { Formik, Form } from "formik"
import { TextField } from "./TextFiled"
import * as Yup from "yup"

export const LoginScreen = () =>{

    const validate = Yup.object().shape({

        fullName: Yup.string()
                    .required("Campo requerido")
                    .min(5, "El nombre completo es demasiado corto")
                    .max(25, "Maximo 30 caracteres"),
        email: Yup.string()
                    .required("Campo requerido")
                    .email("Usar ej: example@gmail.com"),
        password: Yup.string()
                    .required("Campo requerido")
                    .min(6, "Ingrese 6 caracteres o mas"),
        confirmPassword: Yup.string()
                    .required("Campo requerido")
                    .oneOf([Yup.ref("password"), null], "Las contraseñas deben concidir")
    })

    const {login} = useAuthContext()

    const handleSubmit = (values) => {
        login(values)
    }

    return(
        <div className="signUp">
            <div className="signUpContainer">
                <Formik
                    initialValues={{
                        fullName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={validate}
                    onSubmit={handleSubmit}
                    >
                    {(formik) => (
                        <div>
                            <h2 className="my-4 titleSingUp">Sign Up</h2>
                            <Form>
                                <TextField label="Nombre Completo" name="fullName" type="text" placeholder="Nombre Completo"/>
                                <TextField label="Email" name="email" type="email" placeholder="email@example.com"/>
                                <TextField label="Contraseña" name="password" type="password" placeholder="Contaseña"/>
                                <TextField label="Repetir contraseña" name="confirmPassword" type="password" placeholder="Repetir contaseña"/>
                                <button className="btn btn-dark" type="submit">Iniciar Sesion</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}