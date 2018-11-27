import React, { Component } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import './App.css';

class App extends Component {

  state = {
    inputValue: '',
    todos: [
      {value: 'learn react', done: false},
      {value: 'learn js', done: true},
    ],
  }

  _handleChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit fired');

    const newTodo = {
      value: this.state.todos,
      done: false
    }

    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos });
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
        />
      </div>
    );
  }
}

export default App;