import React, { Component } from 'react';
//import './jquery.creditCardValidator.js';
//import './scripts.js';
//import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

class Form extends Component {
	constructor(props) {
		super(props);
		this.changeValue = this.changeValue.bind(this);
		this.state = {
			optionSelected: false,
			cardNumber: '',
			cardHolder: '',
			month: '',
			year: '',
			csc: '',
			monthOptions: [
			{
			  name: 'MM',
			  value: null,
			  isDisabled: true,
			  selected: true,
			},
			{
			  name: '01',
			  value: '01',
			},
			{
			  name: '02',
			  value: '02',
			},
			{
			  name: '03',
			  value: '03',
			},
			{
			  name: '04',
			  value: '04',
			},
			{
			  name: '05',
			  value: '05',
			},
			{
			  name: '06',
			  value: '06',
			},
			{
			  name: '07',
			  value: '07',
			},
			{
			  name: '08',
			  value: '08',
			},
			{
			  name: '09',
			  value: '09',
			},
			{
			  name: '10',
			  value: '10',
			},
			{
			  name: '11',
			  value: '11',
			},
			{
			  name: '12',
			  value: '12',
			},
			],
			yearOptions: [
			{
			  name: 'YY',
			  value: null,
			  isDisabled: true,
			  selected: true,
			},
			{
			  name: '17',
			  value: '17',
			},
			{
			  name: '18',
			  value: '18',
			},
			{
			  name: '19',
			  value: '19',
			},
			],
		};
	}
	


	// optionSelected = event => {
	// 	this.setState({optionSelected: true});
	// 	console.log(this.state.optionSelected);
	// }


	changeValue(evt){
		let inputfield = '';
	    console.log([evt.target.name] + ': ' + evt.target.value);
	    this.setState={[evt.target.name]: evt.target.value};
	    return inputfield;
	}

	render() {
		const createOptions = (item, key) =>
			<option key={key} value={item.value} selected={item.selected}  disabled={item.isDisabled}> {item.name} </option>;
	  	return (
		    <form>
				<div className='credit-card'>
					<InputMask className='security-number'  mask='9999  9999  9999 9999 999' name='cardNumber' id='credit-card-input' placeholder='Credit Card Number' maskChar=''  onChange={this.changeValue}  autoFocus/>
					<span></span>
				</div>
				<InputMask name='cardHolder' id='name-input'  placeholder='Name on Credit Card' formatChars='a' onChange={this.changeValue} />
				<div className='row'>
					<div className='col-xs-4'>
						<select onChange={this.changeValue} id='month' name='month'>
							{this.state.monthOptions.map(createOptions)}
						</select>
					</div>
					<div className='col-xs-4'>
						<select onChange={this.changeValue} id='year' name='year'>
							{this.state.yearOptions.map(createOptions)}
						</select>
					</div>
					<div className='col-xs-4'>
						<InputMask className='security-number'  mask='999' placeholder='CSC' onChange={this.changeValue}  maskChar='' name='csc'/>
					</div>
				</div>
				<button className='submit' type='submit' disabled><i className='fa fa-check'></i> Pay Now</button>
			</form>
	  	);
	};
};

export default Form;