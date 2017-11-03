import React from "react";
import InputMask from "react-input-mask";
import classnames from "classnames";
import PropTypes from "prop-types";

class CardHolder extends React.Component {
	static propTypes = {
		validity: PropTypes.bool,
		empty: PropTypes.bool,
	}

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: true,
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.onFocused = this.onFocused.bind(this);
	}

	handleChange(event) {
    	var nameInputed = event.target.value.length;
    	if ( nameInputed > 5 ) {
    		this.setState({ validity: true});
    		this.setState({ empty: false});
    	} else {
    		this.setState({ validity: false});
    		this.setState({ empty: false});
    	}
	}

	onFocused(event) {
    	var nameInputed = event.target.value.length;
    	if ( nameInputed === 0 ) {
    		this.setState({ validity: false});
    		this.setState({ empty: true});
    	}
	}


	render() {
	    return (
	    	<InputMask 
				name="cardHolder" 
				id="name-input"  
				placeholder="Name on Credit Card" 
				maskChar=""
				onChange={this.handleChange}
				onFocus={this.onFocused}
				className={classnames("", {"valid": this.state.validity, "invalid": !this.state.validity})}  
			/>
	    );
	};
};

export default CardHolder;



