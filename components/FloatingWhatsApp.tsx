'use client';

import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

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
            <button className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-[#1A1A1A] text-white font-semibold rounded-lg hover:bg-[#333333] transition text-xs md:text-sm">
              💬 Start Chat
            </button>
            <button className="w-full px-3 md:px-4 py-1.5 md:py-2 bg-[#FFF8F0] text-[#1A1A1A] font-semibold rounded-lg border-2 border-[#1A1A1A] hover:bg-[#FBBF24] transition text-xs md:text-sm">
              📞 Call Us
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full border-2 border-[#1A1A1A] flex items-center justify-center text-2xl md:text-3xl shadow-lg hover:scale-110 transition-transform hover:bg-[#20BA5A]"
      >
        💬
      </button>
    </div>
  );
}
