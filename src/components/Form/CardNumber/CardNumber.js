import React, {Component} from 'react';
import propTypes from 'prop-types';
import creditcardutils from 'creditcardutils';
import InputMask from 'react-input-mask';
import classnames from 'classnames';
import { checkIcon, invalidIcon, cardMask } from '../../../constants';

class CardNumber extends Component {
	
	static propTypes = {
    handleValue: propTypes.func,
	};
	
	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: null,
	    	cardFlag: '',
	    	icon: '',
	    	validCard: false,
	    	goToName: false
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(event) {
  		var inputName 	= this.props.inputName;
    	var cardNumber = creditcardutils.formatCardNumber(event.target.value);
    	var cardFlag 	= creditcardutils.parseCardType(cardNumber);
    	var validity 	= creditcardutils.validateCardNumber(cardNumber);
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
    		icon = checkIcon;
    	}
    	if ( validity === false || recognized === false ) {
    		icon = invalidIcon;
    	}
    	this.setState({ 
    		recognized: recognized ,
    		icon: icon 
    	});
    	this.props.handleValue({ [inputName]: validity, cardNumber: cardNumber});

    
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
					mask={cardMask}
					name='cardNumber' 
					id='credit-card-input' 
					placeholder='Credit Card Number' 
					maskChar=''  
					onChange={this.handleChange} 
					autoFocus={this.props.autoFocus}
				/>
				<span className={this.state.cardFlag}>
					<i className={this.state.icon}></i>
				</span>
			</div>
	   );
	};
};

export default CardNumber;