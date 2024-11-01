import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Performance Test",
  description: "A high-performance Next.js 14 website built while following JSMastery's tutorial. Focused on building fast, responsive, and production-ready web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" min-h-screen bg-black-100 font-poppins">
        {children}
      </body>
    </html>
  );
}
