# [react-skeleton](http://lightsinthesky.github.io/react-skeleton/)

react-skeleton is a React UI framework built with the [Skeleton](http://getskeleton.com) responsive css boilerplate. 

## Installation

react-skeleton is available as an [npm package](https://www.npmjs.com/package/react-skeleton)

```sh
npm install react-skeleton
```

## Usage

After you've included react-skeleton in your project you can use the components and style implementation like this:

```js
var React = require('react');
var Button    = require('react-skeleton').Button;

var Page = React.createClass({

  render: function() {
    return (
    	<Button>Default Button</Button>
		<Button primary={true}>Primary Button</Button>
    );
  }

});

module.exports = Page;
```

or include the whole framework like this (and use namespaced components):

```js
var React = require('react');
var Skelton = require('react-skeleton');

var Page = React.createClass({

  render: function() {
    return (
    	<Skelton.Button>Default Button</Skelton.Button>
    );
  }

});

module.exports = Page;
```

## Styles

Styles are a proof of concept based on Christopher Chedeau's [@vjeux](https://twitter.com/vjeux) [talk](https://speakerdeck.com/vjeux/react-css-in-js) at NationJS.

example : 

```js
'use strict';

var util = require('../utils');
var Variables = require('./variables');

module.exports = function(isHovered, custom) {
	var base = {
		color: '#1EAEDB',
		backgroundColor: 'transparent'
	}

	var hover = {
		color:'#0FA0CE'
	}
	return util.m(base, isHovered ? hover : {}, custom ? custom : {});
}
```

Allows a composition of styles as well as simple customization with the custom parameter which is props.style

```js

getInitialState: function() {
	return {
		hover:false 
	};
},

toggleHover: function(e) {
	this.setState({hover:!this.state.hover});
},

render: function() {
	var jss = Styles.Button(this.props.primary, this.state.hover, this.props.style);
	return (
		<button style={jss} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>{this.props.children}</button>
	);
}
```

