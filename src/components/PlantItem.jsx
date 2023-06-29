import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({id, cover, plantName, water, light }) {

  function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
  }

	return (
		<li className='lmj-plant-item' onClick={(e) => handleClick(e)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${plantName} cover`} />
			{plantName}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
