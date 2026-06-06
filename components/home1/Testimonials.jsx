import React from 'react';

function Testimonials() {
  return (
    <section className="tc-testimonials-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h6 className="fsz-18 text-uppercase lh-4">
              what clients say <br /> about us
            </h6>
            <div className="lg-icon color-orange1">
              <i className="la la-quote-right"></i>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tc-clients-style1">
              <div className="clients-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “One of the renowned builder in Navi Mumbai for best quality and workmanship taking lifestyle to the max level of magnificence trustworthy to buy property.”
                      </div>
                      <div className="author">
                        {/* <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div> */}
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Subhash Mahekar
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Bandra, Mumbai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “Quality, design n timely project completion is the main focus of the group. Very amicable and supporting attitude of all the group members. Wishing all the best for all future projects.”
                      </div>
                      <div className="author">
                        {/* <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div> */}
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                            Praveen Kumar Joshi
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Kharghar, Navi Mumbai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="clients-card">
                      <div className="text fsz-45 fw-600 lh-2 js-splittext-lines">
                        “Great place to stay at affordable price, perfect flats with proper ventilation and space. Gives you good ambience with swimming pool, Gym, garden, children play area etc.”
                      </div>
                      <div className="author">
                        {/* <div className="au-img">
                          <img
                            src="/home1/assets/img/team/team1.jpg"
                            alt=""
                            className="img-cover"
                          />
                        </div> */}
                        <div className="au-inf">
                          <h6 className="text-capitalize mb-2 fsz-16 fw-bold">
                           Manisha Choudhary
                          </h6>
                          <p className="text-capitalize fsz-14 color-666">
                            Panvel, Navi Mumbai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marq-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#"> Trustworthy </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Visionary </a>
          </div>
          <div className="swiper-slide">
            <a href="#"> Exceptional </a>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line3.png" alt="" className="c-line" />
    </section>
  );
}

export default Testimonials;
