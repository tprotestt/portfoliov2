import React,{Component} from 'react';
import Popup from "reactjs-popup";
import Timeline from './timeline';
export default class About extends Component{
    render(){
      return (
  
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img src="img/about.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>Brennan Bunch</span></p>
                            <p><span className="title-s">Profession: </span> <span>Full Stack Developer</span></p>
                            <p><span className="title-s">Email: </span> <span>brennansbunch@gmail.com</span></p>
                            <p><span className="title-s">Phone: </span> <span>(757) 641-4470</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Programming Languages</p>
                        <span>HTML</span> <span className="pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>CSS3</span> <span className="pull-right">75%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>JS</span> <span className="pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>React</span> <span className="pull-right">50%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>Node</span> <span className="pull-right">50%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>Powershell</span> <span className="pull-right">60%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>SQL</span> <span className="pull-right">80%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-a">
                            About me
                          </h5>
                        </div>
                        <p className="lead">
                          Hello! My name is Brennan Bunch. You can call me B. I have been working in a Web Developer role for the last 7 years,
                          and have worked in Information Technology for the last decade. I received my Bachelor's of Science in Information Systems from Christopher Newport University.
                        </p>
                        <p className="lead">
                          As a web developer, I expanded my programming knowledge gained from my education by building custom, responsive, and mobile friendly custom web applications and websites.
                          I have a talent for identifying business processes that could be streamlined or automated by the use of custom web applications.
                          I am proficient in the fundamentals of web devlopment, however I am currently in the process of expanding my skillset to other technologies. See my projects below!
                        </p>
                        <p className="lead">
                          So there's more to life than programming, right? When I'm not working on code, I enjoy skateboarding, camping, hiking, shooting film photography, and travelling. I also spent
                          four years of my 20's in competitive Powerlifting. I achieved an Elite Total between squat, bench, and deadlift movements of 1490lbs. My strongest feat being a 600lb squat at 193lbs bodyweight. 
                          I assisted in coaching other competitive athletes, both in training and competition. I can also kickflip about 60% of the time I try to.
                        </p>
                        
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          <Popup trigger={<button type="button" class="btn btn-primary"> My Professional Timeline</button>} position="center">
            <div className="col-xs-12 "><Timeline></Timeline></div>
          </Popup>
        </section>
      );
    }
  };

