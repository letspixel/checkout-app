import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import SecurityNumber from "./SecurityNumber/SecurityNumber";
import Select from "./Select/Select";
import CardHolder from "./CardHolder/CardHolder";
import CardNumber from "./CardNumber/CardNumber";

class Form extends Component {
	static propTypes = {
		enableSubmit: PropTypes.bool,
		cardNumber: PropTypes.string,
		isValid: PropTypes.bool,
		cardHolder: PropTypes.string,
		month: PropTypes.string,
		year: PropTypes.string,
		securityNumber: PropTypes.string,
	};

	static defaultProps = {
		enableSubmit: false,
		cardNumber: '',
		isValid: '',
		cardHolder: '',
		month: '',
		year: '',
		securityNumber: '',
	}

	constructor(props) {
	    super(props);
	    this.state = { 
	    	enableSubmit: true,
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState({ validity: nextProps.validity });
	}

	handleChange(event) {
    	var nameInputed = event.target.value.length;
    	const target = event.target;
	    const value = event.target.value;
	    const name = target.name;
    	this.setState({ [name]: value });
    	if ( nameInputed > 5 ) {
    		this.setState({ validity: true});
    		this.setState({ empty: false});
    	} else {
    		this.setState({ validity: false});
    		this.setState({ empty: false});
    	}
	}

	render() {
	  	return (
		    <form>
				<CardNumber name="cardNumber"/>
				<CardHolder name="cardHolder"/>
				<div className="row">
					<Select disabledOption="MM" name="month" options={["01","02","03","04","05","06","07","08","09","10","11","12"]}/>
					<Select disabledOption="YY" name="year" options={["17","18","19","20","21","22","23","24"]}/>
					<SecurityNumber name="securityNumber"/>
				</div>
				<button className="submit" type="submit" disabled={this.state.enableSubmit}  >
					<i className="fa fa-check"></i> Pay Now
				</button>
			</form>
	  	);
	};
};

export default Form;