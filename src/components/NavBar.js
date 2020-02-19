import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default class NavBar extends Component {

  state = {
    isSwitchOn: 0,
  }

  render() {
    console.log(this.state.isSwitchOn)
    
    return (
          <nav id="nav-wrap">  
          <Container style={{margin:"0"}}>         
            <ul id="nav" className="nav">
              <li>
                <Link 
                className={this.state.isSwitchOn === 1 ? "targetOn " : "targetOff"}
                onClick = { () => this.setState({isSwitchOn: 1}) }
                to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                className={this.state.isSwitchOn === 2 ? "targetOn " : "targetOff"}
                onClick = { () => this.setState({isSwitchOn: 2}) }
                to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link 
                className={this.state.isSwitchOn === 3 ? "targetOn " : "targetOff"}
                onClick = { () => this.setState({isSwitchOn: 3}) }
                to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            </Container>
          </nav>
    );
  }
}
