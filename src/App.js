import React, { Component } from "react"
//TODO: import logo from './logo.svg';
import './App.css';
// import Counter from "./counter";
import Loop from "./loop"

class App extends Component {
  state = {
    a: "counter"
  }

  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Loop />
      </div>
    )
  }
}

export default App;
