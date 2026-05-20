'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center backdrop-blur-2xl border-b border-white/[0.06] bg-black/60">
        <Logo showText={false} />
        
        {/* Desktop Links - hidden on smaller than md */}
        <div className="hidden md:flex items-center gap-3 lg:gap-8 text-[11px] lg:text-sm text-gray-400 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap ${
                pathname === link.href ? 'text-white' : 'hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="https://calendly.com/vijay-01" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-all whitespace-nowrap"
          >
            Schedule a Call
          </a>

          {/* Mobile Menu Button - hidden on md and above */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none flex-shrink-0"
            aria-label="Toggle menu"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-8 px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                pathname === link.href ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
