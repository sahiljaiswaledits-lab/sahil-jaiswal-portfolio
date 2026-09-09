import React from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 md:py-28 relative bg-[#0B0B0B]/60 border-y border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Eyebrow */}
          <div className="flex items-center space-x-2.5 mb-6 justify-center sm:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span
              id="results-eyebrow"
              className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold"
            >
              TRACK RECORD
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="results-heading"
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F3EF] tracking-tight mb-10 text-center sm:text-left"
          >
            EXPERIENCE & RESULTS
          </motion.h2>

          {/* Editorial Display Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-8 sm:p-12 rounded-[20px] bg-[#121212] border border-[#262626] relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-[90px] pointer-events-none" />

            {/* Credibility & Work Statistics (3-column layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pb-10 mb-8 border-b border-[#222222]">
              {/* 1. EXPERIENCE */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">
                  EXPERIENCE
                </span>
                <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3EF]">
                  3 YEARS
                </div>
                <span className="text-xs sm:text-sm text-[#9E9C96] mt-2 font-mono">
                  video editing experience
                </span>
              </div>

              {/* 2. REELS EDITED */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">
                  REELS EDITED
                </span>
                <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3EF]">
                  250+
                </div>
                <span className="text-xs sm:text-sm text-[#9E9C96] mt-2 font-mono">
                  Reels edited to date
                </span>
              </div>

              {/* 3. CLIENTS CLOSED */}
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">
                  CLIENTS CLOSED
                </span>
                <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3EF]">
                  100+
                </div>
                <span className="text-xs sm:text-sm text-[#9E9C96] mt-2 font-mono">
                  clients closed through my editing work
                </span>
              </div>
            </div>

            {/* Short Professional Statement */}
            <div className="mb-8">
              <p
                id="results-statement"
                className="text-base sm:text-lg md:text-xl text-[#E8E6E1] font-light leading-relaxed"
              >
                3 years of video editing experience, 250+ Reels edited, and 100+ clients closed.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start space-x-2.5 pt-6 border-t border-[#1F1F1F]">
              <Info className="w-4 h-4 text-[#66645E] flex-shrink-0 mt-0.5" />
              <p
                id="results-disclaimer"
                className="text-xs sm:text-sm text-[#66645E] font-normal leading-normal italic"
              >
                Figures represent my work experience and completed projects to date.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
