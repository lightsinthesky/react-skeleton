'use strict';

var React = require('react');
var Styles = require('../style/');


var Row = React.createClass({

	/* POC pseudo element enforcement */
	componentDidMount: function() {
		var fc = this.getDOMNode().firstChild;
		fc.style.marginLeft = 0;
	},

	render: function() {

		var jss = Styles.Row(this.props.style);

		return (
			<div style={jss}>{this.props.children}</div>
		);
	}

});

module.exports = Row;