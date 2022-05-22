
import { Button } from "react-bootstrap"

export const ItemListContainer = ( {nombre} ) => {
    
    return (
        <section>
            <h2>Productos</h2>
            
            <p>Bienvenido {nombre}</p>

            <Button variant="dark">Haz click </Button>{' '}
        </section>
    )

}