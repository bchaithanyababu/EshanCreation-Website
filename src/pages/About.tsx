import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, MapPin, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop" 
                alt="Eshan Creations Studio" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold rounded-2xl -z-10 hidden md:block" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">The Legacy of Eshan Creations in Chittoor</h1>
              <p className="text-stone-400 text-lg leading-relaxed">
                Founded with a passion for preserving traditional Indian craftsmanship, Eshan Creations has grown from a small studio into a premier destination for bespoke ethnic wear and custom accessories in Chittoor, Andhra Pradesh.
              </p>
              <p className="text-stone-400 text-lg leading-relaxed">
                Our journey began with a simple vision: to combine the timeless beauty of maggam hand work with modern tailoring techniques. Today, we are proud to be a women-led business that empowers local artisans and brings joy to hundreds of brides through our unique blouses, kids dresses, and handcrafted thread bangles.
              </p>
              <p className="text-stone-400 text-lg leading-relaxed">
                We believe in transparency and connection. That's why we maintain a vibrant presence on <a href="https://www.instagram.com/eshan_creations/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Instagram</a>, where we share our latest designs, behind-the-scenes crafting, and happy client stories. It's our way of staying connected with the modern woman who values both tradition and digital convenience.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-gold mb-2">15+</h3>
                  <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif font-bold text-gold mb-2">5k+</h3>
                  <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-white/10">
          {[
            { icon: <Award className="text-gold w-10 h-10" />, title: "Quality First", desc: "We use only the finest threads, beads, and fabrics to ensure longevity and luxury." },
            { icon: <Users className="text-gold w-10 h-10" />, title: "Expert Artisans", desc: "Our team consists of master tailors and maggam work specialists with decades of skill." },
            { icon: <CheckCircle className="text-gold w-10 h-10" />, title: "Personalized Care", desc: "Every client receives one-on-one attention to ensure their vision is perfectly realized." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gold/5 border border-gold/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Visit Our Boutique</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-stone-300">
            <a 
              href="https://maps.app.goo.gl/TY7Po4FrkyP3jjVx8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-gold transition-colors"
            >
              <MapPin className="text-gold" />
              <span>Eshan Creations, Chittoor, AP</span>
            </a>
            <div className="flex items-center gap-4">
              <Users className="text-gold" />
              <span>Led by Priya & Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
