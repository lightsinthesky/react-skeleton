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