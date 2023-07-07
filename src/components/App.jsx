import Header from './Header';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import '../styles/Main.css'

export default function App() {

  const localCart = localStorage.getItem('localCart')
  const [cart, setCart] = useState(localCart ? JSON.parse(localCart) : [])

  useEffect(() => {
		localStorage.setItem('localCart', JSON.stringify(cart))	
	}, [cart])
  

  return (<>
      <Header/>
      <main className='main'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart}  />
      </main>
      <Footer/>
  </>)
}