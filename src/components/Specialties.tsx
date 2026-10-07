import React from 'react';
import { SPECIALTIES } from '../data/menu';
import { ArrowRight, Flame, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-16 sm:py-24 bg-[#FFFBF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and "Explore Menu" Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#FF537A] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MUST TRY FAVORITES</span>
            </div>
            <h2 className="font-hand font-bold text-4xl sm:text-5xl text-espresso-900 tracking-tight flex items-center gap-2">
              <span>Our Specialties</span>
              <span className="text-amber-500 text-3xl">👑</span>
            </h2>
            <p className="text-espresso-700 text-base font-medium mt-1">
              Customer favourites loved across Chennai!
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-sm font-bold text-espresso-800 hover:text-[#FF537A] transition-colors group self-start md:self-auto px-5 py-2.5 rounded-full border border-espresso-800/15 hover:border-[#FF537A] bg-white shadow-xs"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 5 Food Specialties Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {SPECIALTIES.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative bg-white rounded-3xl p-3.5 border border-espresso-800/10 shadow-card-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Food Image with Zoom on Hover */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-cream-100 mb-3.5">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Spicy Badge if applicable */}
                  {dish.spicy && (
                    <span className="absolute top-2 left-2 bg-rose-600/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <Flame className="w-3 h-3 fill-current" />
                      <span>Spicy</span>
                    </span>
                  )}

                  {/* Korean Subtitle Tag */}
                  {dish.koreanName && (
                    <span className="absolute bottom-2 left-2 bg-espresso-900/80 backdrop-blur-xs text-white text-[11px] font-korean px-2 py-0.5 rounded-md shadow-xs">
                      {dish.koreanName}
                    </span>
                  )}
                </div>

                {/* Food Title & Description */}
                <h3 className="font-display font-bold text-lg text-espresso-900 leading-snug group-hover:text-[#FF537A] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-espresso-600 line-clamp-2 mt-1 leading-relaxed">
                  {dish.description}
                </p>
              </div>

              {/* Price and Signature Tag */}
              <div className="mt-4 pt-3 border-t border-espresso-800/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-espresso-500 font-medium block leading-none">Price</span>
                  <span className="text-lg font-extrabold text-espresso-900 font-display">
                    ₹{dish.price}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF537A] bg-pink-50 px-2 py-0.5 rounded-full">
                  <Heart className="w-3 h-3 fill-current" />
                  <span>Signature</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
