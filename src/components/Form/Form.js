import React, { Component } from 'react';
//import classnames from 'classnames';
//import PropTypes from 'prop-types';
import SecurityNumber from './SecurityNumber/SecurityNumber';
import Select from './Select/Select';
import CardHolder from './CardHolder/CardHolder';
import CardNumber from './CardNumber/CardNumber';
import { FTP } from '../../constants';

class Form extends Component {

	constructor(props) {
	    super(props);
	    this.onSubmit = this.handleSubmit.bind(this);
	    this.state = { 
	    	enableSubmit: true,
		   curTime : new Date().toLocaleString(), 
	    };
	}

	handleSubmit(e) {
		e.preventDefault();

		let reqBody = {
			curTime: this.state.curTime,
			cardNumber: this.state.cardNumber,
		  	cardHolder: this.state.cardHolder,
		  	month: this.state.month,
		  	year: this.state.year,
		  	securityNumber: this.state.securityNumber,
		};

		console.log(reqBody);

		let self = this;

		if (reqBody.cardNumber !== '' && reqBody.cardHolder !== '' &&
		  	reqBody.year !== '' && reqBody.month !== ''  && reqBody.securityNumber !== '') {
		  	fetch(FTP, {
		      	method: 'POST',
		      	body: JSON.stringify(reqBody)
		    }).then(function(response) {
		      console.log(response);
		      if (response.ok) {
		        self.setState({
		          // submitted: true,
		          // cardNumber: '',
		          // cardHolder: '',
		          // month: '',
		          // year: '',
		          // securityNumber: '',
		        })
		      } else {
		        self.setState({submitted: false})
		      }
		    }).then(function(body) {});
		} else {
		  this.setState({
		    enableSubmit: true,
		    submitted: false
		  })
		}
	}

	render() {
	  	return (
		    <form onSubmit={this.onSubmit}>
				<CardNumber />
				<CardHolder />
				<div className='row'>
					<Select disabledOption='MM' name='month' options={['01','02','03','04','05','06','07','08','09','10','11','12']}/>
					<Select disabledOption='YY' name='year' options={['17','18','19','20','21','22','23','24','25']}/>
					<SecurityNumber />
				</div>
				<button className='submit' type='submit' 
					//disabled={this.state.enableSubmit} 
					onClick={this.state.handleSubmit} 
				>
					<i className='fa fa-check'></i> Pay Now
				</button>
			</form>
	  	);
	};
};

export default Form;