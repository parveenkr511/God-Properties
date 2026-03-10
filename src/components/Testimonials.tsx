import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: '1',
    name: 'Rajesh Khanna',
    role: 'CEO, TechNova',
    content: 'GOD Properties helped me find the perfect penthouse in Sector 94. Their attention to detail and professionalism is unmatched in the Noida market.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Interior Designer',
    content: 'As a designer, I have high standards. The villa they showed me exceeded all expectations. Transparent dealings and smooth process.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Amitabh Verma',
    role: 'Real Estate Investor',
    content: 'I have closed multiple commercial deals with them. Their market insights and ROI projections are always spot on. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-sage font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">What Our <span className="text-sage italic">Elite Clients</span> Say About Us</h2>
            <p className="text-gray-400 font-light text-lg">We take pride in delivering excellence. Our clients' success stories are the foundation of our reputation.</p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-sage hover:text-luxury-bg transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-sage hover:text-luxury-bg transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-morphism p-10 rounded-3xl relative"
              >
                <Quote className="absolute top-8 right-8 text-sage/20" size={64} />
                <p className="text-xl font-light italic text-gray-200 leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-sage"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-sage text-xs uppercase tracking-widest">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
