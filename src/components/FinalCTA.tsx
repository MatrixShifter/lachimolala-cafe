import React from 'react';
import { BUSINESS } from '../data/business';
import { ArrowRight, Navigation, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#1B140F] text-white overflow-hidden">
      {/* Background Atmosphere Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/hero-cafe.webp"
          alt="Lachimolala café background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/90 to-espresso-900" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Cute Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-kpink mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>7 DAYS A WEEK IN CHENNAI</span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-3xl mx-auto"
        >
          Ready to Experience Lachimolala?
        </motion.h2>

        {/* Supporting Copy */}
        <p className="mt-4 text-base sm:text-xl text-cream-200/90 font-medium max-w-2xl mx-auto leading-relaxed">
          Great food, cozy vibes and a little bit of Korea — 7 days a week.
        </p>

        {/* Korean Line */}
        <p className="mt-2 font-hand text-xl sm:text-2xl text-kpink-200 font-bold">
          "좋은 커피, 좋은 음식, 좋은 하루 ♡"
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-kpink hover:bg-kpink-600 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-kpink/30 hover:shadow-glow-pink transition-all duration-200 active:scale-95"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-4 rounded-full backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-95"
          >
            <Navigation className="w-4 h-4 text-kpink" />
            <span>Get Directions</span>
          </a>

          <a
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base px-7 py-4 rounded-full shadow-md transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
