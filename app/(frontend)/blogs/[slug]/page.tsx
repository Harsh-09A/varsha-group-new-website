import { notFound } from "next/navigation";
import Script from "next/script";

import Loader from "@/components/common/Loader";
import Navbar from "@/components/new_menu/Navbar";
import Slider from "@/components/innerpage/single_post/Slider";
import Content from "@/components/innerpage/single_post/Content";
import Footer from "@/components/home1/Footer";
import { getBlogBySlug } from "@/services/blogs-frontend";


export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return notFound();

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

          <main>
            <Slider blog={blog} />
            <Content blog={blog} />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
