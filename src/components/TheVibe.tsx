import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const TheVibe: React.FC = () => {
  return (
    <section id="the-vibe" className="py-16 sm:py-24 bg-[#FAF6ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-kpink mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEEL AT HOME</span>
            </div>
            <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-espresso-900 tracking-tight flex items-center gap-2">
              <span>The Vibe</span>
              <Heart className="w-8 h-8 text-kpink fill-kpink inline-block animate-pulse" />
            </h2>
            <p className="text-espresso-700 text-base sm:text-lg font-medium mt-1">
              Good food. Good music. Good people. 7 Days a Week.
            </p>
          </div>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-espresso-800 hover:text-kpink transition-colors group px-5 py-2.5 rounded-full border border-espresso-800/15 bg-white shadow-xs self-start sm:self-auto"
          >
            <span>See Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Real Café Editorial Collage Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Photo 1: Primary Neon Interior (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative polaroid-frame p-3 sm:p-4 rounded-3xl bg-white rotate-[-1deg] shadow-polaroid"
          >
            {/* Washi tape */}
            <div className="absolute -top-3 left-8 washi-tape-pink w-20 h-5 rotate-[-2deg] rounded-xs opacity-90 shadow-xs" />

            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-espresso-900">
              <img
                src="/images/vibe-neon.webp"
                alt="Lachimolala Cozy Neon Seating and Korean sign"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="pt-3 pb-1 text-center">
              <p className="font-hand font-bold text-lg sm:text-xl text-espresso-900">
                A cozy space for everyone ♡
              </p>
              <span className="text-[11px] font-korean text-kpink font-bold">
                라치몰라 7 DAYS A WEEK
              </span>
            </div>
          </motion.div>

          {/* Photo 2: Café Tables & Ambient Interior (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 relative polaroid-frame p-3 sm:p-4 rounded-3xl bg-white rotate-[1.5deg] shadow-polaroid md:-mt-4"
          >
            {/* Washi tape */}
            <div className="absolute -top-3 right-8 washi-tape-yellow w-20 h-5 rotate-[2deg] rounded-xs opacity-90 shadow-xs" />

            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-espresso-900">
              <img
                src="/images/hero-cafe.webp"
                alt="Lachimolala Café Interior and Hanging Lights"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-3 pb-1 text-center">
              <p className="font-hand font-bold text-lg sm:text-xl text-espresso-900">
                Cozy tables & fairy lights ✨
              </p>
              <span className="text-[11px] text-espresso-600 font-semibold">
                Old Washermanpet, Chennai
              </span>
            </div>
          </motion.div>

          {/* Photo 3: Friends Hangout (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 relative polaroid-frame p-3 rounded-2xl bg-white rotate-[-2deg] shadow-polaroid"
          >
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-espresso-900">
              <img
                src="/images/vibe-hangout.jpg"
                alt="Friends laughing with Korean snacks"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-2 pb-0.5 text-center">
              <p className="font-hand font-bold text-base text-espresso-900">
                Laughter & Boba ♡
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
