'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A]">
          <span className="text-[#FBBF24]">Rajdani</span> <span className="hidden sm:inline">Travels</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#home" className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Home</a>
          <a href="#about" className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">About Us</a>
          <a href="#packages" className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Packages</a>
          <a href="#transport" className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Transportation</a>
          <a href="#contact" className="text-sm lg:text-base text-[#1A1A1A] font-semibold hover:text-[#FBBF24] transition">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 w-6 h-6"
        >
          <div className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-full h-0.5 bg-[#1A1A1A] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#FFFFFF] border-t-2 border-[#1A1A1A] flex flex-col gap-3 p-4">
          <a href="#home" className="text-sm text-[#1A1A1A] font-semibold">Home</a>
          <a href="#about" className="text-sm text-[#1A1A1A] font-semibold">About Us</a>
          <a href="#packages" className="text-sm text-[#1A1A1A] font-semibold">Packages</a>
          <a href="#transport" className="text-sm text-[#1A1A1A] font-semibold">Transportation</a>
          <a href="#contact" className="text-sm text-[#1A1A1A] font-semibold">Contact Us</a>
        </nav>
      )}
    </header>
  );
}
