import React from 'react';
import logo from '../../assets/images/symbio-logo.png';

const Header = () => {
	return (
		<nav className='navbar navbar-default'>
			<div className='container'>
				<div className='navbar-header col-xs-12'>
					<a href='/symbio'><img alt='' title='Symbio' className='logo' src={logo} /></a>
					<a href='/symbio'><span className='pull-right'><i className='fa fa-refresh'></i> Reload</span></a>
				</div>
			</div>
		</nav>
	);
};

export default Header;