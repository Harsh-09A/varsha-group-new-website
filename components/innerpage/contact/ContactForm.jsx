"use client";

import React, { useActionState } from "react";
import { sendContactForm } from "@/app/actions/send-contact-form";

const initialState = {
  success: null,
  message: "",
};

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState
  );

  return (
    <section className="tc-contact-form-style1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h3 className="fsz-45 fw-500 mb-80">
                Let us helps build your dream!
              </h3>
              <p className="fsz-14 color-666 mt-15">
                Your email address will not be published. <br /> Required fields
                are marked <span className="text-danger"> * </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action={formAction}
              className="form mt-5 mt-lg-0 wow fadeInUp slow"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="name">
                      Full name <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="your name"
                      required
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="email">
                      email address <span className="color-orange1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email address"
                      required
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="phone">
                      Phone <span className="color-orange1"> * </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Your phone number"
                      required
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <label htmlFor="subject">
                      subject <span className="color-orange1"> * </span>
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      className="form-select form-control"
                      required
                      disabled={isPending}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Site Visit Request">Site Visit Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-30">
                    <label htmlFor="message"> message </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Write your message here"
                      className="form-control"
                      disabled={isPending}
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="butn hover-bg-orange1 text-capitalize bg-white rounded-pill mt-40 border-0"
                disabled={isPending}
              >
                <span>
                  {isPending ? "Sending..." : "Send Your Message"}
                  <i className="fal fa-arrow-up-right ms-2"></i>
                </span>
              </button>

              {state.message && (
                <p
                  className={`fsz-14 mt-20 ${
                    state.success ? "text-success" : "text-danger"
                  }`}
                  role="status"
                >
                  {state.message}
                </p>
              )}

              <p className="fsz-12 color-666 mt-20">
                By summiting, i&apos;m agree to the{" "}
                <a href="#" className="color-000 text-decoration-underline">
                  Terms & Conditions
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/contact_shap.png"
        alt=""
        className="shap"
      />
    </section>
  );
}

export default ContactForm;
