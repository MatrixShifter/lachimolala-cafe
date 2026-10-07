import { useState } from 'react';
import { Camera, X, ZoomIn, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: '/images/hero-cafe.webp',
      title: 'Warm Café Interior & Tables',
      subtitle: 'Old Washermanpet',
      tag: 'Ambience',
      aspect: 'aspect-[4/3]'
    },
    {
      src: '/images/vibe-neon.webp',
      title: 'Neon Nights & Korean Signs',
      subtitle: 'Purple glow corner',
      tag: 'K-Pop Vibe',
      aspect: 'aspect-[4/3]'
    },
    {
      src: '/images/vibe-wall.jpg',
      title: 'Photocard Grid & Fairy Lights',
      subtitle: 'Memories on the wall',
      tag: 'Photo Corner',
      aspect: 'aspect-[4/3]'
    },
    {
      src: '/images/specialty-ramyun.jpg',
      title: 'Steaming Shin Ramyun',
      subtitle: 'With egg and noodles',
      tag: 'Must Try',
      aspect: 'aspect-square'
    },
    {
      src: '/images/vibe-hangout.jpg',
      title: 'Friends Hangout & Sips',
      subtitle: 'Good vibes always',
      tag: 'Community',
      aspect: 'aspect-[4/3]'
    },
    {
      src: '/images/specialty-boba.jpg',
      title: 'Refreshing Strawberry Boba',
      subtitle: 'Tapioca pearls',
      tag: 'Beverage',
      aspect: 'aspect-square'
    }
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200 text-espresso-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-kpink" />
            <span>CAFÉ VISUAL SNAPSHOTS</span>
          </div>

          <h2 className="font-hand font-bold text-4xl sm:text-5xl md:text-6xl text-espresso-900 tracking-tight flex items-center justify-center gap-2">
            <span>Moments at Lachimolala</span>
            <Heart className="w-7 h-7 text-kpink fill-kpink inline-block animate-pulse" />
          </h2>

          <p className="mt-2 text-base sm:text-lg text-espresso-700 font-medium">
            Take a look inside Chennai’s favorite Korean hangout.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative polaroid-frame p-3 rounded-3xl bg-white cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden bg-espresso-900`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-espresso-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-espresso-900 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-espresso-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  {item.tag}
                </span>
              </div>

              <div className="pt-3 pb-1 px-1">
                <h3 className="font-display font-bold text-base text-espresso-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-espresso-500 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] bg-espresso-900 rounded-3xl overflow-hidden shadow-2xl p-2 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-espresso-900 flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain mx-auto"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
