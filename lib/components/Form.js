'use strict';

var React = require('react');
var utils = require('../utils');

var base = {
	border: '1px solid #D1D1D1',
	height: 36,
	padding: '6px 10px',
	borderRadius: 4,
	boxShadow: 'none',
	background: '#fff'
}

var Form = {
	Wrapper : React.createClass({

		displayName: 'FormWrapper',

		render: function() {
			return (
				<div>{this.props.children}</div>
			);
		}
	}), 
	Label : React.createClass({
		render: function() {
			var jss = {
				display: 'block',
				fontWeight: 600,
	  			marginBottom: '.5rem'
			}

			return (
				<label style={jss}>{this.props.children}</label>
			);
		}

	}), 
	TextInput : React.createClass({

		render: function() {
			return (
				<input type="text" style={utils.m(base,utils.fullWidth)} {...this.props}></input>
			);
		}

	}), 
	Select : React.createClass({

		render: function() {
			return (
				<select value="A" style={utils.m(base,utils.fullWidth)}>
				<option value="A">Questions</option>
				</select>
			);
		}

	}), 
	TextArea : React.createClass({

		render: function() {
			return (
				<textarea name="ta" style={utils.m(base, utils.fullWidth, {
					minHeight: 65,
  					paddingTop: 6,
  					paddingBottom: 6
				})} {...this.props}></textarea>
			);
		}

	}), 

	Checkbox : React.createClass({

		render: function() {

			var bodyJss = {
				display: 'inline-block',
  				fontWeight: 'normal',
 				marginLeft: '.5rem'
			}

			return (
				<label {...this.props}>
				    <input style={{
				    	display: 'inline'
				    }} type="checkbox" />
				    <span style={bodyJss}>{this.props.children}</span>
				 </label>
			);
		}

	})
}

module.exports = Form;