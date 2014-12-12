'use strict';

var React = require('react');
var Styles = require('../style/');

var Column = {

	Twelve : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(12, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Eleven : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(11, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Ten : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(10, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Nine : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(9, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Eight : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(8, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Seven : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(7, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Six : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(6, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Five : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(5, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Four : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(4, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Three : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(3, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	Two : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(2, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	}),
	One : React.createClass({
		render: function() {
			return (
				<div style={Styles.Column(1, this.props.offset || 0, this.props.style)}>{this.props.children}</div>
			);
		}
	})
}

module.exports = Column;