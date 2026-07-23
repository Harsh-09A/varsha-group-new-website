import React from 'react';
import data from '../../../data/innerpages/about/awards';
function Awards() {
  return (
    <section className="tc-awards-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 text-center mb-30">
          Our 
          <span className="sub-font fst-italic color-orange1 fw-400 ps-2">
            Associates
          </span>
        </h2>
        <div className="awards">
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div
                  className="award-card wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <div className="logo">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="fsz-24 sub-font title">{item.title}</h5>
                  <a href={item.subTitle} className="color-666 text-capitalize">
                    View Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
