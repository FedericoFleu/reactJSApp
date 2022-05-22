import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navegacion } from "./components/NavBar/NavBar"
import { Nosotros } from "./components/Nosotros/Nosotros"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {

  const profe = {
    nombre: "Federico Fleurent",
    rol: "Profe de JS"
  }


  return (

    <div>
      <Navegacion/>

      <Nosotros/>

      <ItemListContainer nombre={profe.nombre} /> 

  
    </div>
    
  );
}

export default App;
