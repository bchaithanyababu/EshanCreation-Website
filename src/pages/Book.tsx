import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, Calendar, User, Phone, ClipboardList, MapPin } from 'lucide-react';

export const Book = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mwvrqvwz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=917989247572&text=Hello%2C%20I%20found%20your%20tailoring%20%26%20maggam%20work%20service%20on%20your%20website.%20I%20would%20like%20to%20know%20more%20details.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block">Reservations</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Book Your Session</h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Schedule a consultation with our designers to discuss your dream outfit. 
            Choose your preferred method of contact below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/3 glass-card p-8 md:p-12 rounded-3xl"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <Send className="text-gold w-10 h-10" />
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Request Submitted!</h2>
                <p className="text-stone-400">Your form request was submitted and we will get back to you soon. Thank you for choosing Jahanavi.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-gold font-bold tracking-widest uppercase text-xs border-b border-gold/30 pb-1 hover:border-gold transition-all"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 flex items-center gap-2">
                      <Phone size={14} /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 flex items-center gap-2">
                      <ClipboardList size={14} /> Service Type
                    </label>
                    <select 
                      name="service"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold focus:outline-none transition-colors appearance-none"
                    >
                      <option className="bg-stone-900">Bridal Blouse Designing</option>
                      <option className="bg-stone-900">Maggam Hand Work</option>
                      <option className="bg-stone-900">Custom Tailoring</option>
                      <option className="bg-stone-900">Alterations</option>
                      <option className="bg-stone-900">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 flex items-center gap-2">
                      <Calendar size={14} /> Preferred Date
                    </label>
                    <input 
                      required
                      type="date" 
                      name="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Special Requirements</label>
                  <textarea 
                    name="requirements"
                    rows={4}
                    placeholder="Tell us about your design ideas..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="gold-button w-full py-5 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Booking Request"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Quick Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3 flex flex-col gap-8"
          >
            <div className="glass-card p-10 rounded-3xl flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <MessageCircle className="text-green-500 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Quick Inquiry</h3>
              <p className="text-stone-400 mb-8">Prefer a faster response? Connect with our team directly via WhatsApp for instant bookings and design discussions.</p>
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-900/20"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>

            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-xl font-serif font-bold mb-6 uppercase tracking-widest flex items-center gap-3">
                <Calendar size={20} className="text-gold" /> Store Hours
              </h3>
              <ul className="space-y-4 text-stone-400">
                <li className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="text-white">10 AM - 8 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gold">By Appointment Only</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-xl font-serif font-bold mb-6 uppercase tracking-widest flex items-center gap-3">
                <MapPin size={20} className="text-gold" /> Find Us
              </h3>
              <p className="text-stone-400 mb-6">Lucky Ladies Tailors, Chittoor, Andhra Pradesh</p>
              <a 
                href="https://maps.app.goo.gl/TY7Po4FrkyP3jjVx8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full border border-gold/30 hover:border-gold text-gold font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
