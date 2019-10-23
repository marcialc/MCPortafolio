import React, { Component } from "react";
import Data from "../Data";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Marcial Cabrera</h1>
              <h3>Software Engineer / Front-end Developer / Mobile Developer</h3>
              <ul className="social">
                {Data.socialLinks &&
                  Data.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
