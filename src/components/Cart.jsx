import { useState } from "react"
import "../styles/Cart.css"

export default function Cart({cart, setCart}) {
  
  const [isOpen,setIsOpen] = useState(true)

  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	return isOpen ? (
		<div className='cart cart--open'>
			<button
				className='cart__btn'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className="cart__ul">
						{cart.map(({ name, price, amount }, index) => (
							<li className="cart__li" key={`${name}-${index}`}>
								{amount} {name} {price}€ = {amount*price}€
							</li>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => setCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='cart cart--closed'>
			<button
				className='cart__btn'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}