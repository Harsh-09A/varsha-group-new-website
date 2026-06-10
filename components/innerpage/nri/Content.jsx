import Image from "next/image";
import React from "react";

function Content() {
  return (
    <>
      <section className="tc-about-style7">
        <div className="container">
          <h1> NRI HOUSING LOAN CATEGORIES</h1>
          <div className="row gx-5 justify-content-between pt-5">
            <div className="col-lg-8">
              <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
                <div className="text fsz-20 fw-500 mb-20">
                  Non-Resident Indians (NRIs) are recognised under the Foreign
                  Exchange Regulatory Act. The RBI guidelines followed by banks
                  and housing finance companies states “that an Indian Citizen
                  holding a valid document like Indian Passport, is employed
                  abroad or is carrying on business or vocation outside India or
                  is living abroad for an uncertain duration of stay is an NRI.
                </div>

                <div className="text fsz-20 fw-500 mb-20">
                  Indians employed abroad, carrying on business or vocation
                  abroad or living abroad for an uncertain duration of stay.
                  Government servants posted abroad on government duty with the
                  Indian mission or similar government agencies. State
                  Government and Public Sector Undertaking officials deputed
                  abroad on temporary assignments or posted to their branches or
                  offices abroad. Government servants deputed abroad on
                  assignments with foreign governments or regional International
                  agencies like the World Bank, International Monetary Fund
                  (IMF), World Health Organisation (WHO), Economic and Social
                  Commission for Asia and the Pacific.
                </div>

                <div className="text fsz-20 fw-500 mb-20">
                  Home loans for NRIs are available for construction of new
                  house/ flats, purchase of old House, addition/alteration to an
                  existing house and repairs/renovation etc. NRIs can mortgage
                  an existing residential property to avail loans. For that NRIs
                  will have to fulfill certain conditions according to provision
                  of the Income Tax Act. Either they should have stayed in India
                  for a period of 182 days or more within an assessment year or
                  they should have stayed for the total of one year or more in
                  the country.
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
            <span className="loan-docs__badge">NRI Loan Documentation </span>
            <h2 className="loan-docs__heading mt-3"> Required Documents </h2>
            <p className="loan-docs__subheading">
             The Documents & Eligibility criteria for NRIs are different from RIs and are based upon the following parameters.

            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="loan-docs__card">
                <div className="loan-docs__icon-box">
                  {/* <i className="bi bi-briefcase-fill"></i> */}
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h3 className="loan-docs__title"> Property Documents </h3>
                <ul className="loan-docs__list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Original title
                    deeds tracing the title of the property for a minimum period
                    of the last 13 years.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Encumbrance
                    Certificate for the last 13 years
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Agreement of
                    sale / construction, if any.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Receipts for
                    payments made for purchase of the dwelling unit.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Approved
                    plan/license
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> ULC
                    clearance/conversion order etc.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Latest tax paid
                    receipt.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> property to be
                    purchased / constructed / extended / improved.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Copy of
                    approved drawings of proposed construction / purchase /
                    extension.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="loan-docs__card">
                <div className="loan-docs__icon-box">
                  <i class="fa-solid fa-id-badge"></i>
                </div>
                <h3 className="loan-docs__title"> ELIGIBILITY </h3>
                <ul className="loan-docs__list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>The loan
                    applicant has to be 21 years of age.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Graduation is a
                    pre-requisite for NRI loan seekers.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Monthly income
                    not less than $ 2000 (varies from one HFC to another).
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Stability of
                    employment or business also determines eligibility.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Number of NRI
                    dependents, assets and liabilities also determine
                    eligibility.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>EMIs (Equated
                    Monthly Installments) have to be paid only through NRI’s
                    NRE/NRO account and not through his savings account in
                    India.
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
