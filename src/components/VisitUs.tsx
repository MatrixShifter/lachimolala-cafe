import React from 'react';
import { BUSINESS } from '../data/business';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Utensils, Car, PackageCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const VisitUs: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF6ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-espresso-700 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-kpink" />
            <span>FIND YOUR WAY HERE</span>
          </div>

          <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-espresso-900 tracking-tight">
            Visit Us in Chennai
          </h2>

          <p className="mt-2 text-base sm:text-lg text-espresso-700 font-medium">
            Located conveniently on W Kal Mandapam Rd in Old Washermanpet.
          </p>
        </div>

        {/* 2-Column Info & Map Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details & Action Buttons (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-espresso-800/10 shadow-card-soft flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-kpink-50 border border-kpink/20 flex items-center justify-center text-kpink flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-espresso-900">
                    Café Location
                  </h3>
                  <p className="text-sm text-espresso-700 leading-relaxed mt-1">
                    {BUSINESS.address.line1}, {BUSINESS.address.line2},<br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} — {BUSINESS.address.pincode}
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-espresso-900">
                    Opening Hours
                  </h3>
                  <p className="text-sm font-semibold text-espresso-800 mt-1">
                    {BUSINESS.hours.daily}
                  </p>
                  <p className="text-xs text-espresso-500">
                    {BUSINESS.hours.note}
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-700 flex-shrink-0 mt-0.5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-espresso-900">
                    Direct Phone Line
                  </h3>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-base font-bold text-espresso-900 hover:text-kpink transition-colors mt-0.5 inline-block"
                  >
                    {BUSINESS.phone}
                  </a>
                  <p className="text-xs text-espresso-500">Call for takeaway & queries</p>
                </div>
              </div>

              {/* Available Services */}
              <div className="pt-4 border-t border-cream-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-espresso-400 block mb-2.5">
                  Available Services
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 text-espresso-800 text-xs font-semibold">
                    <Utensils className="w-3.5 h-3.5 text-kpink" /> Dine-in
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 text-espresso-800 text-xs font-semibold">
                    <Car className="w-3.5 h-3.5 text-kpink" /> Drive-through
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 text-espresso-800 text-xs font-semibold">
                    <PackageCheck className="w-3.5 h-3.5 text-kpink" /> No-contact delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-cream-200/80 flex flex-wrap gap-3">
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-kpink hover:bg-kpink-600 text-white font-bold text-sm px-5 py-3 rounded-full shadow-md shadow-kpink/25 transition-all duration-200 active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-espresso-800/15 hover:border-espresso-800 text-espresso-900 font-bold text-sm px-5 py-3 rounded-full bg-white hover:bg-cream-100 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Café</span>
              </a>

              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm px-5 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white rounded-3xl p-3 sm:p-4 border border-espresso-800/10 shadow-card-soft flex flex-col justify-between overflow-hidden"
          >
            {/* Interactive Embedded Google Maps iframe */}
            <div className="w-full h-[320px] sm:h-[380px] lg:h-full rounded-2xl overflow-hidden bg-cream-200 relative border border-espresso-800/5">
              <iframe
                title="Lachimolala 7 Days a Week Google Map"
                src="https://maps.google.com/maps?q=2,%2055,%20W%20Kal%20Mandapam%20Rd,%20Pudumanaikuppam,%20Old%20Washermanpet,%20Chennai,%20Tamil%20Nadu%20600013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[1.1]"
              />

              {/* Floating Overlay Badge matching reference style */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-espresso-800/10 flex items-center gap-2 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                <span className="font-hand font-bold text-sm text-espresso-900">
                  Lachimolala 7 Days a Week 📍
                </span>
              </div>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-xs text-espresso-600">
              <span>Old Washermanpet, Chennai</span>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-kpink hover:underline"
              >
                Open in Google Maps App →
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
