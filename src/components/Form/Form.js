import React, { Component } from 'react';
import SecurityNumber from './SecurityNumber/SecurityNumber';
import Select from './Select/Select';
import CardHolder from './CardHolder/CardHolder';
import CardNumber from './CardNumber/CardNumber';
import { monthOptions, yearOptions } from '../../constants';

class Form extends Component {

	constructor(props) {
	    super(props);
	    this.onSubmit = this.handleSubmit.bind(this);
	    this.state = { 
	    	disabledSubmit: true,
			validCard: false,
			disabled: true, 
			validName: false,
			CardNumber: '',
			holderName: '',
			month: '',
			year: '',
			cscNumber: '',
			cscValid: false
	    };
	}


  	onChangeValue = param => {
  		this.setState( param );
  		console.log(param)
  	};


	handleSubmit(event) {
		event.preventDefault();

		let formContent = {
			validCard: this.state.validCard,
			holderName: this.state.holderName,
			month: this.state.month,
			year: this.state.year,
			cscNumber: this.state.cscNumber
		};

		console.log(formContent);

		alert('Hi, ' + this.state.holderName + '! Your credit card is valid until ' + this.state.month + '/' + this.state.year +'. Good shopping!'
		);
	}

	render() {
		var validCard = this.state.validCard 
		var validName = validCard && this.state.validName
		var validMonth = validName && this.state.month 
		var validYear = validMonth && this.state.year
		var cscValid = validYear && this.state.cscValid
		var disabled = !cscValid
	  	return (
		    <form onSubmit={this.onSubmit}>
				<CardNumber 
               handleValue={this.onChangeValue}
					inputName='validCard' 
					autoFocus={!validCard}
            />
				<CardHolder
               handleValue={this.onChangeValue}
					inputName='holderName' 
					disabled={!validCard}
					autoFocus={!validCard}
            />
				<div className='row'>
					<div className="col-xs-7">
						<div className='row'>
							<Select 
			               handleValue={this.onChangeValue} 
								inputName='month' 
								disabledOption='MM' 
								options={monthOptions}
								disabled={!validName}
			            />
							<Select 
			               handleValue={this.onChangeValue} 
								inputName='year' 
								disabledOption='YY' 
								options={yearOptions}
								disabled={!validMonth}
							/>
						</div>
					</div>
					<SecurityNumber 
	               handleValue={this.onChangeValue}
						inputName='cscNumber'
						disabled={!validYear} 
					/>
				</div>
				<button 
					disabled={disabled}
					className='submit' 
					type='submit'  
					onClick={this.state.handleSubmit} 
				>
					<i className='fa fa-check'></i> Pay Now
				</button>
			</form>
	  	);
	};
};

export default Form;