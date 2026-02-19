// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/SIP_LOGO_PLUS_KVH_v2.png" 
            alt="SIP Abacus Kasavanahalli" 
            width={120} 
            height={50} 
            className="object-contain"
          />
        </Link>
        
        {/* Menu Items */}
        <div className="hidden md:flex gap-8 font-inter font-medium text-slate-gray">
          <Link href="/" className="hover:text-nature-green transition-colors">Home</Link>
          <Link href="/about" className="hover:text-nature-green transition-colors">About Us</Link>
          <Link href="/curriculum" className="hover:text-nature-green transition-colors">Curriculum</Link>
          <Link href="/contact" className="hover:text-nature-green transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link href="/#demo" 
          className="bg-nature-green text-white px-6 py-2.5 rounded-full font-montserrat font-bold text-sm hover:shadow-lg transition-all active:scale-95">
          Book Free Demo
        </Link>
      </div>
    </nav>
  );
}