import React from 'react';
import InputMask from 'react-input-mask';

class SecurityNumber extends React.Component {

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
    	if ( nameInputed === 3 ) {
    		this.setState({ 
    			validity: 	true,
    			empty: 		false
    		});
    	} else {
    		this.setState({ 
    			validity: 	false,
    			empty: 		false
    		});
    	}
	}

	onFocused(event) {
    	var length = event.target.value.length;
    	if ( length === 0 ) {
    		this.setState({ 
    			validity: 	false,
    			empty: 		true
    		});
    	}
	}

	render() {
	    return (
			<div className='col-xs-4'>
				<InputMask 
					className='security-number'  
					mask='999' placeholder='CSC' 
					onChange={this.handleChange} 
					onFocus={this.onFocused}
					maskChar='' 
					className={this.state.validity ? 'valid'	: 'invalid'}
				/>
			</div>
	    );
	};
};

export default SecurityNumber;


