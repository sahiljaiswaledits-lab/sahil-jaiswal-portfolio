import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Instagram, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#222222]/70 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group cursor-pointer"
          id="nav-logo-btn"
        >
          <span className="font-cinzel tracking-[0.25em] text-sm md:text-base font-semibold text-[#F5F3EF] group-hover:text-[#C5A059] transition-colors block">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#9E9C96] block uppercase font-mono">
            {PERSONAL_INFO.role}
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-medium">
          <button
            onClick={() => scrollToSection('work')}
            id="nav-work-link"
            className="text-[#9E9C96] hover:text-[#F5F3EF] hover:tracking-[0.24em] transition-all cursor-pointer py-1"
          >
            WORK
          </button>
          <button
            onClick={() => scrollToSection('about')}
            id="nav-about-link"
            className="text-[#9E9C96] hover:text-[#F5F3EF] hover:tracking-[0.24em] transition-all cursor-pointer py-1"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            id="nav-contact-link"
            className="text-[#9E9C96] hover:text-[#F5F3EF] hover:tracking-[0.24em] transition-all cursor-pointer py-1"
          >
            CONTACT
          </button>
        </nav>

        {/* Right CTA / Social */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#9E9C96] hover:text-[#C5A059] transition-colors"
            title="Follow on Instagram"
            id="nav-instagram-link"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={onContactClick}
            id="nav-cta-btn"
            className="border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059]/10 text-[#C5A059] text-[11px] tracking-[0.2em] uppercase px-4 py-2 rounded-none transition-all duration-300 flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F5F3EF] p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation"
          id="mobile-menu-toggle-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden bg-[#0D0D0D] border-b border-[#222222] px-6 py-6 transition-all"
        >
          <div className="flex flex-col space-y-5 text-sm tracking-[0.2em] uppercase">
            <button
              onClick={() => scrollToSection('work')}
              className="text-left text-[#9E9C96] hover:text-[#C5A059] transition-colors py-1 cursor-pointer"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-[#9E9C96] hover:text-[#C5A059] transition-colors py-1 cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-[#9E9C96] hover:text-[#C5A059] transition-colors py-1 cursor-pointer"
            >
              CONTACT
            </button>
            <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-[#C5A059]"
              >
                <Instagram className="w-4 h-4" />
                <span>{PERSONAL_INFO.instagramHandle}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="border border-[#C5A059] text-[#C5A059] text-xs px-4 py-2 uppercase tracking-wider cursor-pointer"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
