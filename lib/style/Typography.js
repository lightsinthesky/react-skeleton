'use strict';

var util = require('../utils');
var Variables = require('./variables');

module.exports = {
	Header : function(size, custom) {
		var base = {
			fontWeight: 300,
  			marginTop: 0,
  			marginBottom: '2rem'
		}

		var typeMap = [
			{fontSize: '4.0rem', lineHeight: 1.2, letterSpacing: '-.1rem'},
			{fontSize: '3.6rem', lineHeight: 1.25, letterSpacing: '-.1rem'},
			{fontSize: '3.0rem', lineHeight: 1.3, letterSpacing: '-.1rem'},
			{fontSize: '2.4rem', lineHeight: 1.35, letterSpacing: '-.108rem'},
			{fontSize: '1.8rem', lineHeight: 1.5, letterSpacing: '-.105rem'},
			{fontSize: '1.5rem', lineHeight: 1.6, letterSpacing: 0}
		];
		
		return util.m(base, typeMap[size-1], custom ? custom : {});
	},

	Paragraph : function(custom) {

		var base = {
			marginTop: 0
		}

		return util.m(base, custom ? custom : {});
	}
}
