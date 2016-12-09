var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopNavigation = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <div id="navbar">
          <nav className="nav navbar-nav float-xs-left">
            <IndexLink to="/" className="nav-item nav-link" activeClassName="active">Index</IndexLink>
            <Link to="/page1" className="nav-item nav-link" activeClassName="active">Page1</Link>
          </nav>
        </div>
      </nav>
    )
  }
});

module.exports = TopNavigation;
