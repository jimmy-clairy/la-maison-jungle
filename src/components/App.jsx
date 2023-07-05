import Header from './Header';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState } from 'react';
import '../styles/Main.css'

export default function App() {
  
  const [cart, setCart] = useState([])

  /**
   * Ajoute un objet au panier.
   * @param {Object} obj - L'objet à ajouter au panier.
   * @param {string} obj.id - L'ID de l'objet.
   */
  function addCart(obj) {
    const newCart = [...cart];
    const foundObjet = cart.find((c) => c.id === obj.id);

    if (foundObjet === undefined) {
      const newObjet = { ...obj, amount: 1 };
      newCart.push(newObjet);
    } else {
      foundObjet.amount++;
    }
    setCart(newCart);
  }

  return (<>
      <Header/>
      <main className='main'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList addCart={addCart}  />
      </main>
      <Footer/>
  </>)
}