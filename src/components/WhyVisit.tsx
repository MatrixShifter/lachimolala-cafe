import { Heart, Sparkles, Music2, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyVisit: React.FC = () => {
  const features = [
    {
      title: 'Delicious Korean Food',
      desc: 'Craving comfort? Indulge in authentic Shin Ramyun, golden Korean egg drop toasts, and sizzling gochujang tteokbokki.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <path d="M4 11C4 16.5 8 20 12 20C16 20 20 16.5 20 11H4Z" />
          <path d="M3 11H21" />
          <path d="M7 6C7 4.5 7.5 3 8.5 2" />
          <path d="M12 7C12 5.5 12.5 4 13.5 3" />
          <path d="M17 6C17 4.5 17.5 3 18.5 2" />
        </svg>
      ),
      tag: 'Authentic Flavors',
      color: 'bg-rose-50 text-rose-600 border-rose-200/60',
      tapeColor: 'washi-tape-pink',
      rotation: 'rotate-[-1deg]'
    },
    {
      title: 'Refreshing Bubble Teas',
      desc: 'Handcrafted fruit teas and creamy milk teas loaded with brown sugar tapioca pearls, freshly shaken every day.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
          <path d="M7 7L8.5 20H15.5L17 7H7Z" />
          <path d="M6 7H18" />
          <path d="M12 2V7" />
          <circle cx="10" cy="16" r="1" fill="currentColor" />
          <circle cx="13" cy="14" r="1" fill="currentColor" />
          <circle cx="14" cy="17" r="1" fill="currentColor" />
          <circle cx="11" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
      tag: 'Fresh Daily',
      color: 'bg-purple-50 text-purple-600 border-purple-200/60',
      tapeColor: 'washi-tape-yellow',
      rotation: 'rotate-[1deg]'
    },
    {
      title: 'K-Pop Themed Ambience',
      desc: 'Immerse in aesthetic purple neon glow, music playlists, photocard walls, and cozy photo corners for your feed.',
      icon: <Music2 className="w-7 h-7" />,
      tag: 'Aesthetic & Neon',
      color: 'bg-pink-50 text-pink-600 border-pink-200/60',
      tapeColor: 'washi-tape-pink',
      rotation: 'rotate-[-1.5deg]'
    },
    {
      title: 'A Cozy Space for Everyone',
      desc: 'Whether you’re catching up with friends, on a cozy date, or reading solo with a hot latte, you’re always welcome.',
      icon: <Users className="w-7 h-7" />,
      tag: 'Warm Hospitality',
      color: 'bg-amber-50 text-amber-700 border-amber-200/60',
      tapeColor: 'washi-tape-yellow',
      rotation: 'rotate-[0.5deg]'
    }
  ];

  return (
    <section id="why-visit" className="relative py-16 sm:py-24 bg-[#FAF6ED] overflow-hidden">
      {/* Decorative Washi Tape Strips on Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/70 border border-espresso-800/10 text-xs font-bold uppercase tracking-wider text-espresso-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-kpink" />
            <span>Chennai’s Korean Hangout</span>
          </div>

          <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-espresso-900 tracking-tight flex items-center justify-center gap-3">
            <span>Why Visit Lachimolala?</span>
            <Heart className="w-8 h-8 text-kpink fill-kpink inline-block animate-bounce" />
          </h2>

          <p className="mt-3 text-base sm:text-lg text-espresso-700 font-medium leading-relaxed">
            More than a café — it's a place to eat, chill, take pictures and make good memories.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-card-soft border border-espresso-800/10 flex flex-col justify-between transition-all duration-300 ${item.rotation}`}
            >
              {/* Washi Tape Accent */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 ${item.tapeColor} w-20 h-5 rotate-[1deg] rounded-sm opacity-90 shadow-xs pointer-events-none`}
              />

              <div>
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border ${item.color} shadow-inner`}
                >
                  {item.icon}
                </div>

                {/* Tag */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-espresso-500 mb-1.5 block">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-espresso-900 leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-espresso-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom detail */}
              <div className="mt-6 pt-4 border-t border-cream-200/60 flex items-center justify-between text-xs text-espresso-500 font-medium">
                <span>7 Days a Week</span>
                <span className="text-kpink font-hand text-base font-bold">Lachimolala ♡</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
