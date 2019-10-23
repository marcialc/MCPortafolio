import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="assets/me2.jpg" alt="me" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Currently a Senior in Florida International University (FIU) Pursing a Bachelors of Science in Computer Science. Very passionated about about my field and whats to come and the new tehcnologies and challenges it brings.</p>
          </div>
        </div>
      </section>
    );
  }
}