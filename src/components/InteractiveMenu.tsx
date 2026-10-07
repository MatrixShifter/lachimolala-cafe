import React, { useState } from 'react';
import { FULL_MENU, MENU_CATEGORIES } from '../data/menu';
import type { MenuCategoryType } from '../data/menu';
import { Search, Flame, Leaf, Sparkles, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = FULL_MENU.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.koreanName && item.koreanName.includes(searchQuery)) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF6ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF85A2]/10 border border-[#FF85A2]/25 text-xs font-bold uppercase tracking-wider text-[#FF537A] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KOREAN STREET FOOD & SIPS</span>
          </div>

          <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-espresso-900 tracking-tight">
            Explore Our Menu
          </h2>

          <p className="mt-2 text-base sm:text-lg text-espresso-700 font-medium">
            Freshly prepared comfort dishes, handcrafted bubble teas and icy bingsu.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 active:scale-95 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-espresso-900 text-white shadow-md'
                    : 'bg-white text-espresso-700 hover:bg-[#F3EAD8] border border-espresso-800/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search dishes, drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-espresso-800/15 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-[#FF537A]/50 transition-all shadow-xs"
            />
            <Search className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-espresso-800/20 max-w-md mx-auto">
            <p className="font-hand text-2xl text-espresso-800 font-bold">No dishes found ♡</p>
            <p className="text-sm text-espresso-600 mt-1">Try another search keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-3xl p-4 border border-espresso-800/10 shadow-card-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Photo Container */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-cream-100 mb-3.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex items-center gap-1.5">
                        {item.spicy && (
                          <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                            <Flame className="w-3 h-3 fill-current" />
                            <span>Spicy</span>
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                            <Leaf className="w-3 h-3 fill-current" />
                            <span>Veg</span>
                          </span>
                        )}
                      </div>

                      {item.koreanName && (
                        <span className="absolute bottom-2 left-2 bg-espresso-900/80 backdrop-blur-xs text-white text-[11px] font-korean px-2 py-0.5 rounded-md shadow-xs">
                          {item.koreanName}
                        </span>
                      )}
                    </div>

                    {/* Title & Category */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-display font-bold text-base sm:text-lg text-espresso-900 leading-snug group-hover:text-[#FF537A] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-espresso-500 bg-[#FAF6ED] px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-espresso-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Editorial Note (NO e-commerce buttons) */}
                  <div className="mt-4 pt-3 border-t border-espresso-800/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-espresso-400 block leading-none">Price</span>
                      <span className="text-lg font-black text-espresso-900 font-display">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF537A] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>Café Pick</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom Editorial Callout */}
        <div className="mt-14 text-center">
          <p className="font-hand text-xl text-espresso-700 font-bold">
            All dishes freshly crafted in our open kitchen in Old Washermanpet ♡
          </p>
          <a
            href="#location"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#FF537A] hover:underline uppercase tracking-wider mt-2"
          >
            <span>Visit the Café to Taste →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
