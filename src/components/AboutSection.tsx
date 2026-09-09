import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, getWhatsAppUrl } from '../data/portfolioData.ts';

export const AboutSection: React.FC = () => {
  // Fixed website asset - preserves continuity for Sahil's current session
  const [photoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('sahil_profile_photo');
      if (saved) return saved;
    } catch {
      // ignore
    }
    return PERSONAL_INFO.profilePhoto || '/assets/profile/sahil-jaiswal.jpg';
  });

  // Background sync once to permanent static storage on server if user had uploaded during earlier session
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sahil_profile_photo');
      if (saved && saved.startsWith('data:image')) {
        fetch('/api/sync-profile-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: saved }),
        }).catch(() => {});
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photo Area (Fixed Website Asset) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] sm:max-w-[400px]">
              {/* Photo Frame - Fixed Read-Only Asset */}
              <div
                id="about-photo-container"
                data-protected-media="true"
                onContextMenu={(e) => e.preventDefault()}
                className="relative aspect-[4/5] w-full rounded-[22px] overflow-hidden border border-[#2A2A2A] bg-[#111111] transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)] protected-container select-none"
              >
                <div className="relative w-full h-full select-none" onContextMenu={(e) => e.preventDefault()}>
                  <img
                    id="about-profile-image"
                    src={photoSrc}
                    alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`}
                    referrerPolicy="no-referrer"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover object-center pointer-events-none select-none protected-media"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                      {PERSONAL_INFO.role}
                    </span>
                    <p className="text-sm font-semibold text-[#F5F3EF]">
                      {PERSONAL_INFO.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Biography */}
          <div className="lg:col-span-7 text-left">
            {/* Label */}
            <div className="flex items-center space-x-2.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span
                id="about-label"
                className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold"
              >
                THE CREATIVE EDITOR
              </span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F3EF] tracking-tight mb-8"
            >
              About Me
            </h2>

            {/* Verbatim Text from prompt */}
            <div className="space-y-6 text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed mb-10 max-w-2xl">
              <p id="about-text-p1" className="text-[#F5F3EF] text-lg sm:text-xl font-normal">
                I'm <span className="text-[#C5A059] font-medium">Sahil Jaiswal</span>, a Reels Video Editor focused on travel and tourism content.
              </p>
              <p id="about-text-p2" className="text-[#9E9C96]">
                I turn travel footage, destinations and holiday package information into cinematic short-form videos designed to capture attention and make people want to explore.
              </p>
            </div>

            {/* Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1C1C1C] max-w-xl">
              <div className="p-4 rounded-xl bg-[#111111] border border-[#222222]">
                <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wider block mb-1">
                  CORE SPECIALIZATION
                </span>
                <p className="text-sm font-semibold text-[#F5F3EF]">
                  Holiday Package Reels
                </p>
                <p className="text-xs text-[#9E9C96] mt-1">
                  Tour itineraries, resorts, travel experiences & packages.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-[#222222]">
                <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wider block mb-1">
                  FORMAT & PACING
                </span>
                <p className="text-sm font-semibold text-[#F5F3EF]">
                  9:16 High-Retention Cuts
                </p>
                <p className="text-xs text-[#9E9C96] mt-1">
                  Sound design, seamless speed ramps & destination hooks.
                </p>
              </div>
            </div>

            {/* Direct Connect links */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#9E9C96] hover:text-[#C5A059] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C5A059]" />
                <span>{PERSONAL_INFO.instagramHandle}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#9E9C96] hover:text-[#C5A059] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>WhatsApp: {PERSONAL_INFO.whatsappNumber}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#9E9C96] hover:text-[#C5A059] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
