'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = function(isHovered, custom) {
	var base = {
		color: '#1EAEDB',
		backgroundColor: 'transparent'
	}

	var hover = {
		color:'#0FA0CE'
	}
	return util.m(base, isHovered ? hover : {}, custom ? custom : {});
}
