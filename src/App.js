import React, { Component } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Experience />
      </div>
    );
  }
}

export default App;
