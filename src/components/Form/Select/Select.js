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
	    	changed: true, // So it does not appear as invalid when opening the page
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

	// Select option only needs to know if it has changes, there are only 'valid' options

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
		); // return an option for each value provided
	    return (
	    	<div className='col-xs-4'>
	    		<select 
					onChange={this.handleChange}
					name={this.props.name}
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


