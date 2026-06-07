"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Header from "@/components/innerpage/blog/Header";
import Navbar from "@/components/innerpage/Navbar";
import Slider from "@/components/innerpage/single_post/Slider";
import Content from "@/components/innerpage/single_post/Content";
import Comments from "@/components/innerpage/single_post/Comments";
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

      <div className="inner-pages-style1 post-pg-style1">
        <Loader />

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          {/* <Header /> */}

          <main>
            <Slider />
            <Content />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
