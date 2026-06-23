import React from "react";

function About() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-1">
            <div className="rotate-box" data-speed="1" data-lag="0.4">
              <a
                href="#"
                className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
              >
                <svg className="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path
                      id="textcircle"
                      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    ></path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900">
                      NAVI MUMBAI - DEVELOPER -
                    </textPath>
                  </text>
                </svg>
              </a>
              <img
                src="/innerpages/assets/img/leafs.png"
                alt=""
                className="icon"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="info wow fadeInUp slow text-justify" data-wow-delay="0.2s">
              <div className="text fsz-20 ">
                Varsha Group is a forward-thinking construction and development
                company with a proud legacy of over 23+ years of consistent
                performance, trust, and customer satisfaction. With a strong
                foundation built on quality, integrity, and innovation, we have
                established ourselves as a benchmark for timely project
                delivery, superior construction standards, and thoughtful urban
                planning. Our specialisation in CIDCO Tender plots underscores
                our expertise and proven success in some of the most
                strategically important projects across Navi Mumbai.
              </div>
              <div className="text fsz-20 pt-2">
                Our journey is guided by the visionary leadership of our Founder
                and Chairman, Shri Mohan Singh T. Choudhary, whose foresight and
                dedication laid the cornerstone of the Group’s enduring success.
                This legacy continues through the dynamic leadership of Mr.
                Sunil B. Choudhary, Managing Director, and Mr. Bharat M.
                Choudhary, Director. Together, they uphold our mission to exceed
                expectations by delivering not just structures, but meaningful
                experiences.
              </div>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="numbers mt-5 mt-lg-0">
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.4s"
              >
                <h2 className="numb"> 95% </h2>
                <small> Clients Satisfied and repeating </small>
              </div>
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.6s"
              >
                <h2 className="numb"> 20+ </h2>
                <small> projects done </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
