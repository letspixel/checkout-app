import React from 'react';
import propTypes from 'prop-types';
import creditcardutils from 'creditcardutils';
import InputMask from 'react-input-mask';
import classnames from 'classnames';

class SecurityNumber extends React.Component {
	
	static propTypes = {
	 handleValue: propTypes.func,
	};

	constructor(props) {
		super(props);
		this.state = { 
			cscValidity: true,
			icon: '',
			CSC: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.onFocused = this.onFocused.bind(this);
	}

	handleChange(event) {
		var inputName = this.props.inputName;
		var cscNumber = event.target.value;
		var cscValid = creditcardutils.validateCardCVC(cscNumber);
		if ( cscValid === true ) {
			this.setState({ 
				disabledSubmit: 	false,
				cscValidity: 	true,
				empty: 		false,
				icon: 		'fa fa-check'
			});
		} else {
			this.setState({ 
				cscValidity: 	false,
				empty: 		false,
				icon: 		'fa fa-close'
			});
		}
		this.setState({ CSC: cscNumber  })
		this.props.handleValue({ [inputName]: cscNumber, cscValid: cscValid, disabledSubmit: !cscValid });
	}

	onFocused(event) {
		var length = event.target.value.length;
		if ( length === 0 ) {
			this.setState({ 
				cscValidity: 	false,
				empty: 		true
			});
		}
	}

	render() {
		var cscValidity = this.state.cscValidity;
		 return (
			<div className='col-xs-5'>
				<div className={
					classnames(
						'card-security', 
						'input',
						{
							'valid'		: cscValidity,  
							'invalid'	: !cscValidity 
						}
					)
				}>
					<InputMask 
						className='security-number' 
						disabled='true' 
						mask='999' 
						placeholder='CSC' 
						onChange={this.handleChange} 
						onFocus={this.onFocused}
						maskChar='' 
						disabled={this.props.disabled}
						className={cscValidity ? 'valid'	: 'invalid'}
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


