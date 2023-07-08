import { useState } from 'react'
import { plantList } from '../data/plantList'
import Categories from './Categories'
import PlantItem from './PlantItem'

export default function ShoppingList({cart,setCart, setModal}) {
    
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
                <PlantItem key={plant.id} plant={plant} cart={cart} setCart={setCart} setModal={setModal}/>
                ))}
            </ul>
        </div>
    )
}
