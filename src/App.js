import React, { Component } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import './App.css';

class App extends Component {

  state = {
    inputValue: '',
    todos: [],
  }

  handleChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleSubmit = (evt) => {
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

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  removeItem = (id) => {
    const newTodos = [...this.state.todos].filter(v => v.id !== id);

    this.setState({
      ...this.state,
      todos: [...newTodos]
    })
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div className="App">
      <div className="App-wrapper">
        <Header 
            inputValue = {inputValue}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
        />
        <TodoList
            todos = {todos}
            handleClick = {this.handleClick}
            removeItem = {this.removeItem}
        />
      </div>
      </div>
    );
  }
}

export default App;
