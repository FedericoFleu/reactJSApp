import "./NavBar.css"
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";



export const Nav = () => {

    return (  
            <header className="header">

                <Link className="navLogo" to={"/"}><h1 >Tienda Logo</h1></Link>
                
                    <nav className="navLinks">
                        <Link className="navLink" to={"/categorias/celulares"}>Celulares</Link>
                        <Link className="navLink" to={"/categorias/accesorios"}>Accesorios</Link>
                        <Link className="navLink" to={"/categorias/auriculares"}>Auriculares</Link>
                        
                        <CartWidget/>
                    </nav>
                        
                         
            </header>

    )

}