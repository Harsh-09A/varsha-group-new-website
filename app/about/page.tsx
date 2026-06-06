"use client";

import Script from "next/script";

// import Loader from "@/components/common/Loader";
// import Menu from "@/components/home1/Menu";
// import Navbar from "@/components/innerpage/Navbar";
// import Header from "@/components/innerpage/about/Header";
// import Experience from "@/components/home1/Experience";
// import Services from "@/components/home1/Services";
// import Process from "@/components/home1/Process";
// import Footer from "@/components/home1/Footer";

// 

import Loader from '@/components/common/Loader';
import Header from '@/components/innerpage/about/Header';
import Navbar from '@/components/innerpage/Navbar';
// import Navbar from '../..//components/home1/Navbar';
import About from '@/components/innerpage/about/About';
import Process from '@/components/innerpage/about/Process';
import Projects from '@/components/innerpage/about/Projects';
import Awards from '@/components/innerpage/about/Awards';
// import Footer from '../../components/innerpage/Footer';
import Footer from '@/components/home1/Footer';



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
        {/* <Loader /> */}


        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />

          <main>
            <About />
            <Process />
            {/* <Projects /> */}
            <Awards />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
