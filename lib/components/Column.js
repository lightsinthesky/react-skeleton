'use strict';

var React = require('react');
var Styles = require('../style/');


var ColumnElement = function(width) {
	return React.createClass({
		displayName: 'Column',

		render: function() {
			this.props.style = Styles.Column(width, this.props.offset || 0, this.props.style);
			return React.DOM.div(this.props, this.props.children);
		}
	});
}


var Column = {
	Twelve : ColumnElement(12),
	Eleven : ColumnElement(11),
	Ten    : ColumnElement(10),
	Nine   : ColumnElement(9),
	Eight  : ColumnElement(8),
	Seven  : ColumnElement(7),
	Six    : ColumnElement(6),
	Five   : ColumnElement(5),
	Four   : ColumnElement(4),
	Three  : ColumnElement(3),
	Two    : ColumnElement(2),
	One    : ColumnElement(1)
}

module.exports = Column;