"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Footer from "@/components/home1/Footer";
import Navbar from "@/components/innerpage/Navbar";

import Header from "@/components/innerpage/loan/Header";
import Content from "@/components/innerpage/loan/Content";

export default function Loan() {
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
          <Header />

          <main>
            <Content />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
