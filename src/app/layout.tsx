import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "../components/NavBar";
import Footer from "@/components/footer";

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
      </body>
    </html>
  );
}
