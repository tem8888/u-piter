import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'

const NavigationBar = (props) => {

	const [isScrolled, setScrolled] = useState(false)
	const [isToggled, setToggled] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, {passive: true}) })

		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY >100) 
				setScrolled(true)
			else
				setScrolled(false) 
			}

			const handleClick = () => {
				if (isToggled)
					document.body.classList.remove('nav-open');
				else
					document.body.classList.add('nav-open');
				setToggled(!isToggled)
			}

	return (
		<nav className={isScrolled ? "fixed-top navbar navbar-expand-lg" :
							"fixed-top navbar-transparent navbar navbar-expand-lg"}>
			<div className="container">
				<div className={isScrolled ? "navbar-toggler-container toggler-color" : 
									"navbar-toggler-container"}>
					<button className={isToggled ? "navbar-toggler navbar-toggler toggled" : 
											"navbar-toggler navbar-toggler"} 
									onClick={handleClick} aria-expanded={isToggled ? "false" : "true"}>
						<span className="navbar-toggler-bar bar1"></span>
						<span className="navbar-toggler-bar bar2"></span>
						<span className="navbar-toggler-bar bar3"></span>
					</button>
				</div>
				<div className={isToggled ? "justify-content-end collapse navbar-collapse show" :
								 "justify-content-end collapse navbar-collapse"}>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="section-about" className="nav-link" offset={-60} smooth={true}>О нас</Link>
						</li>
						<li className="nav-item">
							<Link to="section-service" className="nav-link" offset={-60} smooth={true}>Сервис и номера</Link>
						</li>
						<li className="nav-item">
							<Link to="section-map" className="nav-link" offset={-60} smooth={true}>Как добраться</Link>
						</li>
						<li className="nav-item">
							<Link to="section-booking" className="nav-link" offset={-60} smooth={true}>Забронировать</Link>
						</li>
						<li className="nav-item">
							<Link to="section-review" className="nav-link" offset={-60} smooth={true}>Ваш отзыв</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavigationBar