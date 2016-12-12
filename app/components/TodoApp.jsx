var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var Todo = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk buddy'
        }, {
          id: 2,
          text: 'Clean house'
        }, {
          id: 3,
          text: 'Brush teeth'
        }, {
          id: 4,
          text: 'Drink coffee'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = Todo;
