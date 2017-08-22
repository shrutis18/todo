import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className ="main">
      <h1>TODO APP</h1>
      <AddItem/>
      <DisplayTodo/>
      </div>
    );
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <div className ="container">
      <input type = "text"/>
      <button onClick>ADD</button>
      </div>
    )
  }
}

class DisplayTodo extends React.Component {
  render() {
    return (
      <div className ="displayTodo">
        <table><th>TODOS</th></table>
        </div>
    )
  }
}

export default App;
