import React, { Component } from "react";
import Experience from "./Experience";

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="assets/me2.jpg" alt="me" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>Florida International University (FIU) Alumni with a Bachelors of Science in Computer Science. Very passionated about about my field and whats to come and the new tehcnologies and challenges it brings.</p>
            </div>
          </div>
        </section>
        <Experience />
      </div>
    );
  }
}