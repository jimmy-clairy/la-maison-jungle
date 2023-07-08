import { useState,useEffect } from 'react';
import Header from './Header';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import ModalInfo from './ModalInfo';

export default function App() {

  const localCart = localStorage.getItem('localCart')
  const [cart, setCart] = useState(localCart ? JSON.parse(localCart) : [])

  const [modal,setModal] = useState({position:false})
  useEffect(() => {
		localStorage.setItem('localCart', JSON.stringify(cart))	
	}, [cart])
  
  console.log(modal);
  return (<>
      <Header/>
      <main className='main'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} setModal={setModal}/>
      </main>
      <Footer/>
      {modal.position && <ModalInfo modal={modal} setModal={setModal}/>}
  </>)
}