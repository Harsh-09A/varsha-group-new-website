// import data1 from "../../data/home1/projects/projects1";

import { getProjectsByStatus } from "@/services/projects-service";
import { useEffect, useState } from "react";

function UpcomingProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const data1 = await getProjectsByStatus("upcoming");
      setProjects(data1);
    }

    loadProjects();
  }, []);
  return (
    <section className="tc-projects-style1">
      <div className="container">
        <div className="title mb-70">
          <h2 className="fsz-45"> Upcoming Projects </h2>
        </div>

        <div className="projects">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-proj1"
              role="tabpanel"
              aria-labelledby="pills-proj1-tab"
            >
              <div className="projects-content">
                <div className="projects-slider2">
                  <div className="swiper-wrapper">
                    {projects.map((item, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="project-card">
                          <a
                            // href={item.img}
                            className="img"
                            data-fancybox="proj"
                          >
                            <img
                              src={item.featured_image}
                              alt=""
                              className="img-cover"
                            />
                          </a>
                          <div className="info">
                            {/* <div className="tags">
                              <a href="#"> {item.location} </a>
                              <a href="#" className="text-capitalize">
                                {" "}
                                {item.status}{" "}
                              </a>
                            </div> */}

                            <div className="tags">
                              <a className="tags-highlight">{item.location}</a>
                              {/* null, undefined, "" (aur trim() wale version me " ") → render nahi hoga. */}
                              {item.rera_id?.trim() && (
                                <a>{`RERA: ${item.rera_id}`}</a>
                              )}
                              {item.configurations?.trim() && (
                                <a>{item.configurations}</a>
                              )}
                            </div>

                            <h3 className="title fsz-35 text-capitalize">
                              {item.status === "ongoing" ? (
                                <a
                                  href={`/projects/${item.slug}`}
                                  className="hover-orange1"
                                >
                                  {item.title}
                                </a>
                              ) : (
                                item.title
                              )}
                            </h3>

                            <div className="text color-666">
                              {item.excerpt}
                              <br />
                              {item.possession?.trim() && (
                                <span className="fw-semibold text-dark">
                                  <b>Possession:</b> {item.possession}
                                </span>
                              )}
                            </div>
                            {/* <div className="text">{item.desc}</div> */}
                            <a
                              href="/contact"
                              className="butn rounded-pill mt-20 hover-bg-black bg-orange1 text-white"
                            >
                              <span>
                               Book Now
                                <i className="small ms-1 ti-arrow-top-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="float-cursor float_box">
                  Hold <br /> and Drag
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingProjects;
