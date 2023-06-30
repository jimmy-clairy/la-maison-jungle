import { useState } from 'react'
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PlantItem from './PlantItem'

export default function ShoppingList({cart,setCart}) {

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
                {resultCat.map(({ id, cover, name, water, light, price, category }) => (
                    <div key={id}>
                        <PlantItem cover={cover} plantName={name} water={water} light={light} price={price} category={category} />
                        <button onClick={() => console.log("Add " + name)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
