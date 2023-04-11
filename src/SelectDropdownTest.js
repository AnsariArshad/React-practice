import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux';
import * as actionTypes from "./components/store/actions";
const SelectDropdownTest = (props) => {
	// const {reduxCountryName}=props;
	// console.log("Redux country Name",reduxCountryName);
	const [country,setcountry]=useState('');

	const [countryStateValue,setCountryStateValue]=useState('');
	const [stateCity,setStateCity]=useState('');
	const [stateCityValue,setStateCityValue]=useState('');
	const[city,setCity]=useState('')
	const [commantext,setCommanText]=useState('')
const [fruits,setFruits]=useState([]);

	const countryOption = [
		{ value: "INDIA", label: "India" },
		{ value: "PAKISTAN", label: "Pakistan" }
	]
	const indiaStateOption = [
		{ value: "BIHAR", label: "Bihar" },
		{ value: "MAHARASHTRA", label: "Maharashtra" }
	]
	const pakistanStateOption = [
		{ value: "KARACHI", label: "Karachi" },
		{ value: "LAHORE", label: "Lahore" }
	]
	const BiharCityOption = [
		{ value: "PATNA", label: "Patna" },
		{ value: "GAYA", label: "Gaya" }
	]
	const MahaCityOption = [
		{ value: "MUMBAI", label: "Mumbai" },
		{ value: "PUNE", label: "Pune" }
	]
	const KarachiCityOption = [
		{ value: "MULTAN", label: "Multan" },
		{ value: "SAHIWAL", label: "Sahiwal" }
	]
	const LahoreCityOption = [
		{ value: "SIALKOT", label: "Sialkot" },
		{ value: "KASUR", label: "Kasur" }
	]
	
	const selectCountry =(val)=>{
		console.log("select country change",val.value);
		setCountryStateValue('')
		setStateCityValue('')
		setcountry(val.value);
		setCommanText(val.value);
		props.onChangeActiveSelect(val.value)
		// localStorage.setItem('country name value',val.value);

	}
	// console.log("select country",country);
	//  console.log("get country",localStorage.getItem('country name value'));

	const selectState =(val)=>{
		setStateCityValue('')
		console.log("select state",val.value);
		setCountryStateValue(val)
		setStateCity(val.value)
		setCommanText(val.value);
	}
	console.log("select state",stateCity);
	const selectCity=(val)=>{
		setStateCityValue(val)
		console.log("select city",val.value);
		setCity(val.value)
		setCommanText(val.value);
	}



	const fruitsOption = [
		{ value: "BANANA", label: "Bananas" },
		{ value: "ORANGES", label: "Oranges" },
		{ value: "DRAGON", label: "Dragon" },
		{ value: "MANGO", label: "Mango" },
		{ value: "AVOCADO", label: "Avocado" },
		{ value: "LYCHEE", label: "Lychee" },
		{ value: "OLIVE", label: "Olive" },
		{ value: "PINEAPPLE", label: "Pineapple" },
		{ value: "KIWI", label: "Kiwi" }
	]


	let fruitsArray = [];
	const selectFruits = (val) => {
		console.log("select fruits", val);
		 val.map((f) => {
			fruitsArray.push(f.value)
		});
		setFruits(fruitsArray);
	}
	console.log("fruits array",fruits);

	const addFruits =()=>{
		console.log("fruits data ",fruits);
		// setFruits('');
	}
	return (
		<>
	<div><span>Country:{country}</span><span>State:{stateCity}</span><span>City:{city}</span> <span>Comman Text:{commantext}</span></div>
	
		<div className="row">
			<div className="col-md-6">
				<label htmlFor="country">Select Country </label>
				<Select options={countryOption}
				onChange={selectCountry}
				loadOption={selectCountry}
				>
				</Select>
			</div>
			<div className="col-md-6">
				<label htmlFor="countryState">Select State </label>
				<Select options={country === "INDIA" ? indiaStateOption : pakistanStateOption}
				onChange={selectState}
				loadOption={selectState}
				value={countryStateValue}
				>
				</Select>
			</div>
			<div className="col-md-6">
				<label htmlFor="stateCity">Select City </label>
				<Select options={stateCity === "BIHAR" ? BiharCityOption :stateCity === "MAHARASHTRA" ? MahaCityOption:stateCity === "KARACHI" ? KarachiCityOption:stateCity === "LAHORE" ? LahoreCityOption:''}
				onChange={selectCity}
				loadOption={selectCity}
				value={stateCityValue}
				>
				</Select>
			</div>
			<div className="col-md-6">
					<label htmlFor="stateCity">Select Fruits </label>
					<Select options={fruitsOption}
						onChange={selectFruits}
						loadOption={selectFruits}
						isMulti
					>
					</Select>
				</div>
				<div className="col-md-4">

				<Button onClick={addFruits}>Show</Button>
				</div>
		</div>
	</>
	)
}

const mapDispatchToProps=dispatch=>{
	return{
		onChangeActiveSelect:(name)=>dispatch({type:actionTypes.COUNTRY_NAME,payload:name})
	}
}
export default connect(null,mapDispatchToProps)(SelectDropdownTest)