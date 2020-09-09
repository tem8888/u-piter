import React from 'react'

const ReviewSection = props => {
	return (
		<div className="section section-review">
			<div className="container">
				<div>
					<h3>Ваш отзыв</h3>
				</div>
				<div className="vk-widgets">
					<div id="vk_comments"></div>
					<span className="uppercase">Вступайте в нашу группу ВК и следите за новостями!</span>
					<div id="vk_groups"></div>
				</div>
			</div>
		</div>
	)
}

export default ReviewSection