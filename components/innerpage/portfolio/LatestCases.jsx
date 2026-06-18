"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import data from "../../../data/innerpages/portfolio/latestcases";
import CaseCard from "./CaseCard"


function LatestCases({ data }) {
  const [activeFilter, setActiveFilter] = useState("ongoing");

  const filteredData = data.filter((item) => item.status === activeFilter);

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
                    activeFilter === "completed" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("completed")}
                >
                  Completed
                </button>

                <button
                  type="button"
                  className={`filter-btn ${
                    activeFilter === "ongoing" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("ongoing")}
                >
                  Ongoing
                </button>

                <button
                  type="button"
                  className={`filter-btn ${
                    activeFilter === "upcoming" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("upcoming")}
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
                <AnimatePresence initial={false}>
                  {filteredData.map((item, i) => (
                    <motion.div
                      key={item.id || i}
                      layout="position"
                      layoutId={item.title}
                      className={`col-lg-4 ${item.status}`}
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
                        duration: 0.6,
                        ease: "easeInOut",
                        layout: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                    >
                      <CaseCard item={item} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {/* <nav aria-label="Page navigation example">
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
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestCases;
