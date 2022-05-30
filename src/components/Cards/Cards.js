import "./Cards.scss"
// import { ItemCount } from "../ItemCount/ItemCount"

export const Cards = ({items}) =>{

    return (

        <div className="cards">

            <h2 className="tituloCards">{items.nombre}</h2>

            <img className="imgCards" alt="img Productos" src={items.img} />

            <strong>{items.precio}</strong>

            {/* <div>
                <ItemCount/>
            </div> */}
            <hr/>
        </div>

    )
}