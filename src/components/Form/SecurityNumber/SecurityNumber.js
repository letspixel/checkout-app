import React from "react";
import InputMask from "react-input-mask";
import classnames from "classnames";
import PropTypes from "prop-types";

class SecurityNumber extends React.Component {
	static propTypes = {
		validity: PropTypes.bool,
		empty: PropTypes.bool,
	};

	static defaultProps = {
		validity: true,
		empty: true,
	}

	constructor(props) {
	    super(props);
	    this.state = { 
	    	validity: true,
	    };
	    this.cscLength = this.cscLength.bind(this);
	    this.onFocused = this.onFocused.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState({ validity: nextProps.validity.value });
	}

	cscLength(event) {
    	var nameInputed = event.target.value.length;
    	if ( nameInputed === 3 ) {
    		this.setState({ validity: true});
    		this.setState({ empty: false});
    	} else {
    		this.setState({ validity: false});
    		this.setState({ empty: false});
    	}
	}

	onFocused(event) {
    	var nameInputed = event.target.value.length;
    	if ( nameInputed === 0 ) {
    		this.setState({ validity: false});
    		this.setState({ empty: true});
    	}
	}



	render() {
	    return (
			<div className="col-xs-4">
				<InputMask 
					className="security-number"  
					mask="999" placeholder="CSC" 
					onChange={this.cscLength} 
					onFocus={this.onFocused}
					maskChar="" 
					name="csc" 
					className={classnames("", {"valid": this.state.validity, "invalid": !this.state.validity})}  
				/>
			</div>
	    );
	};
};

export default SecurityNumber;


