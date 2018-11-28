import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

  render() {
    const { inputValue, handleChange } = this.props;

    return (
      <header className="header">
        <h2>Todo List</h2>
          <form className="form-group" onSubmit={(evt) => this.handleSubmit(evt)}>
            <input 
              className="input" 
              placeholder = "enter your new task" 
              value = {inputValue}
              onChange = {(evt) => handleChange(evt)}
            />
            <button>Add task</button>
          </form>
      </header>
    )
  }
}