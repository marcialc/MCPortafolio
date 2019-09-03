import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    let Data = this.props.Data;
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
            {Data.education &&
              Data.education.map(item => {
                return (
                  <div>
                    <h2>{item.UniversityName}</h2>
                    <p className="major">
                      {item.major}
                      <br />
                      <p className="date">
                        Expected Graduation Date: {item.endDate}
                      </p>
                    </p>
                  </div>
                );
              })}
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
              Data.work.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h2>
                        {item.CompanyName}{" "}
                        <em
                          style={{
                            fontSize: 12,
                            paddingLeft: 30
                          }}
                        >
                          {item.startDate} - {item.endDate}
                        </em>
                      </h2>

                      <p className="title">{item.title}</p>
                      <p className="date"> {item.description}</p>
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
            <p>{Data.skillsDescription}</p>

            <div className="bars">
              <ul className="programmminglanguages">
                {Data.programmminglanguages &&
                  Data.programmminglanguages.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
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
