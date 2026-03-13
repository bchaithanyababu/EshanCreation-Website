import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram as InstaIcon, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const galleryItems = [
  { 
    id: 1, 
    category: 'Bridal', 
    title: 'Heavy Zardosi Bridal Blouse - Eshan Creations Chittoor', 
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DT5R1Y5koyt/'
  },
  { 
    id: 2, 
    category: 'Maggam', 
    title: 'Intricate Peacock Motif Maggam Work Chittoor', 
    image: 'https://images.unsplash.com/photo-1590736910118-24189cc5cc06?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DT0iPEakv9Z/'
  },
  { 
    id: 3, 
    category: 'Bridal', 
    title: 'Royal Velvet Wedding Blouse with Stone Work', 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/reel/DTxmjWKEh3V/'
  },
  { 
    id: 4, 
    category: 'Custom', 
    title: 'Handcrafted Silk Thread Bangles Set Chittoor', 
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/reel/DSsU-F3ErM4/'
  },
  { 
    id: 5, 
    category: 'Bridal', 
    title: 'Floral Aari Work Design for Silk Sarees', 
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DSAqyUFkiqW/'
  },
  { 
    id: 6, 
    category: 'Maggam', 
    title: 'Traditional South Indian Bridal Blouse Chittoor', 
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DR2aLWBEjAz/'
  },
  { 
    id: 7, 
    category: 'Bridal', 
    title: 'Designer Saree Tassels (Kuchu) with Beads', 
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DQd8doYkmVD/'
  },
  { 
    id: 8, 
    category: 'Custom', 
    title: 'Antique Gold Finish Maggam Embroidery', 
    image: 'https://images.unsplash.com/photo-1590736910118-24189cc5cc06?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DQP29SkEqYV/'
  },
  { 
    id: 9, 
    category: 'Maggam', 
    title: 'Cutwork Bridal Blouse Design Chittoor', 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DPQnrX7Eta4/'
  },
  { 
    id: 10, 
    category: 'Bridal', 
    title: 'Bridal Sleeve Embroidery with Pearls', 
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop',
    instaUrl: 'https://www.instagram.com/eshan_creations/p/DO0KpPukqJF/'
  },
  { id: 11, category: 'Custom', title: 'Kids Pattu Langa with Maggam Work Chittoor', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop' },
  { id: 12, category: 'Bridal', title: 'Elbow Length Bridal Maggam Blouse', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop' },
  { id: 13, category: 'Custom', title: 'Designer Frock for Kids - Eshan Creations', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop' },
  { id: 14, category: 'Maggam', title: 'Lotus Motif Maggam Work Design', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop' },
  { id: 15, category: 'Custom', title: 'Multi-color Silk Thread Bangles Chittoor', image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop' },
  { id: 16, category: 'Bridal', title: 'Grand Bridal Blouse with Latkans', image: 'https://images.unsplash.com/photo-1590736910118-24189cc5cc06?q=80&w=1000&auto=format&fit=crop' },
];

const categories = ['All', 'Bridal', 'Maggam', 'Custom'];

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-medium tracking-[0.3em] uppercase mb-4 block">Visual Showcase</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Masterpieces</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg mb-10">
            A curated collection of our finest work in Chittoor, showcasing the intricate details and craftsmanship that define Eshan Creations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full border transition-all duration-300 uppercase tracking-widest text-xs font-bold",
                  filter === cat 
                    ? "bg-gold border-gold text-black" 
                    : "border-white/10 text-stone-400 hover:border-gold/50 hover:text-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer aspect-square overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-start mb-auto">
                    <span className="text-gold text-xs uppercase tracking-widest">{item.category}</span>
                    {item.instaUrl && (
                      <a 
                        href={item.instaUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gold transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <InstaIcon size={18} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-white font-serif text-lg">{item.title}</h3>
                  {item.instaUrl && (
                    <a 
                      href={item.instaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-[10px] uppercase tracking-[0.2em] mt-2 flex items-center gap-1 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Instagram <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
