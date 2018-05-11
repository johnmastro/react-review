import React, { Component } from 'react';

import Todo from './Todo.jsx';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todoList: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInput(e) {
    // console.log('todo: ', e.target.value);
    this.setState({ todo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ todoList: [...this.state.todoList, this.state.todo] });
    e.target.reset();
  }

  deleteTodo(index) {
    const todoList = this.state.todoList;
    todoList.splice(index, 1);
    this.setState({ todoList });
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          Add todo: <input onKeyUp={this.handleInput} required />
          <button>&#10010;</button>
        </form>
        <div>
          {this.state.todoList.map((todo, index) => (
            <Todo key={index} todo={todo} index={index} deleteTodo={this.deleteTodo} />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;