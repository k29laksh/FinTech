import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';
import { SessionProvider } from "next-auth/react"; 
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel App",
  description: "FullStack Travel Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SessionProvider>
          <Navbar />
          <main className=" bg-black">{children}</main>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
