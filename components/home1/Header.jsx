import React from "react";
import data from "../../data/home1/header-slider";
function Header() {
  return (
    <header className="tc-header-style1">
      <div className="header-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-card">
              <div className="img">
                <video className="img-cover" autoPlay muted loop playsInline>
                  <source src={data[0].video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>


        </div>
        {/* <div className="slider-controls">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className="swiper-pagination"></div> */}
      </div>
    </header>
  );
}

export default Header;
