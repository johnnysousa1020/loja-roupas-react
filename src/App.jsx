import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(function () {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(function () {
    localStorage.setItem("cartItems",
      JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <BrowserRouter>
      <Header cartItems={cartItems}/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/produto/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='/carrinho' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
