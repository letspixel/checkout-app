import React from 'react';
import InputMask from 'react-input-mask';

class CardHolder extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	value: '',
	    	valid: '',
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(event) {
    	this.setState({ value: event.target.value });
    	console.log(this.props.value);
	}

	changeValue(evt){
		let inputName = evt.target.name;
		let value = evt.target.value;
	    console.log(inputName + ': ' + value);
	}


	render() {
	    return (
	    	<InputMask 
				name='cardHolder' 
				id='name-input'  
				placeholder='Name on Credit Card' 
				mask='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
				maskChar=''
				onChange={this.changeValue} 
			/>
	    );
	};
};

export default CardHolder;



