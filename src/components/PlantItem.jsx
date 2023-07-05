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
						{plant.name}
						<br/>
						{plant.category}
					</div>
					<div>
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</div>
				</div>
				<button className='plantItem__btn' onClick={() => { addCart({name:plant.name,price:plant.price,id:plant.id})}}>Ajouter</button>
			</div>

		</li>
	)
}

export default PlantItem
