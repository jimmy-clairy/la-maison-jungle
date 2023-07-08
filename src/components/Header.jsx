import logo from '../assets/logo.png'

export default function Header() {
	const title = 'La maison jungle'
	return (<header className='header'>
				<img src={logo} alt='La maison jungle' className='header__logo' />
				<h1 className='header__title'>{title}</h1>
			</header>
)}