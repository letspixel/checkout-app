import React from 'react';
import profile from '../../assets/images/profile.png';

const Footer = () => {
  return (
    <footer>
    	<div class='container'>
    		<p><img src={profile} title='Leticia Rezende' alt=''/> Developed with ReactJS and built with NPM, by <a href='http://github.com/letspixel/'>Leticia Rezende</a>.</p>
    	</div>
    </footer>
  );
}

export default Footer;