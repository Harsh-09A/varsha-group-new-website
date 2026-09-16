import type { Metadata } from "next";
import { DashboardNav } from "@/components/DashboardNav";
import Link from "next/link";
import "./dashboard.css";

import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Your Site Name",
  description: "Your site description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body className={``}>
        {" "}
        <div className="min-h-screen flex bg-neutral-50">
          <aside className="w-60 shrink-0 border-r border-neutral-200 bg-white flex flex-col">
            <div className="px-5 py-4 border-b border-neutral-100">
              <Link
                href="/dashboard"
                className="font-semibold text-neutral-900"
              >
                Admin Panel
              </Link>
            </div>
            <DashboardNav />
          </aside>
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
