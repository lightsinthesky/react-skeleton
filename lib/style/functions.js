'use strict';

var Color = require('./helpers/Color');

var Functions = {

	lighten: function(color, amount) {
		var c = Color.makeHEX(color);

        c.lighten(amount);

        return c.cssRGBA();
	},

    darken: function(color, amount) {
        var c = Color.makeHEX(color);

        c.darken(amount);

        return c.cssRGBA();
    }

}

module.exports = Functions;