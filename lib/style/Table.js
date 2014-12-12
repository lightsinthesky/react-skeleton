'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = {

	Table : function(custom) {
		var base = {
			borderCollapse: 'collapse',
  			borderSpacing: 0
		}

		return util.m(base, custom ? custom : {});
	},

	Cell : function(custom) {
		var base = {
			padding: '12px 15px',
  			textAlign: 'left',
  			borderBottom: '1px solid #E1E1E1'
		}

		return util.m(base, custom ? custom : {});
	}

}
