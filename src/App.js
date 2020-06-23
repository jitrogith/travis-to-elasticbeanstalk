import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME MY BRO !</h1>
        </header>
        <p className="App-intro">
          I was changed on other Branch lately :P
        </p>
      </div>
    );
  }
}

export default App;
