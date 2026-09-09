import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { ResultsSection } from './components/ResultsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { WhyTravelSection } from './components/WhyTravelSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  // Global defense-in-depth protection against image dragging and context menu save actions
  React.useEffect(() => {
    const isProtectedTarget = (target: HTMLElement | null): boolean => {
      if (!target) return false;
      return (
        target.tagName === 'IMG' ||
        Boolean(target.closest('img')) ||
        Boolean(target.closest('.protected-media')) ||
        Boolean(target.closest('.protected-container')) ||
        Boolean(target.closest('[data-protected-media="true"]'))
      );
    };

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (isProtectedTarget(target)) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (isProtectedTarget(target)) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F3EF] selection:bg-[#C5A059]/30 selection:text-[#F5F3EF]">
      {/* Top Fixed Minimal Navigation */}
      <Navbar onContactClick={handleScrollToContact} />

      <main>
        {/* Hero Section */}
        <HeroSection
          onViewWorkClick={handleScrollToWork}
          onWorkTogetherClick={handleScrollToContact}
        />

        {/* Selected Work Portfolio (Holiday Package Reels - Exactly 4 with direct inline playback) */}
        <PortfolioSection />

        {/* Editorial Results & Performance Section */}
        <ResultsSection />

        {/* About Sahil Jaiswal + Portrait Upload Placeholder */}
        <AboutSection />

        {/* Why Travel Content (3 Core Editorial Pillars) */}
        <WhyTravelSection />

        {/* Strong Final Cinematic Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
