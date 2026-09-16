"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { getImageUrl } from "@/lib/image-url";

function FilterPosts({ posts, totalPages = 1, currentPage = 1 }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? posts
      : posts.filter((item) => item.subTitle === activeFilter);

  return (
    <section className="tc-filter-posts-style1 container">
      <div className="posts-content">
        <div className="row">
          <AnimatePresence initial={false}>
            {filteredData.map((item) => (
              <motion.div
                key={item.id || item.title}
                layout
                layoutId={`post-${item.id || item.title}`}
                className="col-lg-4"
                transition={{
                  layout: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <div
                  className="post-card mt-70 wow fadeInUp slow"
                  data-wow-delay="0.2s"
                >
                  <a
                    href={`/blogs/${item.slug}`}
                    className="img th-280 radius-7 overflow-hidden d-block"
                  >
                    <img
                      src={
                        getImageUrl(item.coverImage) ||
                        "/placeholder-image.png"
                      }
                      alt={item.title}
                      className="img-cover"
                    />
                  </a>

                  <div className="info pt-30">
                    <div className="tags color-666 text-uppercase fsz-12">
                      <a href="#" className="color-orange1">
                        {item.category || "General"}
                      </a>

                      <span className="circle icon-3 bg-666 rounded-circle mx-3"></span>

                      <a href="#">
                        {new Date(item.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </a>
                    </div>

                    <h3 className=" mt-15">
                      <a
                        href={`/blogs/${item.slug}`}
                        className="hover-orange1 fsz-24"
                      >
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

      {totalPages > 1 && activeFilter === "All" && (
        <div className="pagination-wrap d-flex justify-content-center align-items-center gap-2 mt-50">
          <Link
            href={`/blogs?page=${currentPage - 1}`}
            className={`btn btn-sm ${
              currentPage <= 1 ? "disabled pe-none opacity-50" : ""
            }`}
            aria-disabled={currentPage <= 1}
          >
            Prev
          </Link>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Link
              key={num}
              href={`/blogs?page=${num}`}
              className={`btn btn-sm ${
                num === currentPage ? "active fw-bold" : ""
              }`}
            >
              {num}
            </Link>
          ))}

          <Link
            href={`/blogs?page=${currentPage + 1}`}
            className={`btn btn-sm ${
              currentPage >= totalPages ? "disabled pe-none opacity-50" : ""
            }`}
            aria-disabled={currentPage >= totalPages}
          >
            Next
          </Link>
        </div>
      )}
    </section>
  );
}

export default FilterPosts;