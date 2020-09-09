import React from 'react'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServiceSection'
import MapSection from './components/MapSection'
import BookingSection from './components/BookingSection'
import ReviewSection from './components/ReviewSection'
import Footer from './components/Footer'
import PageHeader from './components/PageHeader'
import NavigationBar from './components/NavigationBar'
import images from './components/ImportImages'

function App() {
	const img = images()

	return (
		<> 
			<NavigationBar />
			<PageHeader img={img}/>
			<AboutSection img={img}/>
			<ServiceSection />
			<MapSection />
			<BookingSection />
			<ReviewSection />
			<Footer />
		</>
			
	)
}

export default App