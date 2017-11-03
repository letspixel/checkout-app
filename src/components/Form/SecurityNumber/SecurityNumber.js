import React from 'react';
import InputMask from 'react-input-mask';

class SecurityNumber extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	csc: '',
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(event) {
    	this.setState({ csc: event.target.value });
    	console.log(this.props.csc);
	}

	render() {
	    return (
			<div className='col-xs-4'>
				<InputMask 
					className='security-number'  
					mask='999' placeholder='CSC' 
					onChange={this.handleChange} 
					maskChar='' 
					name='csc' 
				/>
			</div>
	    );
	};
};

export default SecurityNumber;


