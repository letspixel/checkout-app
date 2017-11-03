import React from 'react';
import Form from '../Form/Form';


const Content = () => {
    return (
      <div id="checkout" className="container">
      <div id="payment-box" className="col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="page-header">
          <h1><i className="fa fa-credit-card"></i> Credit Card Info</h1>
          <span className="log"></span>
        </div>

        <div className="panel">
          <div className="panel-body">
            <Form />
          </div>        
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <a href="/#"><span className="back-button"><i className="fa fa-arrow-left"></i> Return to cart</span></a>
        </div>
      </div>
    </div>
  );
};

export default Content;

