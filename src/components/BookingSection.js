import React, {useState} from 'react'
import emailjs from 'emailjs-com'

const BookingSection = props => {

	const [isAlertOpen, setAlertOpen] = useState(false)

	const sendEmail = (e) => {
		event.preventDefault()
		const serviceId = "service_ylhqb77"
		const templateId = "template_36t6ngl"
		const userId = "user_Ochxa5zrTOuqYSqI3ak3Q"

		emailjs.sendForm(serviceId, templateId,	e.target, userId).then(res => {
			document.getElementById("alertsend").classList.add('success-open')
		}).catch(err => document.getElementById("alertsend").classList.add('error-open'))

	}

  	const closeSuccess = (e) => {
  		e.preventDefault()
  		document.getElementById("alertsend").classList.remove('success-open');	}
  	const closeError = (e) => {
  		e.preventDefault()
  		document.getElementById("alertsend").classList.remove('error-open');	}

	return (
		<div className="section section-booking">
			<div className="container">
				<div>
					<h3>Запрос на бронирование</h3>
					<span className="uppercase">Оставьте заявку на бронирование и оператор перезвонит вам в течение 10 минут</span>
				</div>
				<div className="form-container">
					<form onSubmit={sendEmail}>
					  <div className="form-group row">
					    <label htmlFor="inputDateIn">Дата въезда</label>
					    <input type="date" name="datein" className="form-control" id="inputDateIn" required />
					  </div>
					  <div className="form-group row">
					    <label htmlFor="inputDateOut">Дата выезда</label>
					    <input type="date" name="dateout" className="form-control" id="inputDateOut" required/>
					  </div>
					  <div className="form-group row">
					  	<label htmlFor="inputName">Ваше имя</label>
					    <input type="text" name="name" className="form-control" id="inputName" required/>
					  </div>
					  <div className="form-group row">
					  	<label htmlFor="inputPhonenumber">Ваш телефон</label>
					    <input type="text" name="phonenumber" className="form-control" id="inputPhonenumber" required/>
					  </div>
					  <input type="submit" value="ОСТАВИТЬ ЗАЯВКУ" className="btn btn-primary"/>
					</form>
				</div>
				<div id="alertsend" className="alert-send">
					<div className="success">
						<p>Ваша заявка отправлена.</p>
				        <p>В скором времени Вам перезвонит наш оператор.</p>
				        <button className="btn btn-success" onClick={closeSuccess}>ВЕРНУТЬСЯ К САЙТУ</button>
					</div>
					<div className="error">
						<p>Произошла ошибка.</p>
				        <p>Свяжитесь с оператором +7 (978) 775-70-60</p>
				        <button className="btn btn-warning" onClick={closeError}>ВЕРНУТЬСЯ К САЙТУ</button>
					</div>
		      </div>
			</div>
		</div>
	)
}


export default BookingSection