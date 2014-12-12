'use strict';

var React = require('react');
var Styles = require('../style/');


var NestedListItem = React.createClass({
	render : function() {

		return (
			<li style={Styles.List.listitem(this.props.style)} key={this.props.payload}>{this.props.text}
				<List style={Styles.List.list(this.props.ordered, true, this.props.style)} items={this.props.items} ordered={this.props.ordered} />
			</li>
		);
	}
});

var List = React.createClass({

	render: function() {

		if (this.props.ordered) {
			return (
				<ol style={Styles.List.list(this.props.ordered, false, this.props.style)}>
				{this._getChildren()}
				</ol>
			);
		} else {
			return (
				<ul style={Styles.List.list(this.props.ordered, false, this.props.style)}>
				{this._getChildren()}
				</ul>
			);
		}
	},

	_getChildren: function() {
		var children = [],
      		listItem,
      		listItemComponent;

      	for (var i=0; i < this.props.items.length; i++) {
      		listItem = this.props.items[i];

      		switch (listItem.type) {
      			case 'nested' : 
      				listItemComponent = (
	            		<NestedListItem
			              payload={listItem.payload}
			              text={listItem.text}
			              ordered={this.props.ordered || false}
			              items={listItem.items} />
	          			);
			        break;

      			default: listItemComponent = (
      				<li style={Styles.List.listitem(this.props.style)} key={listItem.payload}>{listItem.text}</li>
      			);
      		}

      		children.push(listItemComponent);
      	}
      	return children;
	}

});

module.exports = {
	NestedListItem : NestedListItem,
	List : List
}	
