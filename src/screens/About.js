import React, { Component } from "react";

export const age = (born, today) => {
  return today - born;
}

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="assets/me2.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Currently a Senior in Florida International University (FIU) Pursing a Bachelors of Science in Computer Science. Very passionated about about my field and whats to come and the new tehcnologies and challenges it brings.</p>
            <p>I'm {age(1995, 2019)} years old</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact</h2>
                <p className="address">
                  <span>Marcial Cabrera</span>
                  <br></br>
                  <span>Miami, FL</span>
                  <br></br>
                  <span>marcialandres06@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
