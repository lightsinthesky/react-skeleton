'use strict';

var React = require('react');
var Styles = require('../style/');

function keys(obj) {
	var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}

var Table = React.createClass({

	_header: function() {
		var items = keys(this.props.items[0]).map(function(item,i) {
			return (<th key={i} style={Styles.Table.Cell(this.props.style)}>{item}</th>);
		}.bind(this));

		return (
			<thead>
    			<tr>
    			{items}
    			</tr>
    		</thead>
		);
	},

	_row: function(row) {

		var items = keys(row);
		var rowData = items.map(function(item, i) {
			return (<td key={i} style={Styles.Table.Cell(this.props.style)}>{row[item]}</td>);
		}.bind(this));

		return (<tr>{rowData}</tr>);
	},

	_rows: function() {

		var self = this;

		var items = this.props.items.map(function(item) {
			return self._row(item);
		}.bind(this));

		return (
			 <tbody>
			 {items}
			 </tbody>
		);
	},

	render: function() {
		return (
			<table style={Styles.Table.Table(this.props.style)}>
			{this._header()}
			{this._rows()}
			</table>
		);
	}

});

module.exports = Table;