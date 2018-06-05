import React, { Component } from 'react';
import './App.css';
import { myObj } from "./exportThis";
import someFunc from "./exportThis"

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">importexport lesson</h1>
          <p>{myObj.name} is amazing at {myObj.occupation}</p>
          <button onClick={someFunc}>Click Me</button>
      </div>
    );
  }
}

export default App;
