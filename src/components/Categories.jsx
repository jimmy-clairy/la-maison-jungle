import { plantList } from '../data/plantList'
import '../styles/Categories.css'

export default function Categories({setCategory}) {

    const categories = []
    plantList.forEach(plant => {
        if (categories.includes(plant.category)) {
            return
        }
        categories.push(plant.category)
    })

  return (
            <div className='categories'>
                    <select className='categories__select capitalize' onChange={(e) => setCategory(e.target.value)} name="plants" id="plant--select">

                        <option value="">Toutes les plantes</option>
                        {categories.map((category, index) => <option  key={index} value={category}>{category}</option>)}
                        
                    </select>
                    <button className='btn__style' onClick={() => setCategory('')}>Reinitialisé</button>
            </div>
  )
}
