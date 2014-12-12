'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = function(width, offset, custom) {
	
	var pct = [
		4.66666666667,
		13.3333333333,
		22,
		30.6666666667,
		39.3333333333,
		48,
		56.6666666667,
		65.3333333333,
		74,
		82.6666666667,
		91.3333333333,
		100
	];

	var base = {
		float: 'left', 
		width: pct[width-1] + '%',
		boxSizing: 'border-box',
		marginLeft: '4%'
	}

	return util.m(base, custom ? custom : {});
}
