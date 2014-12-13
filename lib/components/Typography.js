'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var Styles = require('../style/');
var MediaQuery = require('../style/MediaQuery');


var Header = function(tagIndex) {
	return React.createClass({
		displayName: 'Header',
		Headers : [
			React.createFactory('h1'),
			React.createFactory('h2'),
			React.createFactory('h3'),
			React.createFactory('h4'),
			React.createFactory('h5'),
			React.createFactory('h6')
		],

		render: function() {
			var DomType = this.Headers[tagIndex-1];
			this.props.style = Styles.Typography.Header(tagIndex, this.props.style);
			return DomType(this.props, this.props.children);
		}
	});
}

var Typography = {

	Header : {
		One   : Header(1),
		Two   : Header(2),
		Three : Header(3),
		Four  : Header(4),
		Five  : Header(5),
		Six   : Header(6)
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