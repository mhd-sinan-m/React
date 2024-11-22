import React, { Component } from "react";
import "./App.css";
import Todoapp from "./components/Todo";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Todoapp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
