import React,{Component} from 'react';
export default class Testimonial extends Component{
    render() {
      return (
  
        <div className="testimonials paralax-mf bg-image" style={{backgroundImage: 'url(assets/img/overlay-bg.jpg)'}}>
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img src="img/testimonial-3.jpg" alt="" className="rounded-circle b-shadow-a" />
                          <span className="author">Michael Keaton</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            I once saw B squat over 3 times his bodyweight and not throw up afterwards. 
                          </p>
                        </div>
                      </div>
                    </div>{/* End testimonial item */}
                    <div className="swiper-slide">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img src="img/testimonial-1.jpg" alt="" className="rounded-circle b-shadow-a" />
                          <span className="author">Keanu Reeves</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            A pretty cool guy. The kind of guy you could grab a beer with. Also, crazy stunt moves.
                          </p>
                        </div>
                      </div>
                    </div>{/* End testimonial item */}
                  </div>
                  <div className="swiper-pagination" />
                </div>
                {/* <div id="testimonial-mf" class="owl-carousel owl-theme">
            
          </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

 