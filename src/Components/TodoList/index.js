import React, { Component } from 'react';
import TodoItem from "../TodoItem";
import './style.css';

export default class TodoList extends Component {

  render() {
    const { todos, handleClick } = this.props;
    return (
      <main className="main">
        <ul>
            {todos.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  handleClick={handleClick}
                />
              )
            })}
        </ul>
      </main>
    )
  }
}