import React,{Component} from 'react';
export default class Services extends Component{
    render() {
      return (
  
        <section id="services" className="services-mf pt-5 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Skills
                  </h3>
                  {/* <p class="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p> */}
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-pc-display-horizontal" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Full Stack Devlopment</h2>
                    <p className="s-description text-center">
                      Front end? Sure. Back end? You got it. System Administration? That's not in Full Stack!
                      Well, I did it in my first dev job, so I'm including it. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-people" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Collaboration</h2>
                    <p className="s-description text-center">
                      Experienced and successful in working with a lean development team, open to collaborating with larger groups too!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-columns" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Design</h2>
                    <p className="s-description text-center">
                      Mobile friendly, responsive, intuitive, and innovative layouts and designs to suit a number of different needs. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-card-image" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Graphic Design</h2>
                    <p className="s-description text-center">
                      Experienced with multiple different digital art and editing tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-code" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Programming Scalability</h2>
                    <p className="s-description text-center">
                      Codes for the long term flexibility and life span, not short term ease and completion. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-emoji-smile" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Customer Service</h2>
                    <p className="s-description text-center">
                      I paid my dues at Geek Squad.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

