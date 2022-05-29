import "./NavBar.scss"
import { FiShoppingCart } from 'react-icons/fi';


export const Navegacion = () => {

    return (
        <section className="navBarCointainer ">

            <a  href="index.html" target="_blank" rel="noreferrer" className="navBarLogo"><h1 >Tienda</h1></a>

            <ul className="navLinks">

                <a className="navLink" href="https://www.riiing.com.ar/categoria-producto/celulares/" target="_blank" rel="noreferrer"><li>Celulares</li></a>

                <a className="navLink" href="https://www.riiing.com.ar/categoria-producto/audio-auriculares/" target="_blank" rel="noreferrer"><li>Accesorios</li></a>
                
                <a className="navLink" href="https://www.riiing.com.ar/categoria-producto/riiing/" target="_blank" rel="noreferrer"><li>Parlantes</li></a>
            </ul>

            <FiShoppingCart/>
       
   </section>
    )
}