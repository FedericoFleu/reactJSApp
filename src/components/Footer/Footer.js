import "./Copy.css"

export const Footer = () =>{

    return(
        <div>
            <p className="copy" >&copy;{new Date().getFullYear()} Federico Fleurent. Todos los derechos reservados</p>
        </div>
    )
}