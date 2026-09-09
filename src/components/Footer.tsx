import React from 'react';
import { ArrowUp, Instagram, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, getWhatsAppUrl } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-16 md:py-20 bg-[#060606] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Identity column */}
          <div className="md:col-span-6 flex flex-col text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#F5F3EF] mb-2">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm font-medium text-[#C5A059] uppercase tracking-[0.2em] font-mono mb-1">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-[#9E9C96] tracking-wider mb-6 font-mono">
              {PERSONAL_INFO.specialization}
            </p>
            <p className="text-xs text-[#66645E] max-w-sm leading-relaxed">
              Crafting high-retention, cinematic 9:16 short-form reels for destinations, luxury resorts, and holiday packages.
            </p>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 flex flex-col text-left space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-1">
              DIRECT CONTACT
            </span>

            {/* Instagram */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs text-[#CCCCCC] hover:text-[#C5A059] transition-colors font-mono"
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>Instagram: {PERSONAL_INFO.instagramHandle}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center space-x-2.5 text-xs text-[#CCCCCC] hover:text-[#C5A059] transition-colors font-mono"
            >
              <Mail className="w-4 h-4 text-[#C5A059]" />
              <span>Email: {PERSONAL_INFO.email}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs text-[#CCCCCC] hover:text-[#C5A059] transition-colors font-mono"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>WhatsApp: {PERSONAL_INFO.whatsappNumber}</span>
            </a>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-xs font-mono tracking-widest text-[#9E9C96] hover:text-[#C5A059] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span className="uppercase">TOP</span>
              <div className="w-8 h-8 rounded-full border border-[#2E2E2E] group-hover:border-[#C5A059] flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#141414] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#66645E]">
          <p>© {new Date().getFullYear()} Sahil Jaiswal. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Cinematic Travel Reels Portfolio</p>
        </div>
      </div>
    </footer>
  );
};
