'use strict';

var functions = require('./functions');

var Variables = {
	/* Colors */

	primary_color : '#33C3F0',
	highlight_color : '#13C3F0',
	transition_speed : 500,
	border_radius : 4,
	
	/* Scaffolding */

	body_bg : '#fff',
	text_color : functions.lighten('000000', '20%'),
	link_color : '#33C3F0',
	link_hover_color : functions.darken('33C3F0', '15%'), 
	link_hover_decoration : 'underline',

	/* Typography */

	font_family : '"Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif',
	font_size_base : '14px',

	/* Grid */

	grid_columns : 12,
	grid_gutter_width : '30px',

	/* Buttons todo */


	/* Media Query Breakpoints */
	/* screen and (max-width:480px) */

	screen_xs : '480px',
	screen_sm : '768px',
	screen_md : '992px',
	screen_lg : '1200px'

}

module.exports = Variables;