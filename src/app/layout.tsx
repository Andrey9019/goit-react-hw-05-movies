import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackgroundCircles from "./components/BgCircles/BgCircles";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Trending movies",
  description: "This is my Next.js project",
  icons: `/favicon.png`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen relative">
          <BackgroundCircles />
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
