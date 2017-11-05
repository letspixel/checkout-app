import React from 'react';
import propTypes from 'prop-types';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

class SecurityNumber extends React.Component {
	
	static propTypes = {
    handleValue: propTypes.func,
	};

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: true,
	    	icon: '',
	    	CSC: ''
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.onFocused = this.onFocused.bind(this);
	}

	handleChange(event) {
		var inputName = this.props.inputName;
		var cscNumber = event.target.value;
    	var length = cscNumber.length;
    	if ( length === 3 ) {
    		this.setState({ 
    			validity: 	true,
    			empty: 		false,
    			icon: 		'fa fa-check'
    		});
    	} else {
    		this.setState({ 
    			validity: 	false,
    			empty: 		false,
    			icon: 		'fa fa-close'
    		});
    	}
    	this.setState({ CSC: cscNumber })
    	this.props.handleValue({ [inputName]: cscNumber });
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
				<div className={
		    		classnames(
			    		'card-security', 
			    		'input',
			    		{
			    			'valid'		: this.state.validity,  
			    			'invalid'	: !this.state.validity 
			    		}
			    	)
			    }>
					<InputMask 
						className='security-number'  
						mask='999' placeholder='CSC' 
						onChange={this.handleChange} 
						onFocus={this.onFocused}
						maskChar='' 
						className={this.state.validity ? 'valid'	: 'invalid'}
					/>
					<span>
						<i className={this.state.icon}></i>
					</span>
				</div>
			</div>
	    );
	};
};

export default SecurityNumber;


