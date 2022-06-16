import "./Style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
      <CartProvider>

        <BrowserRouter>

            <Nav/>

            <Routes>
              <Route path='/' element={ <ItemListContainer/> } />
              <Route path='/categorias/:categoryId' element={ <ItemListContainer/> } />
              <Route path='/item/:itemId' element={ <ItemDetailContainer/> } /> 
              <Route path='/cart' element={ <Cart/> } /> 
              <Route path='*' element={ <Navigate to={"/"}/> } />
            </Routes>

            {/* <Footer/> */}

        </BrowserRouter>

      </CartProvider>
  );
}

export default App;
