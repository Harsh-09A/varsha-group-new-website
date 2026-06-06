"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../../data/innerpages/portfolio/latestcases";

function LatestCases() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((item) => item.status === activeFilter);

  return (
    <section className="tc-latest-cases-style1">
      <div className="container">
        <div className="content">
          <h3 className="fsz-45 text-capitalize mb-90 js-splittext-lines">
            Latest Projects
          </h3>

          <div className="cases">
            {/* Filters */}
            <div
              className="filter mb-60 wow fadeInUp slow"
              data-wow-delay="0.2s"
            >
              <div className="links">
                <button
                  type="button"
                  className={`filter-btn ${
                    activeFilter === "All" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("All")}
                >
                  All
                </button>

                <button
                  type="button"
                  className={`filter-btn ${
                    activeFilter === "Completed" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("Completed")}
                >
                  Completed
                </button>

                <button
                  type="button"
                  className={`filter-btn ${
                    activeFilter === "Ongoing" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("Ongoing")}
                >
                  Ongoing
                </button>

                <button
                  type="button"
                  className={`filter-btn ${
                    activeFilter === "Upcoming" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("Upcoming")}
                >
                  Upcoming
                </button>
              </div>
            </div>

            {/* Projects */}
            <div
              className="cases-content wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <AnimatePresence mode="popLayout">
                  {filteredData.map((item, i) => (
                    <motion.div
                      key={`${item.title}-${i}`}
                      layout
                      initial={{
                        opacity: 0,
                        y: 40,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -40,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                        layout: {
                          duration: 0.5,
                        },
                      }}
                      className={`col-lg-4 ${item.status}`}
                    >
                      <div className="case-card">
                        <div className="img">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="img-cover"
                          />
                        </div>

                        <div className="info">
                          <div className="tags mb-30">
                            <a href="#">{item.subTitle.split("<br />")[0]}</a>

                            {item.subTitle.split("<br />")[1] && (
                              <a href="#">{item.subTitle.split("<br />")[1]}</a>
                            )}
                          </div>

                          <h3 className="title fsz-35 mb-20">
                            <a href="#" className="hover-orange1">
                              {item.title}
                            </a>
                          </h3>

                          <div className="text color-666">
                            {item.desc.split("<br />")[0]}
                            {item.desc.split("<br />")[1] && (
                              <>
                                <br />
                                {item.desc.split("<br />")[1]}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
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
