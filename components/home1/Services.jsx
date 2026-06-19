import React from "react";

function Services() {
  return (
    <>
      <section className="tc-services-style1">
        <div className="content section-padding section-padding-x pt-1">
          <div className="container">
            <div className="title mb-50 text-center">
              <p className="color-666 text-uppercase wow"> Why Choose Us </p>
            </div>
            <div className="services">
              <div className="row">
                <div className="col-lg-3">
                  <a
                    href="#"
                    className="service-card wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <i className="la la-home"></i>
                    </div>
                    <h5 className="fsz-24 mb-20"> Professionalism </h5>
                    <div className="img">
                      <img
                        src="/varsha/Varsha-Group-Home-Page-professionalism.png"
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="text color-666 mt-50">
                      Our conduct, behavior and attitude is targeting towards
                      achieving great professionalism in the work.
                    </div>
                    {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                  </a>
                </div>
                <div className="col-lg-3">
                  <a
                    href="#"
                    className="service-card mt-150 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <i className="la la-clock"></i>
                    </div>
                    <h5 className="fsz-24 mb-20">Timely Delivery</h5>
                    <div className="img">
                      <img
                        src="/varsha/Varsha-Group-Home-Page-timely-delivery.png"
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="text color-666 mt-50">
                      The timeframes - both projected and real defines and sets
                      help us deliver our every project, on time
                    </div>
                    {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                  </a>
                </div>
                <div className="col-lg-3">
                  <a
                    href="#"
                    className="service-card wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon">
                      <i className="la la-thumbs-up"></i>
                    </div>
                    <h5 className="fsz-24 mb-20"> Excellent Quality </h5>
                    <div className="img">
                      <img
                        src="/varsha/Varsha-Group-Home-Page-Excellent-Quality.jpg"
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="text color-666 mt-50">
                      With care, precision and quality that we have built every
                      home, carries our legacy.
                    </div>
                    {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                  </a>
                </div>
                <div className="col-lg-3">
                  <a
                    href="#"
                    className="service-card mt-150 wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="icon">
                      <i className="la la-comments"></i>
                    </div>
                    <h5 className="fsz-24 mb-20">Transparency & Innovation</h5>
                    <div className="img">
                      <img
                        src="/varsha/Varsha-Group-Home-Page-inovation.png"
                        alt=""
                        className="img-cover"
                      />
                    </div>
                    <div className="text color-666 mt-50">
                      Transparency and innovation drives our team’s performance,
                      create accountability and better communication and
                      delivers what was promised.
                    </div>
                    {/* <span className="arrow">
                    <i className="ti-arrow-top-right"></i>
                  </span> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="butn rounded-pill mt-80 hover-bg-black bg-orange1 text-white"
              >
                <span>
                  Get A Free Consultation
                  <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="ser-img">
        <img src="/varsha/Varsha-Group-Skyline.jpeg" alt="" />
      </div>
    </>
  );
}

export default Services;
