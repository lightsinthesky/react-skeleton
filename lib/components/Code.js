'use strict';

var React = require('react');
var Styles = require('../style/');

var Code = React.createClass({

	render: function() {

		var jss = Styles.Code(this.props.style);

		/* this doesn't hold water */
		return (
			<pre>
				<code style={jss}>
					{this.props.body}
				</code>
			</pre>
		);
	}

});

module.exports = Code;