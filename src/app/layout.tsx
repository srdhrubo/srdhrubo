import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suchinta Roy Dhrubo - Portfolio",
  description: "Under development by Nazmul Hasan Shajib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`box-border overflow-x-hidden ${inter.className}`}>
        <NavigationBar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
