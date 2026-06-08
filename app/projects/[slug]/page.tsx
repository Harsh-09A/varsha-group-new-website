// "use client";

import Script from "next/script";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/innerpage/Navbar";
import Header from '@/components/innerpage/single_project2/Header';
import MainInfo from '@/components/innerpage/single_project2/MainInfo';
import Gallery from '@/components/innerpage/single_project2/Gallery';
import Testimonials from '@/components/innerpage/single_project2/Testimonials';
import Amenities from '@/components/innerpage/single_project2/Amenities';
import MainVideo from '@/components/innerpage/single_project2/MainVideo';
import Contact from '@/components/innerpage/single_project2/Contact';
import Footer from "@/components/home1/Footer";
import { getProjectBySlug } from "@/services/projects-service";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SingleProjectPage({ params }: Props) {
  const { slug } = await params;
  console.log(slug)

  const project = await getProjectBySlug(slug);



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
          <Header data ={project} />

          <main>
            <MainInfo data ={project}/>
            <Gallery data ={project}/>
            {/* <Testimonials /> */}
            <Amenities />
            <MainVideo />
            <Contact data ={project} />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
