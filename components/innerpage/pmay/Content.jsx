import Image from "next/image";
import React from "react";

function Content() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <h1> PRADHAN MANTRI AWAS YOJANA-HOUSING FOR ALL</h1>
        <div className="row gx-5 justify-content-between pt-5">
          <div className="col-lg-8">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <h3>How To Avail PM Awas Yojana Scheme Subsidy In 10 Points:</h3>
              <div className="text fsz-20 fw-500 mb-20">
                "The idea of 'Housing For All' The extension will give more time
                to middle income groups to avail interest subsidy under the
                scheme. The PM Awas Yojana subsidy scheme is against the home
                loan of the beneficiary. This means that the subsidy amount will
                be credited in the loan account of the beneficiary.The subsidy
                amount is credited upfront and it will reduce the principal
                outstanding amount of the loan. The foremost condition of PM
                Awas Yojana (CLSS) is that the family should not own a pucca
                house either in his name or in the name of the family member in
                any part of India.
              </div>

              <div className="text fsz-20 fw-500 mb-20">
                The home loan borrower can then opt for lower EMIs or repay loan
                faster with original EMI. Under the subsidy scheme,
                middle-income group beneficiaries with annual income of above
                Rs.6 lakh and up to Rs.12 lakh get an interest subsidy of 4 per
                cent on a 20-year loan component of Rs. 9 lakh. Those with
                annual exceeding Rs.12 lakh and up to Rs.18 lakh would get
                interest subsidy of 3 per cent. Additional loans beyond the
                specified limit, if any, will be at non-subsidised rate.
              </div>

              <div className="text fsz-20 fw-500 mb-20">
                Home loans sanctioned or applications are under consideration
                since January 1, 2017, are eligible for interest subsidy under
                the Credit Linked Subsidy Scheme for Middle Income Groups under
                the PM Awas Yojana. Beneficiaries eligible for interest subsidy
                under the CLSS scheme have to apply to their lenders for
                availing the subsidy benefit. Interest subsidy will be provided
                on loans for construction/acquisition of house with carpet area
                of up to 90 sq metres for those with income of up to Rs. 12 lakh
                per year and of up to 110 square metres for those earning
                between Rs. 12 lakh and Rs. 18 lakh per year.
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
  );
}

export default Content;
