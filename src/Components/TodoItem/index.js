import React, { Component } from 'react';
import './style.css';

export default class TodoItem extends Component {

  render() {
    const { todo } = this.props;

    return (
      <li className="todoitem">
        <div className="text">
          <label></label>
          <input type="checkbox"></input>
          <span style = {{textDecoration: todo.done ? 'line-through' : 'none'}}>
            {todo.value}
          </span>
        </div>
        <div className="options">
          <button>{todo.done ? 'Undo' : 'Complete'}</button>
        </div>
      </li>
    )
  }
}