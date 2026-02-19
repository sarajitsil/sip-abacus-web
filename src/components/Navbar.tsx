// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/SIP_LOGO_PLUS_KVH_v2.png" 
            alt="SIP Abacus Kasavanahalli" 
            width={120} 
            height={50} 
            className="object-contain"
          />
        </Link>
        
        <div className="hidden md:flex gap-8 font-inter font-medium text-slate-gray dark:text-slate-300">
          <Link href="/" className="hover:text-nature-green transition-colors">Home</Link>
          <Link href="/about" className="hover:text-nature-green transition-colors">About Us</Link>
          <Link href="/curriculum" className="hover:text-nature-green transition-colors">Curriculum</Link>
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-gray dark:text-off-white hover:ring-2 hover:ring-nature-green/50 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <Link href="/#demo" 
            className="bg-nature-green text-white px-6 py-2.5 rounded-full font-montserrat font-bold text-sm hover:shadow-lg transition-all active:scale-95">
            Book Free Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}


// "use client";

// import Link from 'next/link';
// import Image from 'next/image';
// import { useTheme } from "next-themes"; // 
// import { Sun, Moon } from "lucide-react"; // 
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const { theme, setTheme } = useTheme(); // Define theme here 
//   const [mounted, setMounted] = useState(false);

//   // useEffect ensures the component is mounted to avoid hydration mismatch 
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
//       <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-3">
//           <Image 
//             src="/SIP_LOGO_PLUS_KVH_v2.png" 
//             alt="SIP Abacus Kasavanahalli" 
//             width={120} 
//             height={50} 
//             className="object-contain"
//           />
//         </Link>
        
//         <div className="hidden md:flex gap-8 font-inter font-medium text-slate-gray dark:text-slate-300">
//           <Link href="/" className="hover:text-nature-green transition-colors">Home</Link>
//           <Link href="/about" className="hover:text-nature-green transition-colors">About Us</Link>
//           <Link href="/curriculum" className="hover:text-nature-green transition-colors">Curriculum</Link>
//         </div>

//         <div className="flex items-center gap-4">
//           {/* Theme Toggle Button */}
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-gray dark:text-off-white transition-all"
//               aria-label="Toggle Theme"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           )}

//           <Link href="/#demo" 
//             className="bg-nature-green text-white px-6 py-2.5 rounded-full font-montserrat font-bold text-sm hover:shadow-lg transition-all active:scale-95">
//             Book Free Demo
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
