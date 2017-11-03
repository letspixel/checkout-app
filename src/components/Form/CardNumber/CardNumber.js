import React from 'react';
import creditcardutils from 'creditcardutils';
import InputMask from 'react-input-mask';

class CardNumber extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	value: '',
	    	valid: '',
	    	cardFlag: '',
	    };
	    this.checkCard = this.checkCard.bind(this);
	}

  	checkCard(event) {
    	this.setState({ value: event.target.value });
    	var cardNumber = creditcardutils.formatCardNumber(event.target.value);
    	var validity = creditcardutils.validateCardNumber(cardNumber);
    	var cardFlag = creditcardutils.parseCardType(cardNumber);
    	this.setState({ cardFlag: cardFlag });
    	var recognized =  '';
    	if ( cardFlag !== null ) {
    		recognized = 'yes';
    	} else {
    		recognized = 'no';
    	}
    	console.log('valid: ' + validity + '    recognized: ' + recognized + '     flag: ' + cardFlag);

	}

	



	render() {
		console.log(this.props.cardFlag);
		var flag = this.props.cardFlag;
	    return (
	    	<div className='credit-card'>
				<InputMask 
					className='security-number'  
					mask='9999  9999  9999  9999  999' 
					name='cardNumber' id='credit-card-input' 
					placeholder='Credit Card Number' 
					maskChar=''  
					onChange={this.checkCard}  
					autoFocus
				/>
				<span className={flag}></span>
			</div>
	    );
	};
};

export default CardNumber;



