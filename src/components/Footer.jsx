import { useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		console.log(inputValue);
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`)
		}
	}
	
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<form  >
				<input type="email" name="name" id="name" onBlur={handleBlur} onChange={(e)=> setInputValue(e.target.value)} value={inputValue} placeholder='Entrez votre mail'/>
				<button type='submit' onClick={(e) => handleSubmit(e)}>Envoyer</button>
			</form>
		</footer>
	)
}