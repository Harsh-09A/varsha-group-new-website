"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Menu from "@/components/home1/Menu";
import Navbar from "@/components/home1/Navbar";
import Header from "@/components/home1/Header";
import Experience from "@/components/home1/Experience";
import Services from "@/components/home1/Services";
import Process from "@/components/home1/Process";
import Projects from "@/components/home1/Projects";
import Testimonials from "@/components/home1/Testimonials";
import Blog from "@/components/home1/Blog";
import Chat from "@/components/home1/Chat";
import Footer from "@/components/home1/Footer";
import DisclaimerPopup from "@/components/common/DisclaimerModal";

export default function HomePage() {
  return (
    <>
      <link rel="stylesheet" href="/home1/assets/css/home_1_style.css" />

      <Script
        src="/common/assets/js/common_js.js"
        strategy="afterInteractive"
      />

      <Script
        src="/home1/assets/js/home_1_scripts.js"
        strategy="afterInteractive"
      />

      <div className="home-style1">
        <Loader />

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />

          <main>
            <Experience />
            <Services />
            <Process />
            <Projects />
            <Testimonials />
            <Blog />
            <Chat />
          </main>

          <Footer />
        </div>
      </div>
      <DisclaimerPopup />
    </>
  );
}
