'use strict';

var util = require('../utils');
var Variables = require('./variables');

var inputbase = {
	border: '1px solid #D1D1D1',
	height: 36,
	padding: '6px 10px',
	borderRadius: 4,
	boxShadow: 'none',
	background: '#fff'
}

module.exports = {
	Wrapper : function(custom) {
		return custom ? custom : {};
	},

	Label : function(custom) {
		var base = {
			display: 'block',
			fontWeight: 600,
  			marginBottom: '.5rem'
		}

		return util.m(base, custom ? custom : {});
	},

	TextInput : function(custom) {
		return util.m(inputbase, util.fullWidth, custom ? custom : {});
	},

	Select : function(custom) {
		return util.m(inputbase, util.fullWidth, custom ? custom : {});
	},

	TextArea : function(custom) {
		var base = {
			minHeight: 65,
			paddingTop: 6,
			paddingBottom: 6
		}
		return util.m(inputbase, base, util.fullWidth, custom ? custom : {});
	},

	Checkbox : {

		Input : function(custom) {
			var base = {
				display: 'inline',
			}
			return util.m(base, custom ? custom : {});
		},

		Span : function(custom) {
			var base = {
				display: 'inline-block',
  				fontWeight: 'normal',
 				marginLeft: '.5rem'
			}
			return util.m(base, custom ? custom : {});
		}
	}
}
