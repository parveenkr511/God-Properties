import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, Landmark, Map } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  {
    name: 'Flats',
    description: 'Modern living in the sky',
    icon: <Home size={24} />,
    image: 'https://images.unsplash.com/photo-1556784344-ad913c73cfc4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: '120+ Units'
  },
  {
    name: 'Villas',
    description: 'Ultimate privacy and luxury',
    icon: <Landmark size={24} />,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: '45+ Units'
  },
  {
    name: 'Commercial',
    description: 'Strategic business spaces',
    icon: <Building2 size={24} />,
    image: 'https://images.pexels.com/photos/7071/space-desk-office-workspace.jpg',
    count: '80+ Units'
  },
  {
    name: 'Plots',
    description: 'Build your own legacy',
    icon: <Map size={24} />,
    image: 'https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    count: '60+ Plots'
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-sage font-bold uppercase tracking-widest text-[10px]">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Explore Our <span className="text-sage italic">Categories</span></h2>
            <p className="text-gray-400 text-sm font-light">Whether you're looking for a cozy flat or a sprawling commercial hub, we have the perfect match.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="text-sage mb-3 transform group-hover:-translate-y-1 transition-transform duration-500">
                    {cat.icon}
                  </div>
<h3 className="text-lg font-serif font-bold text-black mb-1">{cat.name}</h3>

<p className="text-gray-800 text-[11px] mb-3 line-clamp-2">
  {cat.description}
</p>                  <a
                    href={`https://wa.me/919650423650?text=Hi, I'm interested in ${cat.name}. Can you provide more details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-sage text-luxury-bg py-2 px-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
                  >
                    Contact US
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
