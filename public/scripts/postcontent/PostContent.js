'use strict';

var React = require('react');

var dateStyle = {
	fontFamily: "Lora,'Times New Roman',serif",
	fontSize: '12px',
	color: 'gray',
};

var postContentStyle = {
	width: '1000px',
	margin: '0 auto',
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      content: "",
      date: "",
    };
  },

  componentDidMount: function() {
    this.setState({
      title: "Hello blog 1",
      content: "Silent sir say desire fat him letter. \
      Sportsman do offending supported extremity breakfast by listening. \
      Decisively advantages nor expression unpleasing she led met. \
      Estate was tended ten boy nearer seemed. \
      As so seeing latter he should thirty whence. \
      Steepest speaking up attended it as. \
      Made neat an on be gave show snug tore. ",
      date: "2012-04-23T18:25:43.511Z",
    });
  },

  render: function() {
    var thisDate = new Date(this.state.date);
    return (
      <div className="postContent" style={postContentStyle}>
        <h1>
          {this.state.title}
        </h1>
        <hr>
        </hr>
        {this.state.content}
        <br>
        </br>
        <p style={dateStyle}>
          {"Posted on " + thisDate.toString()}
        </p>
      </div>
    );
  }
});
