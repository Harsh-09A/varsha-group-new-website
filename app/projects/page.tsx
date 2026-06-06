"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Header from "@/components/innerpage/portfolio/Header";
import Navbar from "@/components/innerpage/Navbar";
import Footer from "@/components/home1/Footer";
import LatestCases from "@/components/innerpage/portfolio/LatestCases";

export default function ProjectsPage() {
  return (
    <>
      <link rel="stylesheet" href="/innerpages/assets/css/innerpages.css" />

      <div className="inner-pages-style1 portfolio-pg-style1">
        <Loader />

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />

          <main>
            <LatestCases />
          </main>

          <Footer />
        </div>
      </div>
      <Script
        src="/common/assets/js/common_js.js"
        strategy="afterInteractive"
      />

      <Script
        src="/innerpages/assets/js/innerpages.js"
        strategy="afterInteractive"
      />
    </>
  );
}
