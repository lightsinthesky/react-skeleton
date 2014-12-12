'use strict';

var React = require('react');
var Styles = require('../style/');

var Section = React.createClass({

	render: function() {

		var jss = Styles.Section(this.props.style);

		return (
			<section style={jss}>{this.props.children}</section>
		);
	}

});

module.exports = Section;