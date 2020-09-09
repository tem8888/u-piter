import React from 'react'
import {Link} from 'react-scroll'

const PageHeader = ({img}) => {

	return (
		<div className="page-header">
			<div className="container">
			<div className="logo-phone">
					<div className="logo">
						<img src={img.images['logo.png'].default} alt="logo" />
					</div>
					<div className="phone">
						<span>+7 (978) 775-70-60</span>
						<span className="phone-app"><img src={img.images['viber.png'].default} alt="viber"/></span>
						<span className="phone-app"><img src={img.images['watsapp.png'].default} alt="watsapp"/></span>
					</div>
					</div>
			</div>
			<div className="content-center">
				<div className="container">
					<div className="hotel-title">
						<h1>Гостиница "Юпитер"</h1>
						<h2>Отдых в Новофёдоровке, Крым</h2>
						<h4>Мы предлагаем вам отдохнуть на прекрасном песчаном берегу Черного моря (западное побережье).</h4>
						<Link to="section-about" className="more-btn" offset={-60} smooth={true}>Подробнее</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageHeader