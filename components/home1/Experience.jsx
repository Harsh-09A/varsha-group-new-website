import Link from 'next/link';
import React from 'react';

function Experience() {
  return (
    <section className="tc-experience-style1 section-padding-x">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-2">
            <div className="exp-num mb-100 wow zoomIn" data-wow-delay="0.3s">
              <h5 className="fsz-18 text-uppercase">
                years of <br /> experience
              </h5>
              <h2 className="num"> 23 </h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img wow ">
              <img
                src="/varsha/Varsha-Group-Home-Page.png"
                alt=""
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="fsz-45 fw-600 mb-30"> About Varsha Group </h3>
              <div className="text fsz-20 color-666">
              Varsha Group is a forward-thinking construction and development company with a proud legacy of over 23+ years of consistent performance, trust, and customer satisfaction. With a strong foundation built on quality, integrity, and innovation, we have established ourselves as a benchmark for timely project delivery, superior construction standards, and thoughtful urban planning. Our specialisation in CIDCO Tender plots underscores our expertise and proven success in some of the most strategically important projects across Navi Mumbai.
              </div>
              <Link
                href="/about"
                className="butn rounded-pill mt-50 hover-bg-black bg-white"
              >
                <span>
                  Know More <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </Link>
            </div>
          </div>
          {/* <div className="col-lg-1">
            <div className="rotate-txt justify-content-lg-end">
              <ul>
                <li>
                  <a href="#"> hello@archinstudio.co </a>
                </li>
                <li>
                  <a href="#"> (054) 3256 78 87 </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
      <img src="/home1/assets/img/c_line.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Experience;
