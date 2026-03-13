import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Scissors, Heart, Clock, MapPin, HelpCircle, Layers, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-40"
            src="https://www.youtube.com/embed/iQ3aCZikRJI?autoplay=1&mute=1&controls=0&loop=1&playlist=iQ3aCZikRJI&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1"
            allow="autoplay; encrypted-media"
            title="Hero Background Video"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block">Traditional Craftsmanship</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              Elegance in Every <span className="gold-gradient-text italic">Stitch</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Eshan Creations is the premier destination for the finest maggam hand work, bespoke tailoring, and custom thread bangles in Chittoor. 
              Transforming fabrics into masterpieces for your most special moments in Andhra Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/book" className="gold-button flex items-center gap-2 group">
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/gallery" className="text-white hover:text-gold transition-colors font-medium tracking-widest uppercase text-sm border-b border-white/20 pb-1">
                Explore Gallery
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/50">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Layers className="text-gold" />, title: "Maggam Mastery", desc: "Exquisite hand embroidery with intricate zardosi and beadwork." },
              { icon: <Star className="text-gold" />, title: "Bridal Couture", desc: "Specialized bridal blouse designs tailored for your big day." },
              { icon: <Heart className="text-gold" />, title: "Custom Accessories", desc: "Handcrafted thread bangles and saree tassels to match your style." },
              { icon: <Clock className="text-gold" />, title: "Timely Delivery", desc: "We respect your schedule and ensure prompt delivery of every order." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 group-hover:border-gold/50 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">The Journey</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Crafting Process</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">From the first sketch to the final stitch, we ensure every detail is handled with absolute precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
            
            {[
              { step: "01", title: "Consultation", desc: "Discuss your vision, fabric choices, and design preferences with our experts." },
              { step: "02", title: "Measurement", desc: "Precise measurements taken to ensure a flawless, custom-tailored fit." },
              { step: "03", title: "Craftsmanship", desc: "Our artisans begin the intricate maggam work and precision tailoring." },
              { step: "04", title: "Final Fitting", desc: "A final fitting to ensure everything is perfect before you take it home." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-black font-bold flex items-center justify-center mx-auto mb-6 absolute -top-6 left-1/2 -translate-x-1/2 shadow-lg shadow-gold/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 mt-4">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="relative py-48 px-6 md:px-12 overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] min-w-[177.77vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-30"
            src="https://www.youtube.com/embed/l9qnvXqv_pQ?autoplay=1&mute=1&controls=0&loop=1&playlist=l9qnvXqv_pQ&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1"
            allow="autoplay; encrypted-media"
            title="Body Background Video"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Craftsmanship in Motion</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">Experience the Art</h2>
            <p className="text-stone-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Every masterpiece begins with a single thread and a vision of perfection. 
              Watch our artisans bring intricate designs to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Style Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Latest Creations</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">From Our Studio</h2>
            </div>
            <a href="https://www.instagram.com/eshan_creations/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
              <Instagram size={18} /> Follow @eshan_creations
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1591360236630-4ee913a547bb?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598507045483-02a2448ec612?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1590736910118-24189cc5cc06?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square overflow-hidden rounded-xl relative group"
              >
                <img 
                  src={img} 
                  alt={`Studio Work ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop" 
                alt="Bridal Blouse" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 right-8 glass-card p-6 rounded-xl">
                <p className="text-gold font-serif italic text-xl">"The Bridal Collection"</p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Our Speciality</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Bridal Blouse Designing & Maggam Work</h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                We specialize in creating breathtaking bridal blouses that tell a story. Our maggam work is performed by skilled artisans who spend hours perfecting every bead and thread.
              </p>
              <ul className="space-y-4 mb-10">
                {['Intricate Zardosi Work', 'Aari Embroidery', 'Bead & Stone Embellishments', 'Custom Pattern Drafting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="gold-button inline-block">
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="text-gold w-12 h-12 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Common Questions</h2>
            <p className="text-stone-400">Everything you need to know about our services and booking process.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "How long does a bridal blouse take?", a: "Typically, a bridal blouse with intricate maggam work takes 10-15 days. However, we also offer express services for urgent requirements." },
              { q: "Do I need to bring my own fabric?", a: "You can bring your own fabric, or we can suggest and source high-quality materials that best suit your chosen design." },
              { q: "Do you offer home measurements?", a: "Currently, we offer measurements at our boutique in Chittoor to ensure absolute precision, but we can discuss special arrangements for bridal parties." },
              { q: "Can I provide my own design?", a: "Absolutely! We love bringing your unique visions to life. You can share references or sketches during your consultation." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <h3 className="text-lg font-bold text-gold mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-[10px] text-gold border border-gold/20">Q</span>
                  {faq.q}
                </h3>
                <p className="text-stone-400 pl-9 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/5">
            <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <MapPin className="text-gold w-12 h-12 mb-8" />
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Visit Our Studio</h2>
              <div className="space-y-8 text-stone-300">
                <div>
                  <p className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Location</p>
                  <p className="text-xl">Chittoor, Andhra Pradesh, India</p>
                </div>
                <div>
                  <p className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Contact</p>
                  <p className="text-xl">+91 79892 47572</p>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://maps.app.goo.gl/TY7Po4FrkyP3jjVx8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gold-button inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1000&auto=format&fit=crop" 
                alt="Boutique Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Inspired by user reviews) */}
      <section className="py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Kusuma Sr", text: "The maggam work on my bridal blouse was breathtaking! Eshan Creations in Chittoor is definitely the best place for intricate hand embroidery. They delivered exactly what I envisioned." },
              { name: "Sandhiya Balaji", text: "Excellent tailoring and designing for blouses. The finishing of the stitches and the creative ideas for saree tassels are too good. They are very professional and punctual." },
              { name: "Vineetha G", text: "I got my daughter's Pattu Langa stitched here and it was perfect! The fitting was exceptional and the custom thread bangles they made to match were beautiful." },
              { name: "Lavanya Ranganadham", text: "Awesome service! The trending designs for bridal blouses and the caring customer service make Eshan Creations stand out. I'm so happy with my wedding outfit." },
              { name: "Vijaya", text: "Best boutique in Chittoor for maggam work. They give great suggestions if you're confused about designs. The saree kuchu work is also very elegant." },
              { name: "Zeelu Riya", text: "Nice stitching and very responsive to customers. I got my thread bangles customized here and they are high quality at a best price. Thank you Priya madam!" }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
                </div>
                <p className="text-stone-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-gold font-bold tracking-widest uppercase text-xs">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Instagram Feed Section */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Follow Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Latest on Instagram</h2>
            </div>
            <a 
              href="https://www.instagram.com/eshan_creations/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold hover:text-white transition-colors group"
            >
              <Instagram size={20} />
              <span className="font-medium tracking-widest uppercase text-sm border-b border-gold group-hover:border-white pb-1">@eshan_creations</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop", url: "https://www.instagram.com/eshan_creations/p/DT5R1Y5koyt/" },
              { img: "https://images.unsplash.com/photo-1590736910118-24189cc5cc06?q=80&w=1000&auto=format&fit=crop", url: "https://www.instagram.com/eshan_creations/p/DT0iPEakv9Z/" },
              { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop", url: "https://www.instagram.com/eshan_creations/reel/DTxmjWKEh3V/" },
              { img: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop", url: "https://www.instagram.com/eshan_creations/reel/DSsU-F3ErM4/" }
            ].map((post, i) => (
              <motion.a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden group rounded-xl"
              >
                <img 
                  src={post.img} 
                  alt={`Instagram Post ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-stone-400">Everything you need to know about our services in Chittoor.</p>
          </div>

          <div className="space-y-6">
            {[
              { 
                q: "Who are the best tailors in Chittoor for bridal blouses?", 
                a: "Eshan Creations is widely recognized as one of the best tailors in Chittoor for bridal blouses. We specialize in custom designs, perfect fitting, and intricate maggam work that makes every bride look stunning." 
              },
              { 
                q: "Where can I get high-quality maggam work done in Chittoor?", 
                a: "For high-quality maggam hand work in Chittoor, Eshan Creations offers expert craftsmanship. Our artisans are skilled in zardosi, aari, and beadwork, creating unique patterns for blouses and ethnic wear." 
              },
              { 
                q: "Does Eshan Creations provide custom thread bangles and saree tassels?", 
                a: "Yes, we provide beautifully handcrafted thread bangles and elegant saree tassels (Kuchu) in Chittoor. We customize these accessories to perfectly match your outfit's color and design." 
              },
              { 
                q: "Do you offer custom dresses for kids in Chittoor?", 
                a: "Absolutely! We specialize in custom-designed kids' dresses, including lehengas, frocks, and ethnic wear, ensuring comfort and style for your little ones." 
              },
              { 
                q: "How can I book an appointment at Eshan Creations Chittoor?", 
                a: "You can easily book an appointment by visiting our 'Book' page on the website or by contacting us directly via WhatsApp at +91 7989247572. We are located in Chittoor, Andhra Pradesh." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border border-white/5"
              >
                <h3 className="text-xl font-serif font-bold mb-3 flex items-start gap-3">
                  <HelpCircle className="text-gold shrink-0 mt-1" size={20} />
                  {faq.q}
                </h3>
                <p className="text-stone-400 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
