import "./NavBar.scss"
import { FiShoppingCart } from 'react-icons/fi';



export const Nav = () => {

    return (  
            <section className="header">

                <h1 className="navLogo">Tienda Logo</h1>

                    <div>
                        <ul className="navBar">

                            <li><a href="www.yotube.com.ar">Celulares</a></li>

                            <li><a href="www.yotube.com.ar">Accesorios</a></li>

                            <li><a href="www.yotube.com.ar">Parlantes</a></li>

                            <li><a href="www.yotube.com.ar">Smartwatch</a></li>

                            <FiShoppingCart/>
                        </ul>
                    </div>


            

            </section>



            
       
    
    )
}