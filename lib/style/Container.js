'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = function(custom) {
	var base = {
		position: 'relative', 
		width: '80%',
		maxWidth: 960, 
		margin: '0 auto', 
		padding: 0
	}

	return util.m(base, custom ? custom : {});
}
