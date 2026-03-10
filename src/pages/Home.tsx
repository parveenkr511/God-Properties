import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Categories />

      <Services />

      <WhyChooseUs />
      
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg via-luxury-bg/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Ready to find your <br />
              <span className="text-sage italic">Perfect Home?</span>
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Our expert consultants are ready to guide you through Noida's most exclusive real estate opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919650423650?text=Hi, I'm looking for an agent to help me find a property in Noida."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 px-8 py-4 rounded-full font-bold transition-all"
              >
                Contact an Agent
              </a>
              <a
                href="https://wa.me/919650423650?text=Hi, I'm ready to find my perfect home. Can we discuss some options?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage hover:bg-white text-luxury-bg hover:text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-sage/20"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
