// import data1 from "../../data/home1/projects/projects1";

import { getProjectsByStatus } from "@/services/projects-service";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const data1 = await getProjectsByStatus("ongoing");
      setProjects(data1);
    }

    loadProjects();
  }, []);
  return (
    <section className="tc-projects-style1">
      <div className="container">
        <div className="title mb-70">
          <h2 className="fsz-45"> Featured Projects </h2>
        </div>

        <div className="tabs-links mb-50">
          <div className="row align-items-center">
            <div className="col-lg-9"></div>
            <div className="col-lg-3 mt-4 mt-lg-0 text-lg-end">
              <a
                href="/projects"
                className="butn border rounded-pill color-orange1 border-orange1 hover-bg-orange1"
              >
                <span>
                  See All Projects
                  <i className="small ms-1 ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
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
                <div className="projects-slider">
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
                              <a>{item.rera_id}</a>
                              <a>{item.configurations}</a>
                            </div>
                            <h3 className="title fsz-35 mb-20">
                              {item.status === "ongoing" ? (
                                <a
                                  href={`/projects/${item.slug}`}
                                  className="hover-orange1"
                                >
                                  {item.title}
                                </a>
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </h3>
                            <div className="text color-666">
                              {item.excerpt}
                              <br />
                              <span className="fw-semibold text-dark">
                                <b>Possession: </b>
                                {item.possession}
                              </span>
                            </div>
                            {/* <div className="text">{item.desc}</div> */}
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

export default Projects;
