import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { MobileWrapper } from "./components/layout/MobileWrapper";
import { ReduxProvider } from "./components/providers/ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-commerce Dashboard",
  description: "Admin dashboard for e-commerce management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="min-h-screen grid">
            <MobileWrapper />
            <main className="md:ml-[var(--sidebar-width)]">{children}</main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
