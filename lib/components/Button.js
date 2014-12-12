'use strict';

var React = require('react');
var Styles = require('../style/');

var Button = React.createClass({

	getInitialState: function() {
		return {
			hover:false 
		};
	},

	toggleHover: function(e) {
		this.setState({hover:!this.state.hover});
	},

	render: function() {
		var jss = Styles.Button(this.props.primary, this.state.hover, this.props.style);
		return (
			<button style={jss} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>{this.props.children}</button>
		);
	}

});

module.exports = Button;