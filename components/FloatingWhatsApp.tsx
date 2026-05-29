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

      {/* Floating Button */}
      <button
        onClick={handleStartChat}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%94Pngtree%E2%80%94whatsapp%20phone%20icon%20vector_8704826-7CFxK8Aq2cYzo2p7zu9cQS5Z7fENVF.png"
          alt="WhatsApp"
          width={32}
          height={32}
          className=w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full border-2 border-[#1A1A1A] flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:bg-[#20BA5A] cursor-pointer" hover:scale-110 cursor-pointer object-contain"
        />
      </button>
    </div>
  );
}
