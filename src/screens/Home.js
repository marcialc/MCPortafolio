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
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
              <div>
                  <p className="resume">
                     <a href="https://drive.google.com/file/d/1bfKh0XViy9PDcY67U_HqmGZK-ufslEX6/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>  Download Resume</a>
                  </p>
               </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
