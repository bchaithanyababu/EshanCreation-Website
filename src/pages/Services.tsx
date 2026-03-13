import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Ruler, RefreshCw, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    title: "Bridal Blouse Designing",
    description: "Our signature service. We create stunning bridal blouses with custom patterns and exquisite embroidery that perfectly complements your wedding saree.",
    icon: <Star className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Maggam Hand Work",
    description: "Traditional hand embroidery using the maggam (hoop) technique. Intricate zardosi, aari, and beadwork performed by master artisans.",
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Custom Tailoring",
    description: "Bespoke stitching for lehengas, suits, and ethnic wear. We ensure a perfect fit that enhances your natural silhouette.",
    icon: <Scissors className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Pattern Drafting",
    description: "Professional pattern making for unique designs. We bring your sketches and ideas to life with technical precision.",
    icon: <Ruler className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Alterations & Refitting",
    description: "Expert alterations to breathe new life into your existing wardrobe. We handle delicate fabrics and complex designs with care.",
    icon: <RefreshCw className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop"
  }
];

export const Services = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Bespoke Services</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            From traditional maggam work to modern silhouettes, we offer a comprehensive range of tailoring services tailored to your unique style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-24">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col gap-12 items-center",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{service.title}</h2>
                <p className="text-stone-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4">
                  <button className="text-gold font-bold tracking-widest uppercase text-sm border-b border-gold/30 pb-1 hover:border-gold transition-all">
                    Inquire Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
