import React, { Component } from 'react';
import './styles.css';
import Homepage from './components/Homepage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Presidents Data</h1>
        </header>
        <div>
        <Homepage/>
        </div>
      </div>
    );
  }
}

export default App;
