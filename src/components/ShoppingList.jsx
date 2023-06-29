import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
// import CareScale from './CareScale'
import PlantItem from './PlantItem'
import img from '../assets/monstera.jpg'

export default function ShoppingList() {

    const categories = []
    plantList.forEach(plant => {
        if (categories.includes(plant.category)) {
            return
        }
        categories.push(plant.category)
    })

  return (		
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <PlantItem 
                    key={plant.id} 
                    id={plant.id} 
                    plantName={plant.name} 
                    cover={img} 
                    isBestSale={plant.isBestSale}
                    light={plant.light} 
                    water={plant.water}
                    />
                    // <li key={plant.id} className='lmj-plant-item'>
                    //     {plant.isBestSale && <div className='lmj-sales'>Soldes</div>}
                    //     {plant.name}
                    //     <CareScale careType='light' scaleValue={plant.light} />
                    //     <CareScale careType='water' scaleValue={plant.water} />
                    // </li>
                ))}
            </ul>
        </div>
)
}
