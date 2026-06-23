"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Footer from "@/components/home1/Footer";
import Navbar from "@/components/innerpage/Navbar";

import Header from "@/components/innerpage/common/Header";
import EMICalculator from "@/components/innerpage/loan-calculator/EMICalculator";

export default function LoanCalculatorPage() {
  return (
    <>
      <link rel="stylesheet" href="/innerpages/assets/css/innerpages.css" />

      <Script
        src="/common/assets/js/common_js.js"
        strategy="afterInteractive"
      />

      <Script
        src="/innerpages/assets/js/innerpages.js"
        strategy="afterInteractive"
      />

      <div className="inner-pages-style1 about-pg-style1">
        <Loader />

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header pageTitle={"Loan Calculator"} />

          <main>
            <EMICalculator />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
