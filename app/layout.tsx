import type { Metadata } from "next";
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
      <head></head>
      <body>{children}</body>
    </html>
  );
}
