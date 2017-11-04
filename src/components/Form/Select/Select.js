import React from 'react';
import classnames from 'classnames';

class Select extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	    	disabledOption: '',
	    	options: '',
	    	selectedOption: '',
	    	validity: '',
	    	changed: true, // So it does not appear as invalid when opening the page
	    };
	    this.onFocused = this.onFocused.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	}

	// Select option only needs to know if it has changes, there are only 'valid' options

	onFocused(event) {
    	var option = event.target.value;
    	if ( option === '' ) {
    		this.setState({ validity: false});
    		this.setState({ changed: false});
    	}
	}

	handleChange(event) {
    	var option = event.target.value.length;
    	this.setState({ changed: true });
    	if ( option > 0 ) {
    		this.setState({ validity: true});
    	} else {
    		this.setState({ validity: false});
    	}
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
					onFocus={this.onFocused}
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


