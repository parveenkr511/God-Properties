import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-sage">
              GOD <span className="text-white">PROPERTIES</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining luxury living in Noida. We provide premium real estate solutions tailored to your lifestyle and investment needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sage hover:text-luxury-bg transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sage hover:text-luxury-bg transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sage hover:text-luxury-bg transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-sage text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-sage text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sage text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Categories</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/919650423650?text=Hi, I'm interested in Flats." className="text-gray-400 hover:text-sage text-sm transition-colors">Flats</a></li>
              <li><a href="https://wa.me/919650423650?text=Hi, I'm interested in Villas." className="text-gray-400 hover:text-sage text-sm transition-colors">Luxury Villas</a></li>
              <li><a href="https://wa.me/919650423650?text=Hi, I'm interested in Commercial Spaces." className="text-gray-400 hover:text-sage text-sm transition-colors">Commercial Spaces</a></li>
              <li><a href="https://wa.me/919650423650?text=Hi, I'm interested in Residential Plots." className="text-gray-400 hover:text-sage text-sm transition-colors">Residential Plots</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-sage shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Shop No-8, BILLABONG HIGH INTERNATIONAL SCHOOL, Sector 34, Noida, UP 201307</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-sage shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 96504 23650</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-sage shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@godproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} GOD PROPERTIES. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
