'use strict';

var React = require('react');

var PostItem = require('./PostItem.js');

var mockData = {
	"data": [
		{
			"id": "0",
			"title": "Hello blog 1",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"id": "1",
			"title": "Hello blog 2",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2012-03-23T18:25:43.511Z"
		},
		{
			"id": "2",
			"title": "Hello blog 3",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2012-02-23T18:25:43.511Z"
		},
		{
			"id": "3",
			"title": "Hello blog 4",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2012-01-23T18:25:43.511Z"
		},
		{
			"id": "4",
			"title": "Hello blog 5",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2011-04-23T18:25:43.511Z"
		},
		{
			"id": "5",
			"title": "Hello blog 6",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2011-03-23T18:25:43.511Z"
		},
		{
			"id": "6",
			"title": "Hello blog 6",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2011-02-23T18:25:43.511Z"
		},
		{
			"id": "7",
			"title": "Hello blog 7",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2011-01-23T18:25:43.511Z"
		},
		{
			"id": "8",
			"title": "Hello blog 8",
			"summary": "Silent sir say desire fat him letter.",
			"date": "2010-04-23T18:25:43.511Z"
		}
	],
};

module.exports = React.createClass({
	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function() {
		this.setState({data: mockData["data"].slice(0, 4)});
	},

	render: function() {
		var posts = this.state.data.map(function(post) {
			return (
				<PostItem title={post["title"]} date={post["date"]} key={"key" + post["id"]} id={post["id"]}>
					{post["summary"]}
				</PostItem>
			);
		});

		return (
			<div className="postList">
				{posts}
			</div>
		);
	}
});
