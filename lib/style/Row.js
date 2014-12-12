'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = function(custom) {
	var base = {
		marginBottom: '2rem',
		marginTop: '2rem'
	}

	return util.m(base, custom ? custom : {});
}
