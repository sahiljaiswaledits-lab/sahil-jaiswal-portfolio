import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, MapPin, Tag, Volume2, ShieldAlert } from 'lucide-react';
import { PortfolioProject } from '../types.ts';
import { getYouTubeEmbedUrl } from '../utils/youtube.ts';

interface ReelModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ project, isOpen, onClose }) => {
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIframeError(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const embedUrl = getYouTubeEmbedUrl(project.videoUrl, true);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="reel-modal-container"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
        >
          {/* Backdrop with deep cinematic blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl cursor-pointer"
          />

          {/* Modal Content Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[420px] flex flex-col items-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Project Info and Close */}
            <div className="w-full flex items-center justify-between mb-3 px-1 text-white">
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-[#C5A059] flex items-center tracking-wider">
                    <MapPin className="w-3 h-3 mr-1 text-[#C5A059]" />
                    {project.destination}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-[11px] font-mono text-[#9E9C96] tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-cinzel text-base sm:text-lg font-semibold text-[#F5F3EF] leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                id="close-reel-modal-btn"
                className="p-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#C5A059] text-white hover:text-[#080808] transition-all duration-200 border border-white/10 hover:border-[#C5A059] shadow-lg cursor-pointer"
                aria-label="Close reel player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 9:16 Vertical Video Frame */}
            <div className="relative w-full aspect-[9/16] max-h-[78vh] rounded-[20px] overflow-hidden bg-[#0F0F0F] border border-[#C5A059]/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
              {embedUrl ? (
                <iframe
                  id="reel-youtube-iframe"
                  src={embedUrl}
                  title={`${project.title} - Reel`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0 object-cover"
                  onError={() => setIframeError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#9E9C96]">
                  <p className="text-sm">Video URL is missing or invalid.</p>
                  <p className="text-xs text-[#66645E] mt-2">
                    Update videoUrl in <code className="text-[#C5A059]">src/data/portfolioData.ts</code>
                  </p>
                </div>
              )}

              {/* Graceful Fallback if embed restrictions occur */}
              {iframeError && (
                <div className="absolute inset-0 bg-black/90 p-6 flex flex-col items-center justify-center text-center">
                  <ShieldAlert className="w-10 h-10 text-[#C5A059] mb-3" />
                  <p className="text-sm text-white font-medium mb-1">External Player Notice</p>
                  <p className="text-xs text-[#9E9C96] mb-4 max-w-xs">
                    This video can also be viewed directly on YouTube.
                  </p>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#C5A059] text-black font-semibold text-xs tracking-wider uppercase flex items-center space-x-1.5"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="w-full mt-3 flex items-center justify-between px-2 text-xs text-[#9E9C96] font-mono">
              <span className="text-[11px] text-[#66645E]">Press ESC to close</span>
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A059] transition-colors flex items-center space-x-1 text-[11px]"
              >
                <span>Open direct link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
