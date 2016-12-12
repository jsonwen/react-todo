var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    console.log('@handleSearch');
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input ref="searchText" onChange={this.handleSearch} type="text" placeholder="Search"/>
        </div>
        <div>
          <label>
            <input ref="showCompleted" onChange={this.handleSearch} type="checkbox" /> Show completed todo's
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
