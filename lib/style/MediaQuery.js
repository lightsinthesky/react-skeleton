'use strict';

var enquire = require('enquire.js');
var Variables = require('./variables');

var MediaQuery = {

	/* all react components that are listening */
	registeredComponents : [],

	/* this is the current breakpoint */
	current : 0,

	/* add landscape portrait ? */

	setup: function() {


		// register all mq's from variables this should set initial state as well

		enquire.register("screen and (max-width:1000px)", {

			match: function() {
				this.current = 1;
			},

			unmatch: function() {
				this.current = 0;
			}

		});
	},

	/* register a new react component */

	/* this is a react factory right now so it won't work */
	registerComponent : function(c) {
		this.registeredComponents.push(c);
	}
}

MediaQuery.setup();

module.exports = MediaQuery;
