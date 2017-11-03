import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class Select extends React.Component {
	static propTypes = {
		validity: PropTypes.bool,
		changed: PropTypes.bool,
	}

	constructor(props) {
	    super(props);
	    this.state = { 
	    	disabledOption: "",
	    	options: "",
	    	selectedOption: "",
	    	validity: "",
	    	changed: true,
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.onFocused = this.onFocused.bind(this);
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

	onFocused(event) {
    	var option = event.target.value;
    	this.setState({ changed: false });
    	if ( option === '' ) {
    		this.setState({ validity: false});
    		this.setState({ changed: false});
    	}
	}


	render() {
		const options = this.props.options;
		const listOptions = options.map((number,key) =>
			<option key={key} value={number}>{number}</option>
		);
	    return (
	    	<div className="col-xs-4">
	    		<select 
					onChange={this.handleChange}
					onFocus={this.onFocused}
					name={this.props.name}
					className={classnames("", {"valid": this.state.validity,  "invalid": !this.state.validity && !this.state.changed})}  
				>
					<option value="" disabled selected>{this.props.disabledOption}</option>
					{listOptions}
				</select>
			</div>
	    );
	};
};

export default Select;


