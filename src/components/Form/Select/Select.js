import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

class Select extends React.Component {
	
	static propTypes = {
    handleValue: propTypes.func,
	};

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: '',
	    	changed: true, 
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var inputName = this.props.inputName;
		var option = event.target.value;
    	var optionLength = option.length;
    	this.setState({ changed: true });
    	if ( optionLength > 0 ) {
    		this.setState({ validity: true});
    	} else {
    		this.setState({ validity: false});
    	}
    	this.setState({ [inputName]: option })
    	this.props.handleValue({ [inputName]: option });
	}

	render() {
		const options = this.props.options;
		const listOptions = options.map((number,key) =>
			<option key={key} value={number}>
				{number}
			</option>
		);
	    return (
	    	<div className='col-xs-6'>
	    		<select 
					onChange={this.handleChange}
					name={this.props.name}
					disabled={this.props.disabled}
					className={ classnames({
						'valid'	: 	this.state.validity,  
						'invalid': !this.state.validity && !this.state.changed
					})}
				>
					<option value='' disabled selected>
						{this.props.disabledOption}
					</option>
					{listOptions}
				</select>
			</div>
	    );
	};
};

export default Select;


