import React from "react";
import Link from "next/link";
import { getHomeBlogs } from "@/services/blogs-frontend";
import { getImageUrl } from "@/lib/image-url";
export const dynamic = "force-dynamic";

async function Blog() {
  const blogs = await getHomeBlogs();

  if (!blogs.length) return null;

  return (
    <section className="tc-blog-style1">
      <div className="container">
        <div className="mb-80 js-splittext-lines">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="fsz-45"> Latest Posts </h2>
            </div>
            <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
              <Link
                href="/blogs"
                className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
              >
                <span>
                  All Articles <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="blog-slider position-relative overflow-hidden">
          <div className="swiper-wrapper">
            {blogs.map((item, i) => {
              const date = new Date(item.createdAt);
              const day = date.toLocaleDateString("en-IN", { day: "2-digit" });
              const monthYear = date.toLocaleDateString("en-IN", {
                month: "short",
                year: "numeric",
              });

              return (
                <div key={item.id} className="swiper-slide">
                  <div className="blog-card">
                    <div className="img">
                      <img
                        src={
                          getImageUrl(item.coverImage) ||
                          "/placeholder-image.png"
                        }
                        alt={item.title}
                        className="img-cover"
                      />
                    </div>
                    <div className="info">
                      <div className="date">
                        <div className="num fsz-45 mb-2"> {day} </div>
                        <small className="fsz-12 text-uppercase color-666">
                          {monthYear}
                        </small>
                      </div>
                      <div className="cont">
                        <Link
                          href={`/blogs/${item.slug}`}
                          className="title d-block fsz-24 hover-orange1 mb-15 fw-600"
                        >
                          {item.title}
                        </Link>
                        <small className="fsz-12 color-orange1">
                          {item.category || "General"}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
}

export default Blog;
