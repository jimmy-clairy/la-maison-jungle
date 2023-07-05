import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ plant, addCart }) {

	return (
		<li className='plantItem'>
			<span className='plantItem__price'>{plant.price}€</span>
			<img className='plantItem__cover' src={plant.cover} alt={`${plant.name} cover`} />
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
				<button className='btn__style' onClick={() => { addCart({name:plant.name,price:plant.price,id:plant.id})}}>Ajouter</button>
			</div>
		</li>
	)
}

export default PlantItem
