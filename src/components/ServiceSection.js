import React from 'react'
import Slider from './Slider.js'
import PriceTable from './priceTable'
const pathToSliderPortraitImages = require.context('../images/slider/portrait',true, /\.(png|jpe?g)$/);
const pathToSliderAlbum1Images = require.context('../images/slider/album-1',true, /\.(png|jpe?g)$/);
const pathToSliderAlbum2Images = require.context('../images/slider/album-2',true, /\.(png|jpe?g)$/);

const SliderPortraitImages = pathToSliderPortraitImages.keys().map(pathToSliderPortraitImages);
const SliderAlbum1Images = pathToSliderAlbum1Images.keys().map(pathToSliderAlbum1Images);
const SliderAlbum2Images = pathToSliderAlbum2Images.keys().map(pathToSliderAlbum2Images);

const ServiceSection = () => {

	return (
		<div className="section section-service">
			<div className="container">
				<div>
					<h3>Сервис и номера</h3>
				</div>
				<div className="row service-list">
					<div className="service-item">
						<div className="city"></div>
						<div className="title">Город-курорт Саки</div>
					</div>
					<div className="service-item">
						<div className="rooms"></div>
						<div className="title">Уютные комнаты</div>
					</div>
					<div className="service-item">
						<div className="price"></div>
						<div className="title">Цены от <b>800</b> рублей</div>
					</div>
					<div className="service-item">
						<div className="commfort"></div>
						<div className="title">Комфорт</div>
					</div>
					<div className="service-item">
						<div className="child"></div>
						<div className="title">Скидки детям</div>
					</div>
					<div className="service-item">
						<div className="love"></div>
						<div className="title">Все делаем с любовью</div>
					</div>
				</div>
				<div className="container">
				<div className="row sliders">
					
						<div className="slider-album">
							<Slider items={SliderAlbum1Images} />
							<Slider items={SliderAlbum2Images} />
						</div>
						<div className="slider-portrait">
							<Slider items={SliderPortraitImages} />
						</div>
					</div>
				</div>
				<PriceTable />
				<div>Цены действительны при проживании более суток.</div>
			</div>
			</div>
	)
}

export default ServiceSection