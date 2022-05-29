import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import { Navegacion } from "./components/NavBar/NavBar"
import {ItemCount} from "./components/ItemCount/ItemCount"
import s20Fe from "./assets/img/s20Fe.jpg"
import s21Ultra from "./assets/img/S21Ultra.jpg"

function App() {

  const product = {
    img: s21Ultra,
    nombre: "Samsung Galaxy S22 Ultra",
    precio: "$ 254.999",
    cant: 3,
    stock: true,
    initial: 1
  };

  const product2 = {
    img: s20Fe,
    nombre: "Samsung Galaxy S20 FE  128 GB Azul",
    precio: "$ 102.999",
    cant: 0,
    stock: false,
    initial: 0
  }

  return (

    <div className='app'>

      <Navegacion/>

      <ItemCount nombre={product.nombre} img={product.img} precio={product.precio} />
      <ItemCount nombre={product2.nombre} img={product2.img} precio={product2.precio}/>


    </div>
    
  );
}

export default App;
