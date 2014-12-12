'use strict';

var util = require('../utils');
var Variables = require('./variables');


module.exports = function(isPrimary, isHovered, custom) {
	var base = {
		display: 'inline-block',
		backgroundColor: 'transparent',
		borderRadius: Variables.border_radius,
		color: '#555',
		textAlign: 'center',
		fontSize: '11px',
		fontWeight: 600,
		textDecoration: 'none',
		cursor: 'pointer',
		border: '1px solid #bbb',
		height: 38,
		lineHeight: '38px',
		padding: '0 30px',
		letterSpacing: '.1rem',
		textTransform: 'uppercase', 
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
    	transition: 'all ' + Variables.transition_speed + 'ms'
	}

	var primary = {
		color: '#FFF',
		borderColor: Variables.primary_color,
		backgroundColor: Variables.primary_color
	}

	var hover = {
		borderColor: '#888',
		color: '#333',
		outline: 0,
		backgroundColor: Variables.highlight_color
	}
	return util.m(base, isPrimary ? primary : {}, isHovered ? hover : {}, custom ? custom : {});
}
