import React from 'react';
import './jquery.creditCardValidator.js';


const Form = () => {
  return (
    <form>
		<div className="credit-card">
			<input type="text" name="credit-card-number" id="credit-card-input" placeholder="Credit Card Number" autoFocus />
			<span></span>
		</div>
		<input type="text" name="credit-card-name" id="name-input"  placeholder="Name on Credit Card" />
		<div className="row">
			<div className="col-xs-4">
				<select id="month" name="month">
					<option value="" disabled selected>MM</option>
					<option value="01">01</option>
					<option value="02">02</option>
					<option value="03">03</option>
					<option value="04">04</option>
					<option value="05">05</option>
					<option value="06">06</option>
					<option value="07">07</option>
					<option value="08">08</option>
					<option value="09">09</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>
			</div>
			<div className="col-xs-4">
				<select id="year" name="year">
					<option value="" disabled selected>YY</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
				</select>
			</div>
			<div className="col-xs-4">
				<input className="security-number" type="number" name="security-number" placeholder="CSC" />
			</div>
		</div>
		<button className="submit" type="submit" disabled><i className="fa fa-check"></i> Pay Now</button>
	</form>
  );
};

export default Form;