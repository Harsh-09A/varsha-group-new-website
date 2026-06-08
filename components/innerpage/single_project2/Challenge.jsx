import React from "react";

function Challenge() {
  return (
    <section className="tc-challenge-style2 pt-5">
      <div className="container text-center">
        <h3 className="fsz-45 text-capitalize  mb-10 js-splittext-lines">
          Gallery
        </h3>
        <div
          className="text fsz-24 mb-50 wow fadeInUp slow"
          data-wow-delay="0.2s"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          inventore.
        </div>
      </div>
      <div className="content float_box_container">
        <div className="challenge-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="case-card">
                <a className="img">
                  <img
                    src="/uploads/project_imgs/Sapphire_01.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="case-card">
                <a className="img">
                  <img
                    src="/uploads/project_imgs/Sapphire_02.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="case-card">
                <a className="img">
                  <img
                    src="/uploads/project_imgs/Sapphire_03.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="case-card">
                <a className="img">
                  <img
                    src="/uploads/project_imgs/Sapphire_04.jpg"
                    alt=""
                    className="img-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="float-cursor float_box">
          Hold <br /> and Drag
        </div>
      </div>
    </section>
  );
}

export default Challenge;
