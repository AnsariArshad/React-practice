import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Country from './SelectDropdownTest'
import { connect } from 'react-redux';
const Restauents = (props) => {
	const {reduxCountryName}=props;

	console.log("Redux  Name",reduxCountryName);


	const [retaurantDetails,setRestaurentsDetails]=useState('');
  const getRestaurantDetails = async () => {
    try {
      const response = await axios.get(`http://103.123.45.77:9900/api/regionCode/bwd/restaurants/1`);
      console.log("RestaurantDetails========>>>>", response.data);
			setRestaurentsDetails(response.data)
		} catch (error) {
    }
  }

	useEffect(()=>{
		getRestaurantDetails();
	},[])
	return (
	<>

<Row>
	<Col md={3}>
		<div>
			<div>Account Name<span className='ml-2'>{reduxCountryName}</span></div>
			<div>{retaurantDetails.accountName}</div>
		</div>
	</Col>
	<Col md={3}>
	<div>
			<div>Account Number</div>
			<div>{retaurantDetails.accountNumber}</div>
		</div>
	</Col>
	<Col md={3}>
<Country></Country>
	</Col>

</Row>


	</>
	)
}
const mapStateToProps =state=>{
	return{
		reduxCountryName:state.countryName,

	}


}
export default connect(mapStateToProps)(Restauents)