import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/Layout.module.scss';

import "@/styles/globals.scss";
import Providers from "@/store/Providers";

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
  title: "Hegi Tri Saputra",
  description: "Created Using Next.JS due to assessment Evermos by Hegi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <div className={styles.container}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
