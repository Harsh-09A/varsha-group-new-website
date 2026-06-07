'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import data from '../../../data/innerpages/blog/filter';

function FilterPosts() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredData =
    activeFilter === 'All'
      ? data
      : data.filter((item) => item.subTitle === activeFilter);

  return (
    <section className="tc-filter-posts-style1">
      <div className="container">
        <div className="filter-row wow fadeInUp slow" data-wow-delay="0.2s">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="filter">
                <div className="links">

                  <button
                    className={`filter-btn ${
                      activeFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter('All')}
                  >
                    All
                  </button>

                  <button
                    className={`filter-btn ${
                      activeFilter === 'news' ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter('news')}
                  >
                    News
                  </button>

                  <button
                    className={`filter-btn ${
                      activeFilter === 'Architecture' ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter('Architecture')}
                  >
                    Architecture
                  </button>

                  <button
                    className={`filter-btn ${
                      activeFilter === 'Interior' ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter('Interior')}
                  >
                    Interior
                  </button>

                  <button
                    className={`filter-btn ${
                      activeFilter === 'guide' ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter('guide')}
                  >
                    Guide
                  </button>

                  <button
                    className={`filter-btn ${
                      activeFilter === 'inspiration' ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter('inspiration')}
                  >
                    Inspiration
                  </button>

                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 mt-5 mt-lg-0">
              <div className="search-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search in blog"
                />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="posts-content">
          <div className="row">

            <AnimatePresence initial={false}>
              {filteredData.map((item, i) => (
                <motion.div
                  key={item.id || item.title}
                  layout
                  layoutId={`post-${item.id || item.title}`}
                  className="col-lg-4"
                  transition={{
                    layout: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                >
                  <div
                    className="post-card mt-70 wow fadeInUp slow"
                    data-wow-delay="0.2s"
                  >
                    <a
                      href={`/blogs/${item.title}`}
                      className="img th-280 radius-7 overflow-hidden d-block"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="img-cover"
                      />
                    </a>

                    <div className="info pt-30">
                      <div className="tags color-666 text-uppercase fsz-12">
                        <a href="#" className="color-orange1">
                          {item.subTitle}
                        </a>

                        <span className="circle icon-3 bg-666 rounded-circle mx-3"></span>

                        <a href="#">{item.history}</a>
                      </div>

                      <h3 className="title mt-15">
                        <a href={`/blogs/${item.title}`} className="hover-orange1 fsz-24">
                          {item.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          </div>
        </div>

        <div
          className="text-center wow fadeInUp slow"
          data-wow-delay="0.2s"
        >
          <a
            href="#"
            className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1 mt-100 px-5"
          >
            <span>Load More (6)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FilterPosts;