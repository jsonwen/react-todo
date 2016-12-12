var React = require('react');
var TodoList = require('TodoList');

var Todo = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = Todo;
