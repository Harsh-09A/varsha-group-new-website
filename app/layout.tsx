import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import BootstrapProvider from "@/components/Providers/BootstrapProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

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
        <link rel="stylesheet" href="/vendor/themify-icons/themify-icons.css" />
      </head>
      <body className={plusJakarta.className}>
        <BootstrapProvider />
        {children}
      </body>

      
    </html>
  );
}
