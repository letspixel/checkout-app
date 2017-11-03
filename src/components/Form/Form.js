import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SecurityNumber from './SecurityNumber/SecurityNumber';
import Select from './Select/Select';
import CardHolder from './CardHolder/CardHolder';
import CardNumber from './CardNumber/CardNumber';

class Form extends Component {

	static propTypes = {
		numberValid: PropTypes.func,
	};

	constructor(props) {
		super(props);
		this.state = {
			numberValid: false,
			nameValid: false,
			monthValid: false,
			yearValid: false,
			cscValid: false,
		};
	}

	render() {
	  	return (
		    <form>
				<CardNumber />
				<CardHolder />
				<div className='row'>
					<Select disabledOption='MM' name='month' options={['01','02']}/>
					<Select disabledOption='YY' name='year' options={['17','18','19','20']}/>
					<SecurityNumber />
				</div>
				<button className='submit' type='submit' disabled>
					<i className='fa fa-check'></i> Pay Now
				</button>
			</form>
	  	);
	};
};

export default Form;