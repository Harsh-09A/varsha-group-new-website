import React from "react";

function Points() {
  return (
    <>
      <section className="tc-process-style2 custom_bg">
        <div className="container">
          <h2 className="fsz-45 fw-500 mb-80 text-center">
            Real Estate Taxation Under
            <span className="sub-font fst-italic color-orange1 fw-400 ms-3">
              GST
            </span>
          </h2>
          <div className="content">
            <div className="row">
              <div className="col-lg-7">
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
                          <h3> Simplified Tax Structure </h3>
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            GST has streamlined the real estate taxation system
                            by replacing multiple indirect taxes such as VAT and
                            Service Tax with a single, transparent tax
                            framework.
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
                          <h3> GST on Under-Construction Properties </h3>
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            Under-construction residential properties attract
                            GST at an effective rate of 5%, making the tax
                            structure easier for homebuyers to understand.
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
                          <h3> No GST on Completed Properties </h3>
                        </button>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            Properties that have received a Completion
                            Certificate (CC) or Occupation Certificate (OC) are
                            exempt from GST, reducing the overall cost for
                            buyers.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                        >
                          <span className="num"> 4 / </span>{" "}
                          <h3> Input Tax Credit (ITC) Awareness </h3>
                        </button>
                      </div>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            Homebuyers should be aware of Input Tax Credit (ITC)
                            provisions and the project's construction status, as
                            these factors can influence the overall tax
                            implications.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                        >
                          <span className="num"> 5 / </span>{" "}
                          <h3> Unchanged Stamp Duty & Registration </h3>
                        </button>
                      </div>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionProcess"
                      >
                        <div className="accordion-body">
                          <div className="text">
                            GST does not affect stamp duty and registration
                            charges. These costs continue to be levied
                            separately by state governments and must be paid in
                            addition to the property price.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-5">
                <div className="imgs">
                  <div className="img" data-lag="0.2">
                    <img
                      src="/innerpages/assets/img/process/proc1.jpg"
                      alt=""
                      className="img-cover"
                    />
                    <span className="txt sub-font"> TAX </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="/innerpages/assets/img/prc_bg.png"
          alt=""
          className="bg"
          data-speed="1.2"
        /> */}
      </section>

    </>
  );
}

export default Points;
