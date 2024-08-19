import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./NavBar";

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
      <body className={`px-2 md:px-10 lg:px-44 ${inter.className}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
