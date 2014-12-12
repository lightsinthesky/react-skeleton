'use strict';

var React = require('react');
var Styles = require('../style/');

var Container = React.createClass({
	render: function() {

		var jss = Styles.Container(this.props.style);

		return (
			<div style={jss}>{this.props.children}</div>
		);
	}

});

module.exports = Container;