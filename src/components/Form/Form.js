import React, { Component } from 'react';
import SecurityNumber from './SecurityNumber/SecurityNumber';
import Select from './Select/Select';
import CardHolder from './CardHolder/CardHolder';
import CardNumber from './CardNumber/CardNumber';
import { FTP } from '../../constants';

class Form extends Component {

	constructor(props) {
	    super(props);
	    this.onSubmit = this.handleSubmit.bind(this);
	    this.checkInputs = this.checkInputs.bind(this);
	    this.state = { 
	    	disabledSubmit: true,
			validCard: false,
			holderName: '',
			month: '',
			year: '',
			cscNumber: '',
			filled: ''
	    };
	}


  	onChangeValue = param => {
  		this.checkInputs();
  		this.setState( param );
  	};


  	checkInputs() {
  		if ( 
  			this.state.validCard === true && 
  			this.state.holderName.length > 4 && 
  			this.state.month !== '' && 
  			this.state.year !== '' && 
  			this.state.cscNumber.length === 2 

  		) {
  			this.setState({ disabledSubmit : false })
  		} else {
  			this.setState({ disabledSubmit : true })
  		}
  	}


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

		let self = this;

		if ( formContent !== '' ) {
		  	fetch(FTP, {
		      	method: 'POST',
		      	body: JSON.stringify(formContent)
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
		    submitted: 	false
		  })
		}
		alert('Hi, ' + this.state.holderName + '! Your credit card is valid until ' + this.state.month + '/' + this.state.year +'. Good shopping!'
		);
	}

	render() {
		var disabled = this.state.disabledSubmit
	  	return (
		    <form onSubmit={this.onSubmit}>
				<CardNumber 
                	handleValue={this.onChangeValue}
					inputName='validCard' 
                />
				<CardHolder
                	handleValue={this.onChangeValue}
					inputName='holderName' 
                />
				<div className='row'>
					<Select 
	                	handleValue={this.onChangeValue} 
						disabledOption='MM' 
						inputName='month' 
						options={['01','02','03','04','05','06','07','08','09','10','11','12']}
	                />
					<Select 
	                	handleValue={this.onChangeValue} 
						disabledOption='YY' 
						inputName='year' 
						options={['17','18','19','20','21','22','23','24','25']}/>
					<SecurityNumber 
	                	handleValue={this.onChangeValue} 
						inputName='cscNumber' 
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