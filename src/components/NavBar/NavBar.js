import "./NavBar.scss"
import { FiShoppingCart } from 'react-icons/fi';


export const Navegacion =  () => { 
     
    return  (
        <section className="navBarCointainer ">

             <h1 className="navBarLogo">Ecommerse</h1>

            <ul className="navLinks">

                <a className="navLink" href="https://www.whatsapp.com/" target="_blank" rel="noreferrer"><li>Accesorios</li></a>

                <a className="navLink" href="https://www.instragram.com/" target="_blank" rel="noreferrer"><li>Parlantes</li></a>
                
                <a className="navLink" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><li>Tablets</li></a>
            </ul>

            <FiShoppingCart/>
            
        </section>
    )
}