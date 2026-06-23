import React from "react";
import jobs from "@/data/jobs";

function Process() {
  return (
    <section className="tc-process-style2 py-5" style={{"background" :"#f1eee9"}}>
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <div className="career-content pe-lg-5">

              <div className="d-flex align-items-center mb-4">
                <span
                  style={{
                    width: "60px",
                    height: "1px",
                    background: "#333",
                    display: "inline-block",
                    marginRight: "12px",
                  }}
                ></span>

                <span
                  className="text-uppercase"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                >
                  We Are Looking For Professionals
                </span>
              </div>

              <div
                style={{
                  width: "90px",
                  height: "10px",
                  background: "#ff481f",
                  marginBottom: "30px",
                }}
              ></div>

              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "60px",
                  lineHeight: "1.1",
                }}
              >
                Vacancies
              </h2>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                }}
              >
                At Varsha Group, we believe in creating exceptional spaces
                and exceptional careers. Join our growing team of passionate
                professionals and contribute to landmark projects that shape
                communities and inspire growth.
              </p>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.8",
                }}
              >
                If your desired position isn't listed and you believe you
                can make a difference, send us your resume and we'll keep
                you in mind for future opportunities.
              </p>

              <p
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                sales@varshagroup.in
              </p>

              <a
                href=""
                className="butn rounded-pill mt-4"
                style={{
                  background: "#ff481f",
                  color: "#fff",
                }}
              >
                <span>
                  Submit Resume
                  <i className="ms-2 fal fa-long-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <div
              className="accordion"
              id="jobAccordion"
            >
              {jobs.map((job, index) => (
                <div
                  className="accordion-item mb-3 border"
                  key={job.id}
                >
                  <h2
                    className="accordion-header"
                    id={`heading${job.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${job.id}`}
                    >
                      {job.title}
                    </button>
                  </h2>

                  <div
                    id={`collapse${job.id}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#jobAccordion"
                  >
                    <div className="accordion-body">

                      <div className="mb-3">
                        <strong>Vacancy:</strong> {job.vacancy}
                      </div>

                      <div className="mb-3">
                        <strong>Location:</strong> {job.location}
                      </div>

                      <div className="mb-4">
                        <strong>Experience:</strong> {job.experience}
                      </div>

                      <h5 className="mb-3">
                        Responsibilities
                      </h5>

                      <ul>
                        {job.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h5 className="mt-4 mb-3">
                        Qualifications
                      </h5>

                      <ul>
                        {job.qualifications.map((item, i) => (
                          <li
                            key={i}
                            className="mb-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* <a
                        href="/contact"
                        className="butn rounded-pill mt-3"
                        style={{
                          background: "#ff481f",
                          color: "#fff",
                        }}
                      >
                        <span>
                          Apply Now
                          <i className="ms-2 fal fa-long-arrow-right"></i>
                        </span>
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default Process;