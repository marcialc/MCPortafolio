import React, { Component } from "react";

export default class Home extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">           
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
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{Data.name}</h1>
              <h3>{Data.headline}</h3>
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
