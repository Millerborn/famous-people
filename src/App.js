import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Famous People</h1>
        </header>
        <section>
          <div>
          <input onChange={this.handleChangeFor('name')} placeholder="name" />
          <input onChange={this.handleChangeFor('role')} placeholder="role" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
