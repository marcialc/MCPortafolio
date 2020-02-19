import React, { Component } from "react";
import Data from "../Data";

export default class Experience extends Component {
  render() {
    return (
      <section id="experience">
        {/* Education Section */}
        <div className="row education">
          <div className="three columns header-col">
          <h1>
              <span>education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div>
              <h2>Florida International University (FIU)</h2>
              <div className="major">
                B.S Computer Science
                <br />
                <p className="date">
                  Expected Graduation Date: Fall 2019 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {Data.work &&
              Data.work.map(work => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h2>
                        {work.CompanyName}{" "}
                        <em
                          style={{
                            fontSize: 12,
                            paddingLeft: 30
                          }}
                        >
                          {work.startDate} - {work.endDate}
                        </em>
                      </h2>

                      <p className="title">{work.title}</p>
                      <p className="date"> {work.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>


        {/* Projects Section */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>projects</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            {Data.projects &&
              Data.projects.map(project => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h2>
                        {project.title}{" "}
                        <em
                          style={{
                            fontSize: 12,
                            paddingLeft: 30
                          }}
                        >
                          {project.date}
                        </em>
                      </h2>

                      <p className="title">{project.name}</p>
                      <p className="date"> {project.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>



        {/* Programming Languages Section */}
        <div className="row skill">
          <div className="three columns header-col">
          <h1>
              <span>
                Programming
                <p />
                Languages
              </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul>
                {Data.programmminglanguages &&
                  Data.programmminglanguages.map(lang => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${lang.skillname.toLowerCase()}`}
                        ></span>
                        <em>{lang.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
