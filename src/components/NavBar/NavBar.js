import "./NavBar.scss"
import { FiShoppingCart } from 'react-icons/fi';


export const Navegacion =  () => { 
     
    return  (

        <div className="navBarCointainer">

             <h1 className="navBarLogo">Federico Fleurent</h1>

            <ul className="navLinks">

                <li>Home </li>

                <li>Categoria 1 </li>

                <li>Categortia 2</li>

                <li>Categortia 3</li>
            </ul>
            <FiShoppingCart/>
        </div>
    )
}