'use client';
import React, { useEffect, useRef, useState } from 'react';
import data from '../../../data/innerpages/portfolio/latestcases';
// import mixitup from 'mixitup';
function LatestCases() {
  
  return (
    <section className="tc-latest-cases-style1">
      <div className="container">
        <div className="content">
          <h3 className="fsz-45 text-capitalize mb-90 js-splittext-lines">
            Latest Projects
          </h3>
          <div className="cases">
            <div
              className="filter mb-60 wow fadeInUp slow"
              data-wow-delay="0.2s"
            >
              <div className="links">
                <a
                  // onClick={() => handleFilterClick('All')}
                  // className={`filter-btn ${
                  //   activeFilter === 'All' ? 'active' : ''
                  // }`}
                  // href="#0"
                  // data-filter="*"
                >
                  All
                </a>
                <a
                  // href="#0"
                  // onClick={() => handleFilterClick('Completed')}
                  // className={`filter-btn ${
                  //   activeFilter === 'Completed' ? 'active' : ''
                  // }`}
                  // data-filter=".Completed"
                >
                  Completed
                </a>
                <a
                  // href="#0"
                  // onClick={() => handleFilterClick('Ongoing')}
                  // className={`filter-btn ${
                  //   activeFilter === 'Ongoing' ? 'active' : ''
                  // }`}
                  // data-filter=".Ongoing"
                >
                  Ongoing
                </a>
                <a
                  // href="#0"
                  // onClick={() => handleFilterClick('Upcoming')}
                  // className={`filter-btn ${
                  //   activeFilter === 'Upcoming' ? 'active' : ''
                  // }`}
                  // data-filter=".Upcoming"
                >
                  Upcoming
                </a>
                {/* <a
                  href="#0"
                  onClick={() => handleFilterClick('Furniture')}
                  className={`filter-btn ${
                    activeFilter === 'Furniture' ? 'active' : ''
                  }`}
                  data-filter=".Furniture"
                >
                  Furniture
                </a> */}
              </div>
            </div>
            <div
              className="cases-content wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row mixitup" >
                {data.map((item, i) => (
                  <div key={i} className={`col-lg-4 mix-item ${item.status}`}>
                    <div className="case-card">
                      {/* <a href={item.img} className="img" data-fancybox="cases"> */}
                      <a className="img">
                        <img src={item.img} alt="" className="img-cover" />
                      </a>
                      <div className="info">
                        <div className="tags mb-30">
                          <a href="#"> {item.subTitle.split('<br />')[0]} </a>
                          {item.subTitle.split('<br />')[1] && (
                            <a href="#"> {item.subTitle.split('<br />')[1]} </a>
                          )}
                        </div>
                        <h3 className="title fsz-35 mb-20">
                          <a href="#" className="hover-orange1">
                            {item.title}
                          </a>
                        </h3>
                        <div className="text color-666">
                          {item.desc.split('<br />')[0]}
                          <br /> {item.desc.split('<br />')[1]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fal fa-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      15
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fal fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestCases;
