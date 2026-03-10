import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  className?: string;
}

export default function WhatsAppButton({ phoneNumber, message, className = "" }: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className={`flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-white text-white hover:text-black px-6 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-500/20 ${className}`}
    >
      <MessageCircle size={24} />
      <span>Enquire on WhatsApp</span>
    </button>
  );
}
