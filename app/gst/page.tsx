"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Header from "@/components/innerpage/gst/Header";
import Navbar from "@/components/innerpage/Navbar";
import GST_Info from "@/components/innerpage/gst/GST_Info";
import Points from "@/components/innerpage/gst/Points";
import Footer from "@/components/home1/Footer";

export default function GSTPage() {
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
            <GST_Info />
            <Points />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
