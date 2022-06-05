import React, { Component } from 'react'
export default class Navbar extends Component {
  
  render() { 
    return (
    <div>
      <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html">BB</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Skills</a></li>
              <li><a className="nav-link scrollto " href="#work">Work</a></li>
              <li><a className="nav-link scrollto " href="#gallery">Gallery</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>
    </div>
    );
  }
}

