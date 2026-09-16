import type { Metadata } from "next";

import Link from "next/link";
import "../dashboard/dashboard.css";

export const metadata: Metadata = {
  title: "Your Site Name",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
