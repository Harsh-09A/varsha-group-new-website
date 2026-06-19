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
                        <a href="#">+91 85919 55744</a>
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
              <a href="https://www.facebook.com/VarshaGroupDevelopers/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/varshagroup/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://web.whatsapp.com/send?phone=919321255744&text=Hello%21%20I%20would%20like%20to%20visit%20your%20project.">
                <i className="fab fa-whatsapp"></i>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
