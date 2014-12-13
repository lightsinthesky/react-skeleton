'use strict';

var assign = require('react/lib/Object.assign');

var Utils = {
	/* https://speakerdeck.com/vjeux/react-css-in-js */
	m : function() {
		var res = {};
		for (var i = 0; i < arguments.length; ++i) {
			if (arguments[i]) {
				assign(res, arguments[i]);
			}
		}
		return res;	
	},

	fullWidth: {
			width: '100%',
		  	boxSizing: 'border-box'
	},

	maxFullWidth: {
			maxWidth: '100%',
		  	boxSizing: 'border-box'
	},

	pullRight : {
		float: 'right'
	},

	pullLeft: {
		float: 'left'
	},

	cf : {
		content: '',
  		display: 'table',
  		clear: 'both'
	}
}

module.exports = Utils;