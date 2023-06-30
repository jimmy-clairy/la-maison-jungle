import Header from './Header';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState } from 'react';
import '../styles/Main.css'

export default function App() {
  
  const [cart, setCart] = useState([])
  
  return (<>
      <Header/>
      <main className='main'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </main>
      <Footer/>
  </>)
}