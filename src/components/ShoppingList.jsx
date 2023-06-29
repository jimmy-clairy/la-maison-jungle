import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'

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
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        {plant.name}
                    </li>
                ))}
            </ul>
        </div>
)
}
