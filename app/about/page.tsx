"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Header from "@/components/innerpage/common/Header";
import Navbar from "@/components/innerpage/Navbar";
import About from "@/components/innerpage/about/About";
import Process from "@/components/innerpage/about/Process";
import Awards from "@/components/innerpage/about/Awards";
import FoundersMessage from "@/components/innerpage/about/FoundersMessage";
import TeamSection from "@/components/innerpage/about/TeamSection";
import Footer from "@/components/home1/Footer";

export default function AboutPage() {
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
          <Header pageTitle={"About Us"} />

          <main>
            <About />
            <Process />
            {/* <FoundersMessage/> */}
            <TeamSection/>

            {/* <Projects /> */}
            <Awards />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
