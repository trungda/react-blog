'use strict';

var React = require('react');

var postStyle = {
	width: '1000px',
	margin: '0 auto',
};

var dateStyle = {
	fontFamily: "Lora,'Times New Roman',serif",
	fontSize: '12px',
	color: 'gray',
};

module.exports = React.createClass({
	setInitialState: function() {
		return {id: ""};
	},

	componentDidMount: function() {
		this.setState({id: this.props.id});
	},

	render: function() {
		var thisDate = new Date(this.props.date);
		return (
			<div className="post" style={postStyle}>
				<a href="post.html" style={{textDecoration: 'none'}}>
					<h1 className="title" id={this.props.id}>
						{this.props.title}
					</h1>
					{this.props.children}
				</a>
				<br>
				</br>
				<p style={dateStyle}>
					{"Posted on " + thisDate.toString()}
				</p>
				<hr>
				</hr>
			</div>
		);
	}
});
