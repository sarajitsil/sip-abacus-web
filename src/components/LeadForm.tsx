"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('leads').insert([{
      parent_name: formData.get('parent_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      child_details: formData.get('child_details'),
      status: 'new'
    }]);

    setLoading(false);
    if (!error) {
      setSubmitted(true);
    } else {
      alert("Error submitting form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-nature-green/10 p-8 rounded-xl border border-nature-green text-center">
        <h3 className="font-montserrat font-bold text-nature-green text-xl">Demo Class Booked!</h3>
        <p className="font-inter text-slate-gray mt-2">We will contact you shortly to confirm the slot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-xl shadow-lg border border-slate-100">
      <h3 className="font-montserrat text-2xl font-bold text-slate-gray">Book a Free Demo</h3>
      <p className="font-inter text-sm text-slate-400 mb-4">Start your child's journey to 5x better skills.</p>
      
      <input name="parent_name" placeholder="Parent Name" required 
        className="w-full p-3 rounded border border-slate-200 font-inter focus:ring-2 focus:ring-nature-green outline-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="email" type="email" placeholder="Email" required 
          className="w-full p-3 rounded border border-slate-200 font-inter" />
        <input name="phone" type="tel" placeholder="Phone Number" required 
          className="w-full p-3 rounded border border-slate-200 font-inter" />
      </div>

      <textarea name="child_details" placeholder="Child's Name & Age (Target: 6-12 years)" 
        className="w-full p-3 rounded border border-slate-200 font-inter h-24" />

      <button disabled={loading} type="submit"
        className="w-full bg-nature-green text-white font-montserrat font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all active:scale-95">
        {loading ? 'Submitting...' : 'Unlock Genius Potential'}
      </button>
    </form>
  );
}