"use client";

import Reveal from '@/components/Reveal';

export default function CurriculumPage() {
  const levels = [
    { 
      name: "SIP Junior", 
      age: "6-12 Years", 
      duration: "4 Levels (16-20 weeks each)", 
      focus: "Removing fear of numbers & basic multiplication" 
    },
    { 
      name: "Foundation", 
      age: "Basic to Advanced", 
      duration: "Level 1: 18-20 weeks | L2-L4: 16-18 weeks", 
      focus: "Whole brain development & mental arithmetic using the Japanese Soroban" 
    },
    { 
      name: "Grand Master", 
      age: "Advanced", 
      duration: "3 Levels (18-20 weeks each)", 
      focus: "International prodigy level speed and accuracy" 
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h1 className="font-montserrat text-4xl font-bold mb-12 text-center text-slate-gray">
            Our <span className="text-nature-green">Curriculum</span>
          </h1>
        </Reveal>
        
        <div className="grid gap-8">
          {levels.map((lvl, i) => (
            <Reveal key={i}>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center">
                <div className="text-left">
                  <h2 className="font-montserrat text-2xl font-bold text-nature-green mb-2">{lvl.name}</h2>
                  <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest">{lvl.age}</p>
                  <p className="text-slate-600 max-w-md italic">{lvl.focus}</p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                  <span className="bg-slate-100 text-slate-gray px-4 py-2 rounded-lg font-bold text-sm">
                    {lvl.duration}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}