import React from "react";

function Process() {
  return (
    <>
      <section className="tc-process-style2">
        <div className="container">
          <h2 className="fsz-45 fw-500 mb-80 text-center">
            Our
            <span className="sub-font fst-italic color-orange1 fw-400 ms-3">
              Philosophy
            </span>
          </h2>
          <div className="content">
            <div className="row">
              <div className="col-lg-5">
                <div className="accordion-side wow fadeInUp slow">
                  <div className="accordion" id="accordionProcess">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                        >
                          <span className="num"> 1 / </span>{" "}
                          <h3> OUR VISION </h3>
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            "Our vision is to redefine the real estate industry
                            by creating innovative, sustainable, and
                            value-driven structures that enrich lives and
                            communities. We aspire to be the preferred choice
                            for our customers, known for our exceptional
                            quality, customer-centric approach, and unwavering
                            commitment to delivering projects on time. With a
                            focus on continuous improvement and embracing
                            cutting-edge technologies, we aim to set new
                            benchmarks in the industry and build a legacy of
                            excellence that inspires trust and admiration."
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                        >
                          <span className="num"> 2 / </span>{" "}
                          <h3> OUR MISSION </h3>
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            Our mission is to surpass the expectations of our
                            homebuyers and investors by consistently delivering
                            the highest quality services and lifestyle. We are
                            committed to upholding our core values of trust,
                            transparency, reliability, and timeliness in every
                            endeavour we undertake. By staying ahead of market
                            trends, we aim to proactively incorporate innovative
                            features, amenities, and solutions in each of our
                            projects. With a customer-centric approach, we
                            strive to create homes that not only meet but exceed
                            the evolving needs and aspirations of our valued
                            customers.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                        >
                          <span className="num"> 3 / </span>{" "}
                          <h3> OUR VALUES </h3>
                        </button>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            Our values are rooted in trust, transparency,
                            reliability, and excellence. We are committed to
                            delivering quality developments on time while
                            maintaining the highest standards of integrity and
                            customer satisfaction. By embracing innovation and
                            understanding the evolving needs of our customers,
                            we strive to create exceptional living spaces that
                            inspire confidence and enhance lifestyles.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                      >
                        <span className="num"> 4 / </span> <h3> Handover </h3>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.
                        </div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                  <a
                    href="/contact"
                    className="butn bg-white rounded-pill mt-50 hover-bg-black"
                  >
                    <span>
                      Connect With Us
                      <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="imgs">
                  <div className="img" data-lag="0.2">
                    <img
                      src="/innerpages/assets/img/process/proc1.jpg"
                      alt=""
                      className="img-cover"
                    />
                    <span className="txt sub-font"> Design </span>
                  </div>
                  <div className="img" data-lag="0.4">
                    <img
                      src="/innerpages/assets/img/process/proc2.jpg"
                      alt=""
                      className="img-cover"
                    />
                    <span className="txt sub-font"> Handover </span>
                  </div>
                  <div className="img" data-lag="0.3">
                    <img
                      src="/innerpages/assets/img/process/proc3.jpg"
                      alt=""
                      className="img-cover"
                    />
                    <span className="txt sub-font"> Survey </span>
                  </div>
                  <div className="img" data-lag="0.5">
                    <img
                      src="/innerpages/assets/img/process/proc4.jpg"
                      alt=""
                      className="img-cover"
                    />
                    <span className="txt sub-font"> Implement </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/innerpages/assets/img/prc_bg.png"
          alt=""
          className="bg"
          data-speed="1.2"
        />
      </section>
    </>
  );
}

export default Process;
