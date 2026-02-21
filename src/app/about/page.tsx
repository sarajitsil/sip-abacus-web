import Reveal from '@/components/Reveal';
import { Target, Heart, Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-off-white text-slate-gray font-inter">
      {/* Brand Promise Hero */}
      <section className="py-20 px-6 border-b border-slate-100 bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="text-emerald-950 font-montserrat font-bold tracking-widest uppercase text-sm">Our Promise</span>
            <h1 className="font-montserrat text-lime-950 text-5xl font-bold mt-4 mb-6">
              Making Your Child <span className="text-nature-green italic">5 Times Better</span>
            </h1>
            <p className="text-lg leading-relaxed text-emerald-950">
              At SIP Abacus Kasavanahalli, we believe every child is potentially smart. Through systematic 
              training and a fun learning methodology, we transform that potential into world-class performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership & Center Story */}
      <section className="py-24 px-6 bg-gradient-to-t from-nature-green/20 via-off-white to-off-white dark:from-nature-green/10 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl font-bold underline decoration-nature-green decoration-4 underline-offset-8">
                The Kasavanahalli Legacy
              </h2>
              <p className="leading-relaxed">
                Founded in 2017, our center was built on a learner-centric foundation. What started as a 
                vision for quality education has grown into a dominant force in skill development in Bangalore.
              </p>
              <p className="leading-relaxed">
                Led by <strong>Mahuya Sil</strong>, our institute is powered by a dedicated team of 25 teachers 
                and 8 administrators. We pride ourselves on creating a positive learning atmosphere where 
                dedication and commitment are our core values.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-4xl font-bold text-nature-green">Ranked 3rd</p>
                  <p className="text-xs uppercase font-bold text-slate-400">Internationally (2025)</p>
                </div>
                <div className="border-l border-slate-200 pl-8">
                  <p className="text-4xl font-bold text-nature-green">Top 3</p>
                  <p className="text-xs uppercase font-bold text-slate-400">All-India (2024)</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 rotate-2">
              <img 
                src="/center-team.jpg" 
                alt="SIP Abacus Kasavanahalli Team" 
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 bg-slate-gray text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="flex gap-6">
              <Target className="w-12 h-12 text-nature-green shrink-0" />
              <div>
                <h3 className="font-montserrat text-2xl font-bold mb-4">Our Vision</h3>
                <p className="opacity-80">
                  To significantly impact the mental potential of children nationally by delivering 
                  world-class programs that build lifelong skills and confidence.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex gap-6">
              <Heart className="w-12 h-12 text-nature-green shrink-0" />
              <div>
                <h3 className="font-montserrat text-2xl font-bold mb-4">Our Values</h3>
                <p className="opacity-80">
                  Passion for the child's growth, building strong relationships with parents, 
                  taking responsibility, and continuous learning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-24 px-6 bg-gradient-to-t from-nature-green/20 via-off-white to-off-white dark:from-nature-green/10 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-montserrat text-4xl font-bold text-center mb-16">Key Differentiators</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, title: "Small Batches", text: "8-10 students per batch ensures individual attention." },
              { icon: Award, title: "ISO Certified", text: "Proven training methodology adhering to ISO 9001:2015 standards." },
              { icon: Zap, title: "Analytical Dashboard", text: "Monitor learning outcomes and progress in real-time via sipkvh.app." }
            ].map((item, idx) => (
              <Reveal key={idx}>
                <div className="flex flex-col items-center p-8">
                  <item.icon className="w-10 h-10 text-nature-green mb-6" />
                  <h4 className="font-montserrat font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
  {/* Inside src/app/about/page.tsx (Comparison Table Section) */}
<section className="py-24 px-6 bg-gradient-to-t from-nature-green/20 via-off-white to-off-white dark:from-nature-green/10 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300">
  <div className="max-w-6xl mx-auto">
    <Reveal>
      <h2 className="font-montserrat text-4xl font-bold text-center mb-16 dark:text-white">
        Why Parents Choose <span className="text-nature-green italic underline underline-offset-8">Our Center</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md">
          <thead>
            <tr className="bg-slate-gray dark:bg-slate-700 text-white font-montserrat uppercase text-sm tracking-widest">
              <th className="p-8">Feature</th>
              <th className="p-8">SIP Abacus Kasavanahalli</th>
              <th className="p-8">Other Local Institutes</th>
            </tr>
          </thead>
          <tbody className="font-inter text-slate-gray dark:text-slate-200">
            <tr className="border-b border-slate-100 dark:border-slate-700 bg-nature-green/5 dark:bg-nature-green/10">
              <td className="p-8 font-bold">Batch Size</td>
              <td className="p-8 text-nature-green font-bold">Small (8-10 students) </td>
              <td className="p-8 text-slate-400 dark:text-slate-500">Often 15-20+ students</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700 bg-nature-green/5 dark:bg-nature-green/10">
              <td className="p-8 font-bold">Monitoring</td>
              <td className="p-8 font-bold">In-house sipkvh.app Software</td>
              <td className="p-8 text-slate-400 dark:text-slate-500">Manual / None</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700 bg-nature-green/5 dark:bg-nature-green/10">
              <td className="p-8 font-bold">Practice Support</td>
              <td className="p-8 font-bold">Free Extra Practice Classes</td>
              <td className="p-8 text-slate-400 dark:text-slate-500">Rarely Available</td>
            </tr>
            <tr className="border-b border-slate-100 dark:border-slate-700 bg-nature-green/5 dark:bg-nature-green/10">
              <td className="p-8 font-bold">Performance Reports</td>
              <td className="p-8 font-bold">Monthly Analytical Reports</td>
              <td className="p-8 text-slate-400 dark:text-slate-500">Quarterly / General only</td>
            </tr>
            {/* ... other rows following the same pattern ... */}
          </tbody>
        </table>
      </div>
    </Reveal>
  </div>
</section>
    </div>
  );
}