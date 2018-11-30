import React, { Component } from 'react';
import './style.css';

export default class TodoItem extends Component {

  render() {
    const { todo, handleClick, index, removeItem, id, editItem } = this.props;

    return (
      <li className="todoitem">
        <div className="options">
          <button onClick={() => handleClick(index)} className={todo.done ? 'options-undo' : 'options-complete'}></button>
        </div>
        <div className="todoitem__text">
          <input 
            style = {{textDecoration: todo.done ? 'line-through' : 'none'}} 
            onChange = {editItem}
            value = {todo.value}
          />
        </div>
        <div className="remove">
          <button onClick={() => removeItem(id)} className="remove__btn"></button>
        </div>
      </li>
    )
  }
}