import React from 'react';
import { Building2, Key, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Property Sales',
    description: 'Expert guidance through the buying and selling process for residential and commercial properties.',
    icon: <Building2 className="text-sage" size={32} />,
  },
  {
    title: 'Property Management',
    description: 'Comprehensive management services for property owners, ensuring peace of mind and optimal returns.',
    icon: <ShieldCheck className="text-sage" size={32} />,
  },
  {
    title: 'Investment Consulting',
    description: 'Strategic advice for real estate investors, backed by deep market intelligence and ROI analysis.',
    icon: <BarChart3 className="text-sage" size={32} />,
  },
  {
    title: 'Rental Services',
    description: 'Seamless rental solutions for both landlords and tenants across Noida\'s prime locations.',
    icon: <Key className="text-sage" size={32} />,
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sage font-bold uppercase tracking-widest text-xs">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Premium <span className="text-sage italic">Real Estate Services</span></h2>
          <p className="text-gray-400 font-light">We provide a full spectrum of real estate solutions designed to meet the highest standards of luxury and efficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-luxury-card border border-white/5 hover:border-sage/30 transition-all group text-center"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
