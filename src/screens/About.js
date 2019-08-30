import React, { Component } from "react";
export default class About extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="assets/me2.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About</h2>
            <p>{Data.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Me</h2>
                <p className="address">
                  <span>{Data.name}</span>
                  <br></br>
                  <span>{Data.address}</span>
                  <br></br>
                  <span>{Data.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
