'use strict';

var util = require('../utils');
var Variables = require('./variables');

module.exports = function(custom) {
	var base = {
		padding: '5rem 0 5rem',
		borderBottom: '1px solid #eee',
		display: 'block',
		content: '',
		clear: 'both'	
	}

	return util.m(base, util.fullWidth, custom ? custom : {});
}
