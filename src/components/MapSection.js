import React from 'react'

const Map = props => {
	return (
		<div className="section section-map">
			<div className="container">
				<div>
					<h3>Как добраться до гостинницы "Юпитер"</h3>
					<span>Адрес: г. Саки, пгт. Новофедоровка, ул. Севастопольская, д. 27</span>
				</div>
				<div className="map">
 <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4928e6ed976c3eaafa4bef9ec7b533c135c1c36ee079d168dd1e69e05e5aff98&amp;source=constructor" width="100%" height="480px" frameBorder="0"></iframe>
 				</div> 
			</div>
		</div>
	)
}


export default Map