'use client';

import { motion } from 'framer-motion';
import { MapPin, Maximize, BedDouble, Phone, Mail, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const luxuryEasing = [0.16, 1, 0.3, 1];

  return (
    <main className="relative min-h-screen text-white bg-[#050505] selection:bg-[#D4AF37] selection:text-black">
      
      {/* SECTION 0: FULLSCREEN BACKGROUND PHOTO (Fixed) */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <Image 
          src="/images/vila-ref.jpg" 
          alt="Vila Kunratice, Prague" 
          fill 
          priority
          className="object-cover opacity-60 grayscale-[50%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#050505]" />
      </div>

      {/* SECTION 1: HEADER / NAV */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: luxuryEasing }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8 backdrop-blur-sm bg-black/10 text-white"
      >
        <div className="flex items-center gap-2">
          <div className="font-black text-xs md:text-sm tracking-[0.4em] uppercase">
            RE/MAX <span className="text-gray-400 font-light">ALPHA LUXURY</span>
          </div>
        </div>
        <div className="hidden md:flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
          <a href="#property" className="hover:text-white transition-colors">Vily</a>
          <a href="#property" className="hover:text-white transition-colors">Byty</a>
          <a href="#broker" className="hover:text-white transition-colors">O nás</a>
          <a href="#broker" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        <button className="flex items-center gap-3 text-[9px] border border-white/20 px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          <Menu size={14} /> Menu
        </button>
      </motion.nav>

      {/* SECTION 2: THE PROPERTY VIEW (Dusk View + Text) */}
      <section id="property" className="relative min-h-screen z-10 p-10 flex flex-col justify-end pb-32">
        <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-[1fr,auto] items-end gap-16">
          
          {/* Main stacked Serif Title & Price */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: luxuryEasing }}
          >
            <div className="flex items-center gap-4 mb-12">
               <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
               <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.4em]">Exclusive Listing • Michal Černý</span>
            </div>
            {/* STACKED SERIF TITLE (NO SCRIPT FONT) */}
            <h1 className="text-8xl md:text-[11vw] font-serif font-light uppercase tracking-tighter leading-none mb-4 whitespace-nowrap">
              VILA<br />KUNRATICE,<br />PRAGUE
            </h1>
            <div className="mt-6 text-sm md:text-xl font-bold uppercase tracking-[0.6em] text-gray-400 italic">
              DEFINE LEGACY.
            </div>
          </motion.div>

          {/* Pricing & Parameter Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: luxuryEasing, delay: 0.3 }}
            className="text-right space-y-12"
          >
            <div className="inline-block glass-panel p-10 border border-white/5 bg-black/30 backdrop-blur-lg">
               <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mb-4">Plocha m² • Pozemek m² • Dispozice</div>
               {/* GIGANTIC PRICE NOW HERE, INTEGRATED Decently */}
               <div className="text-7xl md:text-[9vw] font-black tracking-tighter text-[#D4AF37] leading-none mb-12">
                 59.000.000 <span className="text-4xl text-gray-500 uppercase">Kč</span>
               </div>
               
               {/* Clean Parameters Grid (sans-serif) */}
               <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5">
                 <div className="flex items-center justify-end gap-3 text-sm font-bold tracking-widest text-white uppercase"><Maximize size={18} className="text-[#D4AF37]"/> 442 M²</div>
                 <div className="flex items-center justify-end gap-3 text-sm font-bold tracking-widest text-white uppercase"><MapPin size={18} className="text-[#D4AF37]"/> 1.250 M²</div>
                 <div className="flex items-center justify-end gap-3 text-sm font-bold tracking-widest text-white uppercase"><BedDouble size={18} className="text-[#D4AF37]"/> 6+KK</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE BROKER (Bílý kontrastní závěr) */}
      <section id="broker" className="relative z-20 bg-white text-black py-32 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Fotka Makléře (Z Unsplash) */}
          <div className="relative aspect-[3/4] bg-neutral-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/images/makler.jpg" 
              alt="Michal Černý" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Vizitka & Kontakt */}
          <div>
            <div className="flex items-center gap-4 mb-10">
               <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Zastoupení Prodávajícího</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Michal Černý
            </h2>
            <p className="text-sm text-gray-600 font-light uppercase tracking-widest mb-12 leading-relaxed max-w-lg">
              Michal Černý definuje trh s nejexkluzivnějšími nemovitostmi v České republice. Bez kompromisů. Tuto nemovitost zná do posledního detailu.
            </p>

            <div className="space-y-6 mb-16">
              <a href="tel:+420777123456" className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#D4AF37] transition-colors group">
                <Phone size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform"/> +420 777 123 456
              </a>
              <a href="mailto:michal@remax-alpha.cz" className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#D4AF37] transition-colors group">
                <Mail size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform"/> michal@remax-alpha.cz
              </a>
            </div>

            <button className="px-16 py-6 bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-black transition-colors shadow-2xl">
              Sjednat privátní prohlídku
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-20 py-16 text-center border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <p className="text-[9px] font-bold text-gray-600 tracking-[0.8em] uppercase italic">RE/MAX ALPHA LUXURY SERVICES © 2026 • Michal Černý</p>
      </footer>
    </main>
  );
}
