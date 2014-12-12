'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = function(custom) {
	var base = {
		margin: '0 .2rem',
		fontSize: '90%',
		background: '#F1F1F1',
		border: '1px solid #E1E1E1',
		borderRadius: Variables.border_radius,
		whiteSpace: 'nowrap',
		display: 'block',
	    padding: '1rem 1.5rem'
	}

	return util.m(base, custom ? custom : {});
}
