import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/style.css"
import { Nav } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import { Footer } from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)
 
  const addItem = (item)=>{
    setCart( [...cart,item] )
  }

  const isInCart = (id) =>{
    return cart.some((prod) => prod.id === id)
  }

  const totalPrice = () =>{
    return cart.reduce( (acc, prod) => acc += (prod.precio * prod.cantidad), 0)
  }

  return (

    <CartContext.Provider value={ {cart, addItem, isInCart, totalPrice} }>

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

    </CartContext.Provider>
  );
}

export default App;
