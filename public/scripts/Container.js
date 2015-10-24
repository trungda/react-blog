var React = require('react');

var NavBar = require('./navbar/NavBar.js');
var Header = require('./header/Header.js');
var Content = require('./content/Content.js');

var mainContainerStyle={
  fontFamily: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
};


module.exports = React.createClass({
  render: function() {
    return (
      <div className="mainContainer" style={mainContainerStyle}>
      	<NavBar />
      	<Header />
      	<Content />
      </div>
    );
  }
});
