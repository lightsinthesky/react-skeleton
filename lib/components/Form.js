'use strict';

var React = require('react');
var Styles = require('../style/');


var Form = {
	Wrapper : React.createClass({

		displayName: 'FormWrapper',

		render: function() {
			var jss = Styles.Form.Wrapper(this.props.style);

			return (
				<div style={jss}>{this.props.children}</div>
			);
		}
	}), 
	Label : React.createClass({
		render: function() {
			var jss = Styles.Form.Label(this.props.style);

			return (
				<label style={jss}>{this.props.children}</label>
			);
		}

	}), 
	TextInput : React.createClass({
		render: function() {
			var jss = Styles.Form.TextInput(this.props.style);
			return (
				<input type="text" style={jss} {...this.props}></input>
			);
		}

	}), 
	Select : React.createClass({
		/* Demo */
		
		render: function() {
			var jss = Styles.Form.Select(this.props.style);
			return (
				<select value="A" style={jss}>
				<option value="A">Questions</option>
				</select>
			);
		}

	}), 
	TextArea : React.createClass({
		
		render: function() {
			var jss = Styles.Form.TextArea(this.props.style);
			return (
				<textarea name="ta" style={jss} {...this.props}></textarea>
			);
		}

	}), 

	Checkbox : React.createClass({

		render: function() {

			var inputJSS =  Styles.Form.Checkbox.Input(this.props.style);
			var spanJSS =  Styles.Form.Checkbox.Span(this.props.style);

			return (
				<label {...this.props}>
				    <input style={inputJSS} type="checkbox" />
				    <span style={spanJSS}>{this.props.children}</span>
				 </label>
			);
		}

	})
}

module.exports = Form;