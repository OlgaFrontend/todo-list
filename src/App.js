import React, { Component } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import './App.css';

class App extends Component {

  state = {
    inputValue: '',
    todos: [],
  }

  _handleChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: Math.random(),
      value: this.state.inputValue,
      done: false,
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
      inputValue: '',
    });
  }

  _handleClick = (index) => {
    console.log('button click', index );

    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div className="App">
        <Header 
          inputValue = {inputValue}
          handleChange = {this._handleChange}
          handleSubmit = {this._handleSubmit}
        />
        <TodoList
          todos = {todos}
          handleClick = {this._handleClick}
        />
      </div>
    );
  }
}

export default App;
