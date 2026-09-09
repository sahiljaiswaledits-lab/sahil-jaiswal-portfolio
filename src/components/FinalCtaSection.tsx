import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Instagram, ArrowUpRight, Mail, AlertCircle, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, getWhatsAppUrl } from '../data/portfolioData.ts';

export const FinalCtaSection: React.FC = () => {
  const [showPlaceholderModal, setShowPlaceholderModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isPlaceholderNumber = PERSONAL_INFO.whatsappNumber.includes('[ADD') || !PERSONAL_INFO.whatsappNumber.trim();

  const handleWorkWithMe = () => {
    if (isPlaceholderNumber) {
      setShowPlaceholderModal(true);
    } else {
      const url = getWhatsAppUrl();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span
              id="cta-eyebrow"
              className="text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase font-semibold"
            >
              START A PROJECT
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="final-cta-heading"
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-[#F5F3EF] tracking-tight leading-tight mb-6"
          >
            Have a destination<br className="hidden sm:block" /> to showcase?
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="final-cta-supporting-text"
            className="text-base sm:text-xl text-[#9E9C96] font-light leading-relaxed max-w-xl mx-auto mb-12"
          >
            Let's turn your travel footage into a Reel people actually want to watch.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {/* WORK WITH ME Button */}
            <button
              onClick={handleWorkWithMe}
              id="final-cta-work-with-me-btn"
              className="w-full sm:w-auto px-9 py-4 bg-[#C5A059] hover:bg-[#D4B26F] text-[#080808] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_15px_35px_rgba(197,160,89,0.25)] hover:shadow-[0_20px_45px_rgba(197,160,89,0.35)] flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WORK WITH ME</span>
            </button>

            {/* INSTAGRAM Button */}
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-instagram-btn"
              className="w-full sm:w-auto px-9 py-4 border border-[#333333] hover:border-[#C5A059] bg-[#141414] hover:bg-[#1A1A1A] text-[#F5F3EF] hover:text-[#C5A059] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2.5"
            >
              <Instagram className="w-4 h-4" />
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Direct Email note */}
          <div className="mt-10 pt-6 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-[#9E9C96] font-mono">
            <span>Or inquire via email:</span>
            <button
              onClick={copyEmail}
              className="inline-flex items-center space-x-1.5 text-[#C5A059] hover:underline cursor-pointer"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
              {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
            </button>
          </div>

        </div>
      </div>

      {/* WhatsApp Placeholder Notification Modal */}
      {showPlaceholderModal && (
        <div
          id="whatsapp-placeholder-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div className="bg-[#141414] border border-[#2E2E2E] rounded-2xl max-w-md w-full p-6 text-left shadow-2xl relative">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#F5F3EF]">Connect with Sahil Jaiswal</h3>
                <span className="text-xs font-mono text-[#C5A059]">Holiday Package Reels Editor</span>
              </div>
            </div>

            <p className="text-xs text-[#9E9C96] leading-relaxed mb-4">
              The WhatsApp number is currently marked as <code className="text-[#C5A059]">[ADD WHATSAPP NUMBER HERE]</code> in the project configuration.
            </p>

            <div className="p-3 bg-[#0B0B0B] border border-[#222222] rounded-lg mb-5 text-xs text-[#CCCCCC] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#66645E]">Email:</span>
                <span className="font-mono text-[#F5F3EF]">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#66645E]">Instagram:</span>
                <span className="font-mono text-[#F5F3EF]">{PERSONAL_INFO.instagramHandle}</span>
              </div>
              <div className="pt-2 border-t border-[#1C1C1C] text-[11px] text-[#888888]">
                Sahil can configure his WhatsApp number directly in <code className="text-[#C5A059]">src/data/portfolioData.ts</code>.
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Travel%20Reels%20Editing`}
                className="flex-1 py-2.5 bg-[#C5A059] text-black text-center text-xs font-semibold uppercase tracking-wider rounded transition-colors hover:bg-[#D4B26F]"
              >
                Send Email Now
              </a>
              <button
                onClick={() => setShowPlaceholderModal(false)}
                className="px-4 py-2.5 bg-[#222222] hover:bg-[#2A2A2A] text-white text-xs font-medium uppercase tracking-wider rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
