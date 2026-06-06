import React from "react";

function ContactInfo() {
  return (
    <section className="tc-contact-info-style1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info-cards">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Address </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">
                          1003-1004, Shelton Cubix, Plot No.87, CBD Belapur,
                          Navi Mumbai-400614
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item mt-50">
                    <h6 className="fsz-24 mb-15 fw-bold"> Connect </h6>
                    <ul className="color-666 lh-6">
                      <li>
                        <a href="#">(022) 27565742 /43</a>
                      </li>
                      <li>
                        <a href="#"> +91 9321255744</a>
                      </li>
                      <li>
                        <a href="#"> sales@varshagroup.in </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social-icons mt-50 text-lg-end">
              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
