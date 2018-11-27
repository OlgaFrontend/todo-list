import React, { Component } from 'react';
import TodoItem from "../TodoItem";
import './style.css';

export default class TodoList extends Component {

  render() {
    const { todos } = this.props;
    return (
      <main className="main">
        <ul>
            {todos.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  todo={todo}
                />
              )
            })}
        </ul>
      </main>
    )
  }
}