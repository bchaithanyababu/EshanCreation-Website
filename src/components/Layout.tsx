import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, MessageCircle, Sparkles as LogoIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Book', path: '/book' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12",
      scrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 group-hover:bg-gold/30 transition-all duration-500">
            <LogoIcon className="text-gold" size={20} />
          </div>
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter gold-gradient-text">
            ESHAN CREATIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "nav-link relative group",
                location.pathname === link.path && "active"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                location.pathname === link.path && "w-full"
              )} />
            </Link>
          ))}
          <Link to="/book" className="gold-button text-sm py-2 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-stone-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "nav-link text-lg",
                  location.pathname === link.path && "active"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              onClick={() => setIsOpen(false)}
              className="gold-button w-2/3 text-center"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-3 group mb-6">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 group-hover:bg-gold/30 transition-all duration-500">
              <LogoIcon className="text-gold" size={20} />
            </div>
            <span className="text-3xl font-serif font-bold tracking-tighter gold-gradient-text">
              ESHAN CREATIONS
            </span>
          </Link>
          <p className="text-stone-400 max-w-md mb-8 leading-relaxed">
            Exquisite tailoring and traditional maggam hand work. We bring your dream designs to life with precision and passion. Specializing in bridal wear and custom ethnic couture.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/eshan_creations/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold hover:border-gold transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/917989247572" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold hover:border-gold transition-all"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="tel:+917989247572" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-gold hover:border-gold transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
            <div className="space-y-2">
              <a href="tel:+917989247572" className="flex items-center gap-3 text-stone-400 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" />
                <span>+91 79892 47572</span>
              </a>
              <a href="https://wa.me/917989247572" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-400 hover:text-gold transition-colors">
                <MessageCircle size={16} className="text-gold" />
                <span>WhatsApp: +91 79892 47572</span>
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-stone-400 hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-stone-400 hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="text-stone-400 hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="text-stone-400 hover:text-gold transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest">Contact</h3>
          <ul className="space-y-4 text-stone-400">
            <li>
              <a 
                href="https://maps.app.goo.gl/TY7Po4FrkyP3jjVx8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Chittoor, Andhra Pradesh
              </a>
            </li>
            <li>+91 79892 47572</li>
            <li>Mon - Sat: 10:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-stone-500 text-sm">
        &copy; {new Date().getFullYear()} Eshan Creations. All rights reserved.
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
