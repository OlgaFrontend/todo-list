import React, { Component } from 'react';
import TodoItem from "../TodoItem";
import './style.css';

export default class TodoList extends Component {

  render() {
    const { todos, handleClick, removeItem, editItem } = this.props;
    return (
      <main className="main">
        <ul className="todolist">
            {todos.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  index={index}
                  id={todo.id}
                  todo={todo}
                  handleClick={handleClick}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              )
            })}
        </ul>
      </main>
    )
  }
}