import React, { Component } from 'react'

export default class Home extends Component{
    render() {
      return (
        <div>
          <div id="hero" className="hero route bg-image" style={{backgroundImage: 'url(img/heroImg.jpg)'}}>
            <div className="overlay-itro" />
            <div className="hero-content display-table">
              <div className="table-cell">
                <div className="container">
                  <h1 className="hero-title mb-4">B. Bunch</h1>
                  <p className="hero-subtitle"><span className="typed" data-typed-items="Developer, Photographer, Videographer, Editor, Digital Artist, Coach, Skateboarder, Designer"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
