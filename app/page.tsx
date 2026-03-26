'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Maximize, BedDouble, Phone, Mail, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax efekt pro hlavní fotku (posouvá se pomaleji než zbytek webu)
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Vlastní křivka pro "drahý" a plynulý pohyb
  const luxuryEasing = [0.16, 1, 0.3, 1];

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-hidden">
      
      {/* MINIMAL NAVBAR */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: luxuryEasing, delay: 0.5 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference text-white"
      >
        <div className="font-black tracking-widest uppercase text-xs md:text-sm">
          MICHAL<span className="text-gray-400 font-light"> ČERNÝ</span>
        </div>
        <div className="hidden md:flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
          <a href="#details" className="hover:text-[#D4AF37] transition-colors">Specifikace</a>
          <a href="#broker" className="hover:text-[#D4AF37] transition-colors">Makléř</a>
        </div>
        <a href="#broker" className="text-[9px] border border-white/20 px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Kontakt
        </a>
      </motion.nav>

      {/* 1. HERO SECTION S PARALLAX EFEKTEM */}
      <section ref={containerRef} className="relative h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden">
        {/* Pozadí, které se hýbe */}
        <motion.div 
          style={{ y: yPos, opacity: opacity }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: luxuryEasing }}
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.5, ease: luxuryEasing }}
              className="flex items-center gap-4 mb-8 overflow-hidden whitespace-nowrap"
            >
               <div className="w-12 h-[1px] bg-[#D4AF37] shrink-0"></div>
               <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.4em]">Exclusive Listing</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light uppercase tracking-tighter leading-[0.9] overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.2 }}
                className="block"
              >
                VILA
              </motion.span>
              <motion.span 
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.2, ease: luxuryEasing, delay: 0.3 }}
                className="block font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"
              >
                KUNRATICE
              </motion.span>
            </h1>
            
            <div className="mt-12 flex flex-col md:flex-row gap-8 md:items-end justify-between">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-xs font-light tracking-widest max-w-md text-gray-400 uppercase leading-relaxed"
              >
                Architektonický klenot zasazený v privátním lese. Místo, kde se surový beton potkává s absolutním klidem přírody.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: luxuryEasing }}
                className="text-right"
              >
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mb-2">Nabídková cena</div>
                <div className="text-4xl md:text-6xl font-black tracking-tighter text-[#D4AF37]">
                  59.000.000 <span className="text-2xl text-gray-500">Kč</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indikátor */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
           <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Scroll</span>
           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           >
             <ArrowDown size={16} />
           </motion.div>
        </motion.div>
      </section>

      {/* 2. THE GRID - ANIMOVANÉ ODHALENÍ PŘI SCROLLOVÁNÍ */}
      <section id="details" className="py-32 px-8 md:px-16 bg-[#050505] border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: luxuryEasing }}
            className="mb-20"
          >
             <h2 className="text-2xl md:text-4xl font-light uppercase tracking-tighter">
               Technické a designové<br /><span className="font-black">parametry rezidence</span>
             </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-white/10 border-y border-white/10 py-16">
            
            {/* Jednotlivé karty s postupným načítáním (stagger effect) */}
            {[
              { icon: Maximize, title: "Velkorysý prostor", desc: "Užitná plocha 442 m² a pozemek o rozloze 1.250 m². Dispozice 6+KK je navržena pro maximální komfort, oddělení privátní a společenské zóny." },
              { icon: BedDouble, title: "Materiály & Tech", desc: "Pohledový beton, velkoformátové prosklení a italský mramor. Systém Smart Home pro řízení mikroklimatu a absolutní bezpečnosti." },
              { icon: MapPin, title: "Lokalita Kunratice", desc: "Slepá ulice zaručující absolutní diskrétnost. Přímý vstup do lesoparku, avšak s perfektní dostupností do centra Prahy." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: luxuryEasing }}
                className={`space-y-6 ${idx === 0 ? 'md:pr-12' : idx === 1 ? 'md:px-12' : 'md:pl-12'}`}
              >
                <item.icon className="text-[#D4AF37]" size={28} />
                <div>
                  <h3 className="text-xs text-white font-black uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BROKER SECTION */}
      <section id="broker" className="bg-white text-black py-32 px-8 md:px-16 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEasing }}
            className="aspect-[3/4] bg-neutral-200 relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
          >
            <motion.div 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.7 }}
               className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-neutral-400 font-black uppercase tracking-widest text-xs z-10">Portrét Makléře</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: luxuryEasing }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Váš Osobní Průvodce</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
              Michal Černý
            </h2>
            <p className="text-sm text-gray-600 font-light uppercase tracking-widest mb-10 leading-relaxed">
              Zastupuji prodávající s respektem k jejich soukromí a kupující s ohledem na jejich nejnáročnější požadavky. Tuto nemovitost znám do posledního detailu.
            </p>

            <div className="space-y-6 mb-12">
              <a href="tel:+420777123456" className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#D4AF37] transition-colors group">
                <Phone size={18} className="text-[#D4AF37] group-hover:scale-110 transition-transform"/> +420 777 123 456
              </a>
              <a href="mailto:michal@remax-alpha.cz" className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#D4AF37] transition-colors group">
                <Mail size={18} className="text-[#D4AF37] group-hover:scale-110 transition-transform"/> michal@remax-alpha.cz
              </a>
            </div>

            <button className="w-full md:w-auto px-12 py-6 bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all transform hover:-translate-y-1 shadow-xl">
              Sjednat privátní prohlídku
            </button>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
