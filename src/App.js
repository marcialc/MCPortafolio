import React, { Component } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Data from "./Data";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home Data={Data} />
        <About Data={Data} />
        <Experience Data={Data} />
      </div>
    );
  }
}

export default App;
