import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterScreen from "@/components/Footer";
import { WixClientContextProvider } from "@/context/WixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic Hotel",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <WixClientContextProvider>
            {children}
        </WixClientContextProvider>
      
        <FooterScreen/>
        </body>
    </html>
  );
}
