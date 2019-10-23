import React, { Component } from "react";
import Container from 'react-bootstrap/Container';

export default class NavBar extends Component {
  render() {
    return (
          <nav id="nav-wrap">  
          <Container>         
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            </Container>
          </nav>
    );
  }
}
