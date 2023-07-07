import CareScale from './CareScale'
import '../styles/PlantItem.css'

export default function PlantItem({ plant, cart, setCart }) {

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

	return (
		<li className='plantItem'>
			<span className='plantItem__price'>{plant.price}€</span>
			<img className='plantItem__cover' src={plant.cover} alt={`${plant.name} cover`} width={250} height={250}/>
			<div className='plantItem__body'>
				<div className='plantItem__content'>
					<div>
						<h3 className='plantItem__txt'>{plant.name}</h3>
						<p className='plantItem__txt'>{plant.category}</p>
					</div>
					<div>
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</div>
				</div>
				<button className='btn__style' onClick={() => { addCart({name:plant.name, price:plant.price, id:plant.id})}}>Ajouter</button>
			</div>
		</li>
	)
}