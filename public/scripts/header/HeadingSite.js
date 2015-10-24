'use strict';

var React = require('react');

var headingSiteStyle = {
  padding: '100px 0 50px',
  color: 'white',
  marginTop: '0',
  textAlign: 'center',
};

module.exports = React.createClass({
  render: function() {
    return (
      <div className="headerContent" style={headingSiteStyle}>
        <h1 style={{fontSize: '80px'}}>
          Clean Blog
        </h1>
        <p style={{fontSize: '24px'}}>
          A Clean Blog Theme Powered By ReactJS
        </p>
      </div>
    );
  },
});