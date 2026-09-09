import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowDown, Heart, MessageCircle, Send, Bookmark, Music, Volume2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, portfolioProjects } from '../data/portfolioData.ts';

interface HeroSectionProps {
  onViewWorkClick: () => void;
  onWorkTogetherClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewWorkClick,
  onWorkTogetherClick,
}) => {
  const featuredReel = portfolioProjects[0]; // Switzerland Escape

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle cinematic ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#C5A059]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-[#C5A059]" />
              <span
                id="hero-eyebrow"
                className="text-xs md:text-sm font-mono tracking-[0.28em] text-[#C5A059] uppercase font-medium"
              >
                TRAVEL REELS VIDEO EDITOR
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              id="hero-headline"
              className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F3EF] leading-[1.1] mb-8"
            >
              Travel Footage.<br />
              <span className="text-[#C5A059] font-serif font-normal italic pr-2">Turned Into Reels</span><br />
              People Want To Watch.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              id="hero-supporting-text"
              className="text-base sm:text-lg text-[#9E9C96] max-w-xl leading-relaxed mb-10 font-normal"
            >
              I create cinematic, high-retention Reels for travel and tourism businesses — designed to make destinations feel impossible to ignore.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
            >
              {/* Primary CTA */}
              <button
                onClick={onViewWorkClick}
                id="hero-primary-cta"
                className="group relative px-8 py-4 bg-[#C5A059] hover:bg-[#D4B26F] text-[#080808] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_15px_35px_rgba(197,160,89,0.35)] flex items-center justify-center space-x-3 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onWorkTogetherClick}
                id="hero-secondary-cta"
                className="px-8 py-4 border border-[#333333] hover:border-[#C5A059] text-[#F5F3EF] hover:text-[#C5A059] text-xs md:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 bg-[#111111]/40 hover:bg-[#161616] cursor-pointer text-center"
              >
                LET'S WORK TOGETHER
              </button>
            </motion.div>

            {/* Micro editor specs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-12 pt-8 border-t border-[#1C1C1C] flex items-center space-x-6 text-xs text-[#66645E]"
            >
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span className="tracking-wider uppercase font-mono">Specialized in Holiday Packages</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
                <span className="tracking-wider uppercase font-mono">9:16 Vertical Storytelling</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 9:16 Authentic Reel Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative group w-full max-w-[320px] sm:max-w-[340px]"
            >
              {/* Outer Glow / Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-[#C5A059]/30 via-[#C5A059]/10 to-transparent rounded-[28px] blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 9:16 Reel Showcase Device Mockup */}
              <div
                id="hero-reel-mockup"
                onClick={onViewWorkClick}
                onContextMenu={(e) => e.preventDefault()}
                data-protected-media="true"
                className="relative aspect-[9/16] w-full rounded-[24px] overflow-hidden bg-[#111111] border border-[#C5A059]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] cursor-pointer select-none transition-transform duration-500 group-hover:scale-[1.015] protected-container"
              >
                {/* Background Image / Thumbnail */}
                <img
                  src={featuredReel.thumbnail}
                  alt={featuredReel.title}
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.82] contrast-[1.08] transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none protected-media"
                />

                {/* Dark Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/60 pointer-events-none" />

                {/* Top Reels Bar */}
                <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
                  <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    <span className="text-[10px] font-mono tracking-widest text-[#F5F3EF] uppercase font-semibold">
                      REELS PREVIEW
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <Volume2 className="w-3.5 h-3.5 text-white/80" />
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#080808]/70 backdrop-blur-md border border-[#C5A059] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C5A059] shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                    <Play className="w-6 h-6 text-[#C5A059] group-hover:text-[#080808] fill-current ml-1 transition-colors" />
                  </div>
                </div>

                {/* Right-hand side Authentic Instagram Action Column */}
                <div className="absolute right-3 bottom-20 flex flex-col items-center space-y-4 z-10 text-white/90">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:text-[#C5A059] transition-colors">
                      <Heart className="w-5 h-5 text-white fill-white/10" />
                    </div>
                    <span className="text-[10px] font-mono mt-1 font-semibold text-white/90">37.4K</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:text-[#C5A059] transition-colors">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono mt-1 font-semibold text-white/90">482</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:text-[#C5A059] transition-colors">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono mt-1 font-semibold text-white/90">1.8K</span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:text-[#C5A059] transition-colors">
                    <Bookmark className="w-5 h-5 text-white" />
                  </div>

                  {/* Spinning Audio Album Cover */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#C5A059] to-zinc-900 border border-white/40 flex items-center justify-center animate-[spin_6s_linear_infinite]">
                    <Music className="w-3.5 h-3.5 text-[#080808]" />
                  </div>
                </div>

                {/* Bottom Profile, Caption & Audio details */}
                <div className="absolute bottom-0 left-0 right-14 p-4 z-10 text-left">
                  {/* Creator Tag */}
                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mb-2 hover:opacity-80 transition-opacity"
                    title="Follow on Instagram"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#C5A059] text-[#080808] font-bold text-[10px] flex items-center justify-center border border-white/20">
                      SJ
                    </div>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {PERSONAL_INFO.instagramHandle}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-white/90 font-medium">
                      Editor
                    </span>
                  </a>

                  {/* Reel Caption */}
                  <p className="text-[11px] text-white/90 line-clamp-2 leading-tight mb-2 font-normal">
                    {featuredReel.title} — Winter in the Swiss Alps 🏔️ Cinematic holiday package showcase. Tap to watch full reel.
                  </p>

                  {/* Audio info */}
                  <div className="flex items-center space-x-1.5 text-[10px] text-white/70 font-mono">
                    <Music className="w-3 h-3 text-[#C5A059]" />
                    <span className="truncate">Original Sound • Cinematic Travel Grade</span>
                  </div>
                </div>

                {/* Interactive Click Prompt Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C5A059]/40 group-hover:bg-[#C5A059] transition-colors" />
              </div>

              {/* Caption beneath showcase */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#9E9C96] px-2 font-mono">
                <span className="flex items-center space-x-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Featured Switzerland Package</span>
                </span>
                <span className="text-[#C5A059]">0:30 • 4K 60FPS</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
