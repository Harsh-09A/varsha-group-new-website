import React from "react";

function Footer() {
  return (
    <footer className="tc-footer-style1 bg-black ">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <img
                  src="/home1/assets/img/logo_new.png"
                  alt=""
                  className="img-fluid mb-3"
                />
                <div className="text fsz-20 text-white lh-3 ">
                 Varsha Group is a forward-thinking construction and development company with a proud legacy of over 23+ years of consistent performance, trust, and customer satisfaction.
                </div>
                <div className="foot-social mt-50">
                  <a href="https://www.facebook.com/VarshaGroupDevelopers/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/varshagroup/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://web.whatsapp.com/send?phone=919321255744&text=Hello%21%20I%20would%20like%20to%20visit%20your%20project.">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  {/* <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600 ">Contact Us</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">
                      1003-1004, Shelton Cubix, Plot No.87, CBD Belapur, Navi
                      Mumbai-400614
                    </a>
                  </li>
                  <li>
                    <a href="#"> sales@varshagroup.in </a>
                  </li>
                  <li>
                    <a href="#"> +91 85919 55744</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 ps-5">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600"> Buyer's Guide </h5>
                <ul className="footer-links">
                  <li>
                    <a href="/gst"> GST </a>
                  </li>
                  <li>
                    <a href="/stamp-duty"> Stamp Duty & Registration </a>
                  </li>
                  <li>
                    <a href="/loan"> Loans</a>
                  </li>
                  <li>
                    <a href="/pmay"> PMAY</a>
                  </li>
                  <li>
                    <a href="/nri"> NRI Corner</a>
                  </li>
                  <li>
                    <a href="/loan-calculator"> Loan Calculator</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot text-white">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">© 2026 Varsha Group. All Right Reserved</p>
            </div>
            <div className="col-lg-6">
              <div className="foot-links mt-4 mt-lg-0">
                <a href="/"> Home </a>
                <a href="/about"> About </a>
                <a href="/projects"> Projects </a>
                <a href="#"> Blogs </a>
                <a href="/contact"> Contact </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
