import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    todos: ['Item 1', 'Item 2', 'Item 3'],
    todo: '',
    feedback: ''
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ todos: 'man' });
  };

  handleDelete = i => {
    const todos = [...this.state.todos];
    todos.splice(i, 1);
    this.setState({
      todos
      // todos: todos
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.todo) {
      this.setState({
        feedback: 'You must input a valid input'
      });
    } else if (this.state.todos.indexOf(this.state.todo) === -1) {
      this.setState(prevState => ({
        todos: [...prevState.todos, this.state.todo]
      }));
    } else {
      this.setState({
        feedback: 'Item already exist'
      });
    }

    this.setState({
      todo: ''
    });
  };

  render() {
    const todoList = this.state.todos.map((todo, i) => {
      return (
        <li key={todo + i}>
          {todo}{' '}
          <button
            onClick={() => {
              this.handleDelete(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <p>{this.state.feedback}</p>
        <p>{this.state.todo}</p>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Some value" value={this.state.todo} onChange={this.handleChange} />
          <button>Submit</button>
        </form>

        <ul>{todoList.reverse()}</ul>
      </div>
    );
  }
}

export default AddTodo;
