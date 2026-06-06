import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varsha Group",
  description: "Varsha Group",
  icons: {
    icon: "/home_preview/assets/img/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/common/assets/css/lib/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/common/assets/css/lib/all.min.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/line-awesome.css" />
        <link
          rel="stylesheet"
          href="/common/assets/css/lib/themify-icons.css"
        />
        <link rel="stylesheet" href="/common/assets/css/lib/animate.css" />
        <link
          rel="stylesheet"
          href="/common/assets/css/lib/jquery.fancybox.css"
        />
        <link rel="stylesheet" href="/common/assets/css/lib/lity.css" />
        <link rel="stylesheet" href="/common/assets/css/lib/swiper8.min.css" />
        <link rel="stylesheet" href="/common/assets/css/common_style.css" />
      </head>
      <body>
        {children}

        <Script
          src="/common/assets/js/lib/jquery-3.0.0.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="/common/assets/js/lib/jquery-migrate-3.0.0.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/common/assets/js/lib/wow.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/jquery.fancybox.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/lity.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/swiper8-bundle.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="/common/assets/js/lib/jquery.waypoints.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/jquery.counterup.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/parallaxie.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/lib/mixitup.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/common/assets/js/gsap_lib/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/common/assets/js/gsap_lib/ScrollSmoother.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/common/assets/js/gsap_lib/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
