import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-sage font-bold uppercase tracking-widest text-xs">Contact Us</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Let's Start a <br />
                <span className="text-sage italic">Conversation</span>
              </h1>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                Whether you're looking to buy, sell, or invest, our expert team is ready to provide personalized guidance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage shrink-0 group-hover:bg-sage group-hover:text-luxury-bg transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-1">Our Office</h4>
                  <p className="text-gray-400 font-light">Shop No-8, BILLABONG HIGH INTERNATIONAL SCHOOL, Sector 34, Noida, UP 201307</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage shrink-0 group-hover:bg-sage group-hover:text-luxury-bg transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-1">Phone</h4>
                  <p className="text-gray-400 font-light">+91 96504 23650</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sage shrink-0 group-hover:bg-sage group-hover:text-luxury-bg transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold mb-1">Email</h4>
                  <p className="text-gray-400 font-light">info@godproperties.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold">Quick Enquiry</h4>
              <WhatsAppButton 
                phoneNumber="919650423650" 
                message="Hi, I'm looking for a property in Noida. Can you help?" 
                className="w-full md:w-auto"
              />
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-morphism p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center space-y-8"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center text-sage mx-auto">
                <MessageCircle size={40} />
              </div>
              <h3 className="text-3xl font-serif font-bold">Instant Enquiry</h3>
              <p className="text-gray-400 font-light max-w-sm">
                Skip the forms! Chat with our expert agents directly on WhatsApp for immediate assistance.
              </p>
              <WhatsAppButton 
                phoneNumber="919650423650" 
                message="Hi, I'm interested in your property services. Can we discuss some options?" 
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
