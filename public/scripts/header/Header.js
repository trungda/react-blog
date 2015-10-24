'use strict';

var React = require('react');

var HeadingSite = require('./HeadingSite.js');

var headerStyle = {
  backgroundImage: 'url(img/home-bg.jpg)',
  backgroundColor: '#808080',
  backgroundAttachment: 'scroll',
  WebkitBackgroundSize: 'cover',
  MozBackgroundSize: 'cover',
  backgroundSize: 'cover',
  marginBottom: '50px',
  width: '100%',
};

module.exports = React.createClass({
  render: function() {
    return (
      <div className="header" style={headerStyle}>
        <HeadingSite />
      </div>
    );
  }
});