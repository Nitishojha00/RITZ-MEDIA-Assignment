import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";

// TODO: swap this system-font stack for the exact typeface from the Figma
// file once shared (use next/font/google or next/font/local).

export const metadata: Metadata = {
  title: "Ritz's Media",
  description: "Ritz's Media — homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-black text-white">
        <Loader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
