'use strict';

var React = require('react');

var NavBar = require('./navbar/NavBar.js');
var Header = require('./header/Header.js')
var PostContent = require('./postcontent/PostContent.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="postContainer">
        <NavBar />
        <Header />
        <PostContent />
      </div>
    );
  }
});
