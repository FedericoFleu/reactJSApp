import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (

    <div className='app'>

      <Nav/>

      <ItemListContainer/>

    </div>
    
  );
}

export default App;
