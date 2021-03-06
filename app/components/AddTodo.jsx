var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText = focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" className="form-control" placeholder="Write your todo..." />
          <button type="submit" className="btn btn-primary btn-md">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
