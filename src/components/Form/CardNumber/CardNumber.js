import React, {Component} from "react";
import creditcardutils from "creditcardutils";
import InputMask from "react-input-mask";
import classnames from "classnames";
import PropTypes from "prop-types";

class CardNumber extends Component {
	static propTypes = {
		cardNumber: PropTypes.string,
		cardFlag: PropTypes.string,
		validity: PropTypes.bool,
		recognized: PropTypes.bool,
		maybeValid: PropTypes.bool,
	}

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: "",
	    	cardFlag: "",
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(event) {
    	var cardNumber = creditcardutils.formatCardNumber(event.target.value);
    	var cardFlag = creditcardutils.parseCardType(cardNumber);
    	var validity = creditcardutils.validateCardNumber(cardNumber);
    	this.setState({ validity: validity });
    	this.setState({ cardFlag: cardFlag });
    	var recognized =  "";
    	if ( cardFlag !== null ) {
    		recognized = true;
    	} else {
    		recognized = false;
    	}
    	this.setState({ recognized: recognized });
	}

	render() {
	    return (
	    	<div className={classnames("credit-card", {"valid": this.state.validity, "recognized": this.state.recognized, "invalid": !this.state.validity})} >
				<InputMask 
					className="security-number"  
					mask="9999  9999  9999  9999" 
					name="cardNumber" id="credit-card-input" 
					placeholder="Credit Card Number" 
					maskChar=""  
					onChange={this.handleChange} 
					autoFocus
				/>
				<span className={this.state.cardFlag}><i className="fa fa-check"></i></span>
			</div>
	   );
	};
};

export default CardNumber;