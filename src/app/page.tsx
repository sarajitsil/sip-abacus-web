"use client";

import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import { Trophy, Star, ShieldCheck, Dumbbell, Signature, Calculator } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-t from-nature-green/20 via-off-white to-off-white dark:from-nature-green/10 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-nature-green/10 text-nature-green px-4 py-2 rounded-full mb-6">
              <Trophy size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">Internationally Ranked 3rd (2025)</span>
            </div>
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold leading-tight text-slate-gray mb-6">
              Making Your Child <span className="text-nature-green italic">5 Times Better</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Join the world-class skill development program in Kasavanahalli. We bridge the two sides 
              of the brain to unlock 100% of your child's potential.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-gray">1200+</span>
                <span className="text-xs text-slate-400 uppercase">Centres in India</span>
              </div>
              <div className="border-l border-slate-200 pl-6 flex flex-col">
                <span className="text-2xl font-bold text-slate-gray">5-Time</span>
                <span className="text-xs text-slate-400 uppercase">Limca Record Holder</span>
              </div>
            </div>
          </Reveal>

        
          <Reveal>
            <div id="demo" className="bg-lime-100 p-8 rounded-2xl shadow-lg border border-slate-100">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-24 bg-slate-gray text-white px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-montserrat text-4xl font-bold text-center mb-20">Our Key Milestones</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { year: "2017", title: "Foundation", desc: "Established with a strong vision for quality[cite: 136, 143]." },
                { year: "2022", title: "Titan Status", desc: "Achieved prestigious Titan Centre Recognition[cite: 145, 151]." },
                { year: "2024", title: "India Rank 3", desc: "Ranked 3rd among 1200+ centres nationwide[cite: 152, 159]." },
                { year: "2025", title: "Global Excellence", desc: "Internationally Ranked 3rd in Performance[cite: 166, 167]." }
              ].map((milestone, i) => (
                <div key={i} className="relative p-6 border-l-2 border-nature-green bg-white/5 hover:bg-white/10 transition-colors">
                  <span className="text-nature-green font-montserrat font-black text-2xl">{milestone.year}</span>
                  <h4 className="font-montserrat font-bold text-lg mt-2 mb-3 underline decoration-nature-green underline-offset-4">{milestone.title}</h4>
                  <p className="text-sm opacity-80 leading-relaxed font-inter">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program Quick Info */}
      <section className="py-20 px-6 bg-gradient-to-t from-nature-green/20 via-off-white to-off-white dark:from-nature-green/10 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { title: "Brain Gym", text: "Exercises to balance brain hemispheres and integrate thinking.", icon: Dumbbell },
            { title: "Abacus", text: "Mental math and concentration using the Japanese Soroban.", icon: Calculator },
            { title: "Speed Writing", text: "Boost productivity and focus for exam performance.", icon: Signature }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx}>
                <div className="bg-sky-50 p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                  <Icon className="w-12 h-12 text-indigo-950 shrink-0" />
                  <h3 className="font-montserrat font-bold text-xl mb-3 text-indigo-800">{item.title}</h3>
                  <p className="text-sm text-sky-950 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}