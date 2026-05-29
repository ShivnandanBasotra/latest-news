'use client';

import { useState } from 'react';
import Image from 'next/image';

const sendToWhatsApp = (message: string) => {
  const phoneNumber = '919149511328';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartChat = () => {
    sendToWhatsApp('Hey Rajdani Travels! I want to know more about your tour packages.');
  };

  const handleCallUs = () => {
    window.open('tel:+919149511328');
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-3 md:mb-4 bg-white rounded-lg border-2 border-[#1A1A1A] shadow-xl w-64 md:w-80 p-3 md:p-4 animate-in">
          <div className="bg-[#FBBF24] text-[#1A1A1A] p-3 md:p-4 rounded-lg mb-3 md:mb-4 border-2 border-[#1A1A1A]">
            <h3 className="font-bold mb-0.5 md:mb-1 text-sm md:text-base">Chat with Rajdani Travels</h3>
            <p className="text-xs md:text-sm">We typically reply within a few minutes</p>
          </div>
          
          <div className="space-y-2 md:space-y-3">
            <button 
              onClick={handleStartChat}
              className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-[#1A1A1A] text-white font-semibold rounded-lg hover:bg-[#333333] transition text-xs md:text-sm cursor-pointer"
            >
              💬 Start Chat
            </button>
            <button 
              onClick={handleCallUs}
              className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-[#FFF8F0] text-[#1A1A1A] font-semibold rounded-lg border-2 border-[#1A1A1A] hover:bg-[#FBBF24] transition text-xs md:text-sm cursor-pointer"
            >
              📞 Call Us
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=""
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94whatsapp%20phone%20icon%20vector_8704826-7CFxK8Aq2cYzo2p7zu9cQS5Z7fENVF.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-14 h-14 hover:scale-110 cursor-pointer object-contain"
        />
      </button>
    </div>
  );
}
