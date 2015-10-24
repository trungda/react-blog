'use strict';

var React = require('react');

var navBarStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: '3',
  color: 'white',
  float: 'left',
};

module.exports = React.createClass({
  render: function() {
    var navMenuStyle = {
      fontSize: '18px',
      float: 'right',
    };

    var navBulletStyle = {
      textDecoration: 'none',
      color: 'white',
      padding: '.2em 1em',
    };

    return (
      <div className="navBar" style={navBarStyle}>
        <ul style={navMenuStyle}>
          <li style={{display: 'inline'}}>
            <a href="./index.html" style={navBulletStyle}>
              HOME
            </a>
          </li>
          <li style={{display: 'inline'}}>
            <a href="" style={navBulletStyle}>
              ABOUT
            </a>
          </li>
          <li style={{display: 'inline'}}>
            <a href="" style={navBulletStyle}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    );
  }
});
