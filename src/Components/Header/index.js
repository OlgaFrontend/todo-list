import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

  render() {
    const { inputValue, handleChange, handleSubmit } = this.props;

    return (
      <header className="header">
        <h2>Todo List</h2>
          <form className="form-group" onSubmit={(evt) => handleSubmit(evt)}>
            <input 
              className="form-group__input" 
              placeholder = "enter your new task" 
              value = {inputValue}
              onChange = {(evt) => handleChange(evt)}
            />
            <button className="form-group__btn">Add task</button>
          </form>
      </header>
    )
  }
}