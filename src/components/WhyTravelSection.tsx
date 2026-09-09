import React from 'react';
import { motion } from 'motion/react';

export const WhyTravelSection: React.FC = () => {
  const points = [
    {
      number: "01",
      title: "DESTINATION FIRST",
      description: "Make the destination instantly feel desirable.",
    },
    {
      number: "02",
      title: "FAST-PACED STORYTELLING",
      description: "Keep the viewer engaged from the first second.",
    },
    {
      number: "03",
      title: "PACKAGE-FOCUSED EDITING",
      description: "Present the offer clearly without making the Reel feel like a boring advertisement.",
    },
  ];

  return (
    <section id="why-travel" className="py-20 md:py-28 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Top Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#262626] to-transparent mb-16" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span
              id="why-travel-eyebrow"
              className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase font-semibold"
            >
              EDITING METHODOLOGY
            </span>
          </div>
          <h2
            id="why-travel-heading"
            className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight"
          >
            Why Travel Content
          </h2>
        </div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 rounded-[18px] bg-[#111111] border border-[#222222] hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between"
              id={`why-travel-point-${point.number}`}
            >
              <div>
                {/* Number & Accent */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-cinzel text-3xl font-bold text-[#C5A059] tracking-wider">
                    {point.number}
                  </span>
                  <span className="w-8 h-[1px] bg-[#333333] group-hover:bg-[#C5A059] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#F5F3EF] tracking-wide mb-3 uppercase">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9E9C96] leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono text-[#66645E]">
                <span>Retention Priority</span>
                <span className="text-[#C5A059]/80 font-medium">9:16 Optimized</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
