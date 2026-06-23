import React, { useState } from "react";
import "./career.css"

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here
  };

  return (
    <section className="career-resume-section py-100 ">
      <div className="container mt-50 mb-50 ">
        <div className="career-resume-wrapper">
          <div className="row g-5 align-items-center">
            {/* LEFT */}
            <div className="col-lg-5">
              <div className="career-resume-content">
                <span className="career-resume-subtitle">
                  JOIN OUR TEAM
                </span>

                <h2 className="career-resume-title">
                  Submit Your Resume
                </h2>

                <p>
                  Looking for an exciting career opportunity?
                  We'd love to hear from talented professionals
                  who are passionate about creating exceptional
                  spaces and experiences.
                </p>

                <p>
                  Upload your resume and our HR team will
                  contact you if your profile matches any
                  current or future openings.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-7">
              <form
                onSubmit={handleSubmit}
                className="career-resume-form"
              >
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      name="position"
                      className="form-control"
                      placeholder="Position Applied For"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <select
                      name="experience"
                      className="form-select"
                      onChange={handleChange}
                    >
                      <option value="">
                        Total Experience
                      </option>
                      <option>Fresher</option>
                      <option>1-2 Years</option>
                      <option>3-5 Years</option>
                      <option>5-10 Years</option>
                      <option>10+ Years</option>
                    </select>
                  </div>

                  <div className="col-md-12 mb-4">
                    <textarea
                      rows="5"
                      name="message"
                      className="form-control"
                      placeholder="Tell us about yourself..."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <label className="career-upload-label">
                      Upload Resume
                    </label>

                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="career-submit-btn"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default ResumeForm;