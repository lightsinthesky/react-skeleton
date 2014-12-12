'use strict';

var React = require('react');
var Styles = require('../style/');

var Link = React.createClass({

	getInitialState: function() {
		return {
			hover:false 
		};
	},

	toggleHover: function(e) {
		e.preventDefault();
		var hover = !this.state.hover;
		this.setState({hover:hover});
	},

	render: function() {

		var jss = Styles.Link(this.state.hover, this.props.style);
		
		return (
			<a style={jss} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover} {...this.props}>{this.props.children}</a>
		);
	}

});

module.exports = Link;