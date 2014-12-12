'use strict';

var React = require('react');

var Image = React.createClass({

		/* http://buildwithreact.com/article/fade-in-image-recipe */

		getInitialState: function() {
		    return {
		      loaded: false
		    };
		},

		componentDidMount: function() {
			var pixelDensity = window.devicePixelRatio;
		    var imgTag = this.refs.img.getDOMNode();
		    var imgSrc = this.props.src1x;
		    if (pixelDensity === 2) {
		    	imgSrc = this.props.src2x;
		    } 
		    imgTag.onload = this.onImageLoad;
		    imgTag.src = imgSrc;
		},

		onImageLoad: function() {
	    	if (this.isMounted()) {
	      		this.setState({loaded: true});
	    	}
		},

		render: function() {
			return (
				<img ref="img" {...this.props} />
			);
		}
});

module.exports = Image;