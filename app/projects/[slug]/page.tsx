"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/innerpage/Navbar";
import Header from '@/components/innerpage/single_project2/Header';
import MainInfo from '@/components/innerpage/single_project2/MainInfo';
import Challenge from '@/components/innerpage/single_project2/Challenge';
import Testimonials from '@/components/innerpage/single_project2/Testimonials';
import MainVideo from '@/components/innerpage/single_project2/MainVideo';
import Contact from '@/components/innerpage/single_project2/Contact';
import Footer from "@/components/home1/Footer";

export default function SingleBlogPage() {
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

      <div className="inner-pages-style1 s-project-pg-style2">
        <Loader />

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />

          <main>
            <MainInfo />
            <Challenge />
            <Testimonials />
            <MainVideo />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
