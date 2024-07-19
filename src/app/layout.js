import { Providers } from "@/lib/providers";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edu Brains Portal",
  description: "Edu brains portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" defer></Script>
      </head>

      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
