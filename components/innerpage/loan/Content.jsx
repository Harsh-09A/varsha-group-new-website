import Image from "next/image";
import React from "react";

function Content() {
  return (
    <>
      <section className="tc-about-style7">
        <div className="container">
          <h1> Home Loans In Mumbai</h1>
          <div className="row gx-5 justify-content-between">
            <div className="col-lg-8">
              <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="text fsz-20 fw-500 mb-20">
                  The applicant should be at least 21 years of age to be
                  eligible for a home loan and having a regular source of income
                  from employment or personal business. The loan must terminate
                  before or when the applicant turns 65 years of age. The
                  applicant should also produce at least 6 months of income
                  proof. The loan amount depends on a number of factors such as
                  age, income, number of dependents, qualifications, assets and
                  liabilities, income stability, business, profits etc. However,
                  there are ways in which to increase loan eligibility and
                  amount. If a spouse of fiancée is earning, applying together
                  as co-applicants can increase chances of a larger loan amount.
                </div>
                <h3>DOCUMENTS REQUIRED FOR HOME LOAN</h3>
                <div className="text fsz-20 fw-500 mb-20">
                  The stamp duty amount is calculated for the flat purchaser as
                  per the agreement value or market value, whichever is higher.
                  Once the stamp duty amount is ascertained, the flat purchaser
                  needs to prepare a pay-order addressed in favour of
                  "SUPERINTENDENT OF STAMPS, Mumbai". The pay-order is given for
                  franking of the agreement. Later, the said agreement is duly
                  filled and signed by the respective parties.
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Image
                className=" rounded-3"
                src={"/innerpages/assets/img/process/proc1.jpg"}
                width={500}
                height={500}
                alt="GST"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="loan-docs py-5">
        <div className="container">
          <div className="loan-docs__header text-center mb-5">
            <span className="loan-docs__badge"> Loan Documentation </span>
            <h2 className="loan-docs__heading mt-3"> Required Documents </h2>
            <p className="loan-docs__subheading">
              Please keep the following documents ready for faster loan
              approval.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="loan-docs__card">
                <div className="loan-docs__icon-box">
                  {/* <i className="bi bi-briefcase-fill"></i> */}
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h3 className="loan-docs__title"> Self-Employed Applicants </h3>
                <ul className="loan-docs__list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Updated passbook
                    or bank statement for the last 6 months.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Xerox copy of
                    ration card.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Business profile
                    including clients, suppliers, employee strength and
                    operational details.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Partnership deed
                    (if applicable).
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Profit & Loss
                    Account, Balance Sheet and Income Computation certified by
                    CA for 3 years.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Income Tax
                    Return filing statements for the last 3 years.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Annual reports,
                    remuneration certificate and board resolution for Pvt. Ltd.
                    companies.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loan-docs__card">
                <div className="loan-docs__icon-box">
                  <i class="fa-solid fa-id-badge"></i>
                </div>
                <h3 className="loan-docs__title"> Salaried Applicants </h3>
                <ul className="loan-docs__list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Latest salary
                    certificate or original salary slip.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Form No. 16A
                    (TDS Form) from employer.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Passport-size
                    photograph of applicant and co-applicant.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Voter ID /
                    Company ID / Passport / Ration Card.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Updated bank
                    statement or passbook for the last 6 months.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
