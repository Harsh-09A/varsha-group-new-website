"use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/innerpage/Navbar";
import Header from "@/components/innerpage/contact/Header";
import Map from "@/components/innerpage/contact/Map";
import ContactInfo from "@/components/innerpage/contact/ContactInfo";
import ContactForm from "@/components/innerpage/contact/ContactForm";
import Footer from "@/components/home1/Footer";

export default function ContactPage() {
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
          <Header />

          <main>
            <ContactInfo />
            <Map />
            <ContactForm />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
