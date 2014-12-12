'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = { 
	list : function(isOrdered, isNested, custom) {
	
		var base = {
			marginTop: 0,
	  		paddingLeft: 0
		}

		var ordered = {
			listStyle: 'decimal inside'
		}

		var unordered = {
			listStyle: 'circle inside'
		}

		var nested = {
			margin: '1.5rem 0 1.5rem 3rem', 
  			fontSize: '90%'
		}


		return util.m(base, isOrdered ? ordered : unordered, isNested ? nested : {}, custom ? custom : {});
	},

	listitem : function(custom) {
		var base = {
			marginBottom: '1rem'
		}

		return util.m(base, custom ? custom : {});
	}
}
