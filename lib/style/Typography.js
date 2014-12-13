'use strict';

var util = require('../utils');
var Variables = require('./variables');
var MediaQuery = require('./MediaQuery');

module.exports = {
	Header : function(size, custom) {
		var base = {
			fontWeight: 300,
  			marginTop: 0,
  			marginBottom: '2rem'
		}

		/* this is the font sizes for small screens */

		// when we setup the font sizes we'll need to query the mediaquery object for state [1..4]

		// also this needs to respond to a change in the media query (enquiry.js)

		// all components must be responsive

		// match from enquiry.js register will cause an update on specified components and will cause a rerender of styles.

		var mq = MediaQuery.current;

		// you can now use the mq variable to determine our current size

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
