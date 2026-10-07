import React from 'react';
import { CUSTOMER_REVIEWS, REVIEWS_SUMMARY } from '../data/reviews';
import { Star, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF6ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-espresso-700 text-xs font-bold uppercase tracking-wider mb-2 border border-espresso-800/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>REAL GOOGLE REVIEWS</span>
            </div>

            <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-espresso-900 tracking-tight flex items-center gap-2">
              <span>What Customers Say</span>
              <Heart className="w-8 h-8 text-kpink fill-kpink inline-block animate-pulse" />
            </h2>

            {/* Rating Stars Summary */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-base font-extrabold text-espresso-900">
                {REVIEWS_SUMMARY.rating} / 5.0
              </span>
              <span className="text-sm text-espresso-600 font-medium">
                ({REVIEWS_SUMMARY.totalReviews} verified Google reviews)
              </span>
            </div>
          </div>

          {/* See All Reviews Button */}
          <a
            href={REVIEWS_SUMMARY.googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-espresso-900 hover:text-kpink transition-colors px-5 py-2.5 rounded-full border border-espresso-800/15 bg-white shadow-xs self-start md:self-auto group"
          >
            <span>See All Reviews</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Real Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-espresso-800/10 shadow-card-soft flex flex-col justify-between relative group"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-base ${rev.avatarColor} border border-black/5`}
                  >
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-espresso-900 leading-snug">
                      {rev.author}
                    </h3>
                    <span className="text-xs text-espresso-500 font-medium">
                      {rev.reviewCountInfo}
                    </span>
                  </div>
                </div>

                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm sm:text-base text-espresso-800 font-normal leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              {/* Tag / Highlight Dish */}
              <div className="mt-6 pt-3.5 border-t border-cream-200/60 flex items-center justify-between text-xs">
                <span className="text-espresso-500 font-medium">{rev.date}</span>
                {rev.highlightDish && (
                  <span className="bg-kpink-50 text-kpink font-semibold px-2.5 py-0.5 rounded-full text-[11px]">
                    {rev.highlightDish}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Theme Highlights Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-espresso-800/10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-espresso-700">
          <span className="text-espresso-500">Popular Highlights:</span>
          <span className="bg-cream-100 px-3 py-1 rounded-full">✨ Pleasant Atmosphere</span>
          <span className="bg-cream-100 px-3 py-1 rounded-full">🍜 Spicy Shin Ramyun</span>
          <span className="bg-cream-100 px-3 py-1 rounded-full">💜 K-Pop Wall</span>
          <span className="bg-cream-100 px-3 py-1 rounded-full">🧋 Strawberry Bubble Tea</span>
          <span className="bg-cream-100 px-3 py-1 rounded-full">💰 Budget Friendly (₹1–₹400)</span>
        </div>

      </div>
    </section>
  );
};
