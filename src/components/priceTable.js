import React from 'react'

const PriceTable = props => {
	return (
		<div className="table-responsive price-table">
		 	<table className="table">
				<thead>
					<tr>
						<th>Даты</th>
						<th>1-местные</th>
						<th>2-местные</th>
						<th>3-местные</th>
						<th>4-местные</th>
						<th>5-местные</th>
					</tr>
		  </thead>
		  <tbody>
			<tr>
			  <th scope="row">15.04 - 09.06</th>
				  <td>800 руб</td>
				  <td>1000 руб</td>
				  <td>1500 руб</td>
				  <td>2000 руб</td>
				  <td>2500 руб</td>
			</tr>
				<tr>
			  <th scope="row">10.06 - 30.06</th>
				  <td>1000 руб</td>
				  <td>1500 руб</td>
				  <td>2000 руб</td>
				  <td>2500 руб</td>
				  <td>3000 руб</td>
			</tr>
				<tr>
			  <th scope="row">01.07 - 31.08</th>
				  <td>1200 руб</td>
				  <td>2000 руб</td>
				  <td>2500 руб</td>
				  <td>3000 руб</td>
				  <td>3500 руб</td>
			</tr>
				<tr>
			  <th scope="row">01.09 - 30.09</th>
				  <td>1000 руб</td>
				  <td>1500 руб</td>
				  <td>2000 руб</td>
				  <td>2500 руб</td>
				  <td>3000 руб</td>
			</tr>
				<tr>
			  <th scope="row">01.10 - 30.10</th>
				  <td>800 руб</td>
				  <td>1000 руб</td>
				  <td>1500 руб</td>
				  <td>2000 руб</td>
				  <td>2500 руб</td>
			</tr>
			  
		  </tbody>
		  </table>
		</div>
	)
}

export default PriceTable