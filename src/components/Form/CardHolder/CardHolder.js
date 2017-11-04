import React from 'react';
import InputMask from 'react-input-mask';

class CardHolder extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: true, 
	    	// Set to true at first so that the input appears normally
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.onFocused = this.onFocused.bind(this);
	}

	// Checks if there is at least 5 chars 
	handleChange(event) {
    	var nameLength = event.target.value.length;
    	if ( nameLength > 5 ) {
    		this.setState({ 
    			validity: 	true, 
    			empty: 		false});
    	} else {
    		this.setState({ 
    			validity: 	false, 
    			empty: 		false
    		});
    	}
	}

	// If user focuses on the input but doesn't fill it, it will appear invalid
	onFocused(event) {
    	var nameLength = event.target.value.length;
    	if ( nameLength === 0 ) {
    		this.setState({ 
    			validity: 	false, 
    			empty: 		true
    		});
    	}
	}

	render() {
	    return (
	    	<InputMask 
				name='cardHolder' 
				id='name-input'  
				placeholder='Name on Credit Card' 
				maskChar=''
				onChange={this.handleChange}
				onFocus={this.onFocused}
				className={this.state.validity ? 'valid'	: 'invalid'}
			/>
	    );
	};
};

export default CardHolder;



