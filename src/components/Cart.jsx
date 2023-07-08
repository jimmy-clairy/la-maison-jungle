import { useState, useEffect } from "react"

export default function Cart({cart, setCart}) {
  
  	const [isOpen,setIsOpen] = useState(true)

  /** Calcule le total du panier */
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
		localStorage.setItem('localCart', JSON.stringify(cart))	
	}, [total,cart])

	function removeItem(id) {
		const newCart = cart.filter(c => c.id !== id)
		setCart(newCart)
	}

	return isOpen ? (
		<div className='cart cart--open'>
			<button
				className='cart__btn'
				onClick={() => setIsOpen(false)}
			>
				Fermer le Panier
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className="cart__ul">
						{cart.map(({ name, price, amount, id }, index) => (
							<li className="cart__li" key={`${name}-${index}`}>
								{amount} <span className="capitalize">{name}</span> {price}€ = {amount*price}€ <button className="btn__style style1" onClick={() => removeItem(id)}>X</button>
							</li>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button className="btn__style" onClick={() => setCart([])}>Vider le panier</button>
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