import React from 'react';
import { ShieldCheck, Award, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: 'Trusted Expertise',
    description: 'Over 12 years of experience in Noida\'s real estate market with a proven track record of excellence.',
    icon: <Award className="text-sage" size={32} />,
  },
  {
    title: 'Verified Properties',
    description: 'Every listing in our portfolio undergoes a rigorous verification process to ensure legal and structural integrity.',
    icon: <ShieldCheck className="text-sage" size={32} />,
  },
  {
    title: 'Client-Centric Approach',
    description: 'We don\'t just sell properties; we build relationships. Your satisfaction is our primary metric of success.',
    icon: <Users className="text-sage" size={32} />,
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated team is always available to assist you with your queries, from initial search to final handover.',
    icon: <Clock className="text-sage" size={32} />,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-luxury-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sage font-bold uppercase tracking-widest text-xs">The GOD Advantage</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Why Choose <span className="text-sage italic">GOD Properties?</span></h2>
          <p className="text-gray-400 font-light">We combine market intelligence with personalized service to deliver a real estate experience that is seamless, transparent, and rewarding.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-sage/30 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
