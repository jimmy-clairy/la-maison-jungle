import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({cover, plantName, water, light, price,category }) {

  function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
  }

	return (
		<li className='plantItem' onClick={(e) => handleClick(e)}>
			<span className='plantItem__price'>{price}€</span>
			<img className='plantItem__cover' src={cover} alt={`${plantName} cover`} />
			{plantName}
			<br/>
			{category}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
