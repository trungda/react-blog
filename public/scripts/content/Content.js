'use strict';

var React = require('react');

var contentStyle = {
	width: '1200px',
	margin: '0 auto',
};

var PostList = require('./PostList.js');
var Pager = require('./Pager.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="content" style={contentStyle}>
				<PostList />
				<Pager />
			</div>
		);
	}
});