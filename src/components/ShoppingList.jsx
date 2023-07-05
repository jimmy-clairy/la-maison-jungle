import { useState } from 'react'
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PlantItem from './PlantItem'

export default function ShoppingList({addCart}) {
    

    const [category, setCategory] = useState('')

    const resultCat = plantList.filter((plant) => {
        if (category === '') {
            return plantList
        }
        return category === plant.category
    });

  return (		
        <div className='shoppingList'>
            <Categories setCategory={setCategory}/>
            <ul className='plantList'>
                {resultCat.map((plant) => (
                    <div key={plant.id}>
                        <PlantItem plant={plant} addCart={addCart} />
                        
                    </div>
                ))}
            </ul>
        </div>
    )
}
