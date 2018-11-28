import React, { Component } from 'react';
import './style.css';

export default class TodoItem extends Component {

  render() {
    const { todo, handleClick, index, removeItem, id } = this.props;

    return (
      <li className="todoitem">
        <div className="options">
          <button onClick={() => handleClick(index)}>{todo.done ? 'Undo' : 'Complete'}</button>
        </div>
        <div className="text">
          <span style = {{textDecoration: todo.done ? 'line-through' : 'none'}}>
            {todo.value}
          </span>
        </div>
        <div className="remove">
          <button onClick={() => removeItem(id)}>Close</button>
        </div>
      </li>
    )
  }
}