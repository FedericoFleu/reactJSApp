import "./Nosotros.scss"

export const Nosotros = ( {titulo = `Titulo por defecto`,content = `parrafo por defecto perrri`} ) =>{ 

    return (
            <div>

                <h2>{titulo}</h2>

                <p>{content}</p>

            </div>
    )

}