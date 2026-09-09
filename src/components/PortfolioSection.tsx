import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData.ts';
import { PortfolioProject } from '../types.ts';
import { getReelPlayerUrl } from '../utils/youtube.ts';

interface InlineReelCardProps {
  project: PortfolioProject;
  index: number;
}

const InlineReelCard: React.FC<InlineReelCardProps> = ({ project, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playerUrl = getReelPlayerUrl(project.videoUrl);

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col select-none"
      id={`portfolio-project-${project.id}`}
    >
      {/* Vertical 9:16 Card Container with In-Card Video Player */}
      <div
        onClick={!isPlaying ? handleStartPlay : undefined}
        onContextMenu={!isPlaying ? (e) => e.preventDefault() : undefined}
        data-protected-media={!isPlaying ? "true" : undefined}
        className={`relative aspect-[9/16] w-full rounded-[18px] overflow-hidden bg-[#111111] border border-[#222222] group-hover:border-[#C5A059]/60 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_45px_rgba(197,160,89,0.18)] ${
          !isPlaying ? 'cursor-pointer protected-container select-none' : ''
        }`}
        title={!isPlaying ? `Click to play ${project.title}` : undefined}
      >
        {isPlaying ? (
          /* Active In-Card YouTube Player (Mounted in exact same card upon click) */
          <div className="relative w-full h-full bg-black">
            {playerUrl && (
              <iframe
                src={playerUrl}
                title={`${project.title} — Reel`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            )}
          </div>
        ) : (
          /* Normal State: Bright Natural Thumbnail + Centered Play Button (No Dark Overlays) */
          <>
            {/* Poster / Thumbnail Background Image (Bright, Original Contrast, No Dimming) */}
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none protected-media"
              loading="lazy"
            />

            {/* Centered Luxury Play Button (Sits directly over bright thumbnail without black gradient) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A059]/80 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] flex items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_35px_rgba(197,160,89,0.5)] group-hover:scale-110">
                <Play className="w-7 h-7 text-[#C5A059] group-hover:text-black fill-[#C5A059] group-hover:fill-black transition-colors ml-1" />
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      {/* Background divider line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#262626] to-transparent mb-20" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Section label */}
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span
              id="portfolio-section-label"
              className="text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase font-semibold"
            >
              MY WORK
            </span>
          </div>

          {/* Heading */}
          <h2
            id="portfolio-heading"
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F3EF] tracking-tight mb-5"
          >
            Watch The Edits
          </h2>

          {/* Description */}
          <p
            id="portfolio-description"
            className="text-base sm:text-lg text-[#9E9C96] font-normal leading-relaxed max-w-2xl mx-auto"
          >
            A selection of travel Reels crafted to turn destinations, experiences and holiday packages into content people want to watch.
          </p>
        </div>

        {/* 4 Projects Grid (9:16 vertical cards with direct in-card click playback) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <InlineReelCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* In-Card playback notice banner */}
        <div className="mt-14 p-4 rounded-lg bg-[#111111]/70 border border-[#222222] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E9C96] font-mono">
          <div className="flex items-center space-x-2.5 mb-2 sm:mb-0">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>In-Card Video Player: Click any Reel to play directly in-place with full audio & YouTube controls</span>
          </div>
          <span className="text-[11px] text-[#C5A059]">Direct Inline Playback</span>
        </div>

      </div>
    </section>
  );
};
