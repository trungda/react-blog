'use strict';

var React = require('react');

var pagerStyle = {
	width: '1000px',
	margin: '0 auto',	
};

module.exports = React.createClass({
	render: function() {
		return (
			<div className="pager" style={pagerStyle}>
				<a href="" style={{textDecoration: 'none', color: 'black', float: 'right'}}>
					OLDER POSTS
				</a>
			</div>
		);
	}
});