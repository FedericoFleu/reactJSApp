import { Cards } from "../Cards/Cards"


export const ItemList = ( {items} ) =>{

    return(
        <div>
            {
                items.map((items) => <Cards key={items.id} items={items} />)
            }
        </div>

    )
}