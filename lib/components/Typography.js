'use strict';

var React = require('react');
var Styles = require('../style/');


var Typography = {

	Header : {
		One : React.createClass({
			render: function() {
				var jss = Styles.Typography.Header(1, this.props.style);

				return (
					<h1 style={jss}>{this.props.children}</h1>
				);
			}
		}),
		Two : React.createClass({
			render: function() {
				var jss = Styles.Typography.Header(2, this.props.style);

				return (
					<h2 style={jss}>{this.props.children}</h2>
				);
			}
		}),
		Three : React.createClass({
			render: function() {
				var jss = Styles.Typography.Header(3, this.props.style);

				return (
					<h3 style={jss}>{this.props.children}</h3>
				);
			}
		}),
		Four : React.createClass({
			render: function() {
				var jss = Styles.Typography.Header(4, this.props.style);

				return (
					<h4 style={jss}>{this.props.children}</h4>
				);
			}
		}),
		Five : React.createClass({
			render: function() {
				var jss = Styles.Typography.Header(5, this.props.style);

				return (
					<h5 style={jss}>{this.props.children}</h5>
				);
			}
		}),
		Six : React.createClass({
			render: function() {
				var jss = Styles.Typography.Header(6, this.props.style);

				return (
					<h6 style={jss}>{this.props.children}</h6>
				);
			}
		})
	},
	Paragraph : React.createClass({
			render: function() {
				var jss = Styles.Typography.Paragraph(this.props.style);
			
				return (
					<p style={jss}>{this.props.children}</p>
				);
			}
	})
}

module.exports = Typography;