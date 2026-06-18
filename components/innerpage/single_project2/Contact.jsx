import React from "react";

function Contact({ data }) {
  return (
    <section className="tc-contact-style2" id="project_contact_section" >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h3 className="fsz-45 fw-500">Let us helps build your dream!</h3>

              <h6 className="fsz-21 fw-400 mt-50 d-flex align-items-center gap-2">
                <i className="fas fa-phone "></i>
                {data.contact_number}
              </h6>

              <p className="fsz-14 color-666 mt-15"> <b className="text-black">Site Address :</b> {data.site_address}</p>

              <div className="d-flex gap-3 mt-4">
                {/* Call Button */}
                <a
                  href={`tel:${data.contact_number}`}
                  className="btn btn-dark bg-orange1 rounded-pill border-0"
                >
                  <i className="fas fa-phone me-2"></i>
                  Call Now
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${data.contact_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-pill"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action=""
              className="form mt-5 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      Full name <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      email address <span className="color-orange1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      Phone <span className="color-999"> (optional) </span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="">
                      subject <span className="color-orange1"> * </span>
                    </label>
                    <select name="" id="" className="form-select form-control">
                      <option value=""> Select a subject </option>
                      <option value=""> subject 1 </option>
                      <option value=""> subject 2 </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-30">
                    <label htmlFor=""> message </label>
                    <textarea
                      rows="5"
                      placeholder="Write your message here"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-40"
              >
                <span>
                  Send Your Message
                  <i className="fal fa-arrow-up-right ms-2"></i>
                </span>
              </a>
              <p className="fsz-12 color-666 mt-20">
                By summiting, i’m agree to the
                <a href="#" className="color-000 text-decoration-underline">
                  Terms & Conditions
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="pb-5"></div>
      {/* <div className="marq-content float_box_container">
        <div className="marq-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="#"> Next Cases </a>
            </div>
            <div className="swiper-slide">
              <a href="#"> Next Cases </a>
            </div>
            <div className="swiper-slide">
              <a href="#"> Next Cases </a>
            </div>
          </div>
          <div className="float-cursor float_box">
            <i className="icon fat fa-arrow-up-right"></i>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Contact;
