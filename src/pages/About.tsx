import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-sage font-bold uppercase tracking-widest text-xs">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Redefining <br />
              <span className="text-sage italic">Luxury Living</span> in Noida
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Founded on the principles of trust, transparency, and excellence, GOD Properties has been Noida's premier real estate consultancy for over a decade. We specialize in high-end residential and commercial properties, offering a curated portfolio that represents the pinnacle of luxury living.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-serif font-bold text-sage">12+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-sage">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Properties Delivered</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-morphism p-8 rounded-3xl hidden md:block max-w-xs">
              <p className="text-sm font-light italic text-gray-300">
                "Our mission is to provide not just a property, but a lifestyle that reflects your success and aspirations."
              </p>
              <div className="mt-4 font-serif font-bold text-sage">— Vikram Singh, Founder</div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="py-24 border-y border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sage font-bold uppercase tracking-widest text-xs">Our Core Values</span>
            <h2 className="text-4xl font-serif font-bold">The Pillars of <span className="text-sage italic">Our Success</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We maintain the highest ethical standards in every transaction.', icon: <ShieldCheck size={32} /> },
              { title: 'Excellence', desc: 'We strive for perfection in our service and property selection.', icon: <Award size={32} /> },
              { title: 'Innovation', desc: 'We leverage modern technology to enhance the real estate experience.', icon: <Clock size={32} /> },
              { title: 'Client-First', desc: 'Your goals and satisfaction are our primary focus.', icon: <Users size={32} /> },
            ].map((value, idx) => (
              <div key={value.title} className="p-8 rounded-3xl bg-luxury-card border border-white/5 text-center space-y-4">
                <div className="text-sage flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-serif font-bold">{value.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
