// "use client";

export const metadata = {
  title: "Not-Found ",
};

import Script from "next/script";



export default function NotFound() {
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
         
          <main>
            <section>
              <h1>404</h1>
            </section>
          </main>

         
        </div>
      </div>
    </>
  );
}
