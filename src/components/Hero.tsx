import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Home"
          className="w-full h-full object-cover brightness-50 blur-[3px] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-luxury-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage/20 border border-sage/30 text-sage text-xs font-bold uppercase tracking-[0.2em]">
            Premium Real Estate Noida
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight">
            Discover Your <br />
            <span className="text-sage italic">Dream House</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Exclusive properties in the heart of Noida. From luxury penthouses to Rental Flats, we find the space that defines you.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/919650423650?text=Hi, I'm interested in your property services. Can you provide more details?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage hover:bg-white text-luxury-bg hover:text-black px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-sage/20 uppercase tracking-widest text-sm"
            >
              Enquire Now
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { label: 'Properties', value: '500+' },
            { label: 'Happy Clients', value: '1.2k+' },
            { label: 'Awards Won', value: '15+' },
            { label: 'Years Exp.', value: '12+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-sage rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
