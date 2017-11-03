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
	    	changed: false,
	    };
	    this.selectValidate = this.selectValidate.bind(this);
	    this.onFocused = this.onFocused.bind(this);
	}
	selectValidate(event) {
    	var option = event.target.value.length;
    	this.setState({ changed: true });
    	if ( option > 0 ) {
    		this.setState({ validity: true});
    	} else {
    		this.setState({ validity: false});
    	}
	}

	onFocused(event) {
    	var option = event.target.value.length;
    	if ( option === 0 ) {
    		this.setState({ validity: false});
    		this.setState({ empty: true});
    	}
	}


	render() {
		const options = this.props.options;
		const listOptions = options.map((number,key) =>
			<option key={key + 1} value={number}>{number}</option>
		);
	    return (
	    	<div className="col-xs-4">
	    		<select 
					onChange={this.selectValidate}
					onClick={this.onFocused}
					name={this.props.name}
					className={classnames("", {"valid": this.state.validity, "invalid": !this.state.validity && this.state.changed})}  
				>
					<option value="" disabled selected>{this.props.disabledOption}</option>
					{listOptions}
				</select>
			</div>
	    );
	};
};

export default Select;


