import React from 'react';
import logo from '../assets/images/symbio-logo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
	    <div className="container">
	      <div className="navbar-header">
	        <a href="/#"><img alt="" title="Symbio" className="logo" src={logo} /></a>
	        <a href="/#"><span className="pull-right">Cancel</span></a>
	      </div>
	    </div>
	  </nav>
  );
};

export default Header;