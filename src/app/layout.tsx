import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure this import is correct

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "SIP Abacus Kasavanahalli",
  description: "Unlocking Your Child's Genius Potential",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-inter bg-off-white text-slate-gray antialiased">
        {/* The Navbar stays here to appear on ALL pages */}
        <Navbar />
        
        {/* This renders the content of each specific page */}
        <main>{children}</main>
        
        <footer className="py-12 bg-white border-t border-slate-100 text-center">
          <p className="font-montserrat font-bold text-slate-400 text-sm tracking-widest">
            SIP ABACUS KASAVANAHALLI
          </p>
        </footer>
      </body>
    </html>
  );
}