import React from 'react';
import Form from '../Form/Form';


const Content = () => {
    return (
      <div id='checkout' className='container'>
        <div id='payment-box' className='col-xs-12 col-sm-8 col-md-5'>
          <div className='page-header'>
            <h1><i className='fa fa-credit-card'></i> Credit Card Info</h1>
            <span className='log'></span>
          </div>
        <div className='panel'>
          <div className='panel-body'>
            <Form />
          </div>        
        </div>
      </div>
      <div className='row'>
        <div className='return col-xs-12 col-sm-8 col-md-5'>
          <a href='http://github.com/letspixel/checkout-app'><span className='back-button'><i className='fa fa-github'></i> Return to Github</span></a>
        </div>
      </div>
    </div>
  );
};

export default Content;

