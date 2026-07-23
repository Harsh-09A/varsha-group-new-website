"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/innerpage/Navbar";
import Header from "@/components/innerpage/common/Header";
import MasonryGallery from "@/components/innerpage/gallery/MasonryGallery";

import Footer from "@/components/home1/Footer";

export default function GalleryPage() {
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

      <div className="inner-pages-style1 contact-pg-style1">
        <Loader />

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header pageTitle={"Gallery"} />

          <main>
            <MasonryGallery/>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
