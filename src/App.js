import React, { Component } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Contact from "./screens/Contact";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
