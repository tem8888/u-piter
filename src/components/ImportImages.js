import React from 'react'
const pathToImages = require.context('../images/img',true, /\.(png|jpe?g|svg|gif)$/);

const ImportImages = () => {

	function importAll(r) {
		let images={}
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		return images	
	}
	const images = importAll(pathToImages);

	return (
		{images}
	) 
}


export default ImportImages