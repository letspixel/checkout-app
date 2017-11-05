import React from 'react';
import propTypes from 'prop-types';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

class CardHolder extends React.Component {
	
	static propTypes = {
    handleValue: propTypes.func,
	};

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validCard: false,
	    	validity: true, 
	    	icon: '',
	    	name: ''
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.onFocused = this.onFocused.bind(this);
	}

	handleChange(event) {
  		var inputName 	= this.props.inputName;
		var cardname = event.target.value;
    	var nameLength = event.target.value.length;
    	var validName = '';
    	if ( nameLength > 5 && nameLength < 25) {
    		validName = true;
    		this.setState({ 
    			validity: 	true, 
    			empty: 		false,
    			icon: 		'fa fa-check'
    		});
    	} else {
    		validName = false;
    		this.setState({ 
    			validity: 	false, 
    			empty: 		false,
    			icon: 		'fa fa-close'
    		});
    	}
    	this.setState({ name: cardname });
    	this.props.handleValue({ [inputName]: cardname, validName: validName });
	}

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
	    	<div className={
	    		classnames(
		    		'card-holder', 
		    		'input',
		    		{
		    			'valid'		: this.state.validity,  
		    			'invalid'	: !this.state.validity 
		    		}
		    	)
		    }>
		    	<InputMask 
					name='cardHolder' 
					id='name-input'  
					placeholder='Name on Credit Card' 
					maskChar=''
					mask=''
					onChange={this.handleChange}
					onFocus={this.onFocused}
					disabled={this.props.disabled}
					className={this.state.validity ? 'valid'	: 'invalid'}
				/>
				<span>
					<i className={this.state.icon}></i>
				</span>
			</div>
	    );
	};
};

export default CardHolder;



