import React from 'react';

class Select extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	disabledOption: '',
	    	options: '',
	    	selectedOption: '',
	    	valid: '',
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(event) {
    	this.setState({ selectedOption: event.target.value });
    	console.log(this.props.csc);
	}

	render() {
		const options = this.props.options;
		const listOptions = options.map((number,key) =>
			<option key={key + 1} value={number}>{number}</option>
		);
	    return (
	    	<div className='col-xs-4'>
	    		<select 
					onChange={this.changeValue}
					name={this.props.name}
				>
					<option value='' disabled selected>{this.props.disabledOption}</option>
					{listOptions}
				</select>
			</div>
	    );
	};
};

export default Select;


