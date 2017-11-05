import React, {Component} from 'react';
import propTypes from 'prop-types';
import creditcardutils from 'creditcardutils';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

class CardNumber extends Component {
	
	static propTypes = {
    handleValid: propTypes.func,
	};
	
	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: null,
	    	cardFlag: '',
	    	icon: '',
	    	validCard: false
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

	// Formats and validates credit card number, length and luhn 
	// Also identifies the carrier name to show card flag
  	handleChange(event) {
    	var cardNumber = creditcardutils.formatCardNumber(event.target.value);
    	var cardFlag 	= creditcardutils.parseCardType(cardNumber);
    	var validity 	= creditcardutils.validateCardNumber(cardNumber);
    	var validCard 	= validity;
    	this.setState({ validCard: true })
    	var recognized =  '';
    	var icon			= '';
    	this.setState({ 
    		validity: validity, 
    		cardFlag: cardFlag 
    	});
    	if ( cardFlag !== null ) {
    		recognized = true;
    	} else {
    		recognized = false;
    	}
    	if ( validity ) {
    		icon = 'fa fa-check';
    	}
    	if ( validity === false || recognized === false ) {
    		icon = 'fa fa-close';
    	}
    	this.setState({ 
    		recognized: recognized 
    	});
    	this.setState({ 
    		icon: icon 
    	});
    	this.props.handleValid(validCard);

    	
	}

	render() {
	    return (
	    	<div className={
	    		classnames(
		    		'credit-card', 
		    		'input', 
		    		{
		    			'valid'		: this.state.validity,  
		    			'invalid'	: !this.state.validity || !this.state.recognized,
		    			'recognized': this.state.recognized
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
					<i className={this.state.icon}></i>
				</span>
			</div>
	   );
	};
};

export default CardNumber;