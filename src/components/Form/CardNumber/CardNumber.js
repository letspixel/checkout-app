import React, {Component} from 'react';
import creditcardutils from 'creditcardutils';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

class CardNumber extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: '',
	    	cardFlag: '',
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

	// Formats and validates credit card number, length and luhn 
	// Also identifies the carrier name to show card flag
  	handleChange(event) {
    	var cardNumber = creditcardutils.formatCardNumber(event.target.value);
    	var cardFlag 	= creditcardutils.parseCardType(cardNumber);
    	var validity 	= creditcardutils.validateCardNumber(cardNumber);
    	this.setState({ 
    		validity: validity, 
    		cardFlag: cardFlag 
    	});
    	var recognized =  '';
    	if ( cardFlag !== null ) {
    		recognized = true;
    	} else {
    		recognized = false;
    	}
    	this.setState({ 
    		recognized: recognized 
    	});
	}

	render() {
	    return (
	    	<div className={
	    		classnames(
		    		'credit-card', 
		    		{
		    			'valid'		: this.state.validity,  
		    			'invalid'	: !this.state.validity,
		    			'recognized': this.state.recognized,
		    			'unknown'	: !this.state.recognized
		    		}
		    	)
		    }>
				<InputMask 
					className='security-number'  
					mask='9999  9999  9999  9999' 
					name='cardNumber' id='credit-card-input' 
					placeholder='Credit Card Number' 
					maskChar=''  
					onChange={this.handleChange} 
					autoFocus
				/>
				<span className={this.state.cardFlag}>
					<i className='fa fa-check'></i>
				</span>
			</div>
	   );
	};
};

export default CardNumber;