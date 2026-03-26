'use client';

import { motion } from 'framer-motion';
import { Maximize, BedDouble, MapPin, Compass, Bath, Home as HomeIcon, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const luxuryEasing = [0.16, 1, 0.3, 1];

  return (
    <main className="bg-[#080808] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex flex-col">
          <span className="font-black text-sm tracking-[0.3em] uppercase">RE/MAX <span className="text-gray-500 font-light">ALPHA</span></span>
          <span className="text-[10px] tracking-[0.4em] text-gray-400 uppercase">LUXURY</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">
          <a href="#" className="hover:text-[#D4AF37] transition-colors border-b border-[#D4AF37] pb-1">Vily</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Byty</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">O nás</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Kontakt</a>
        </div>
        <button className="flex items-center gap-3 border border-white/20 px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          <Menu size={14} /> Menu
        </button>
      </nav>

      {/* HERO SECTION - Přesně podle screenu */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        
        {/* Velký Serif v pozadí */}
        <div className="absolute top-20 left-6 z-0 opacity-20 select-none pointer-events-none">
          <h1 className="text-[25vw] font-serif font-light leading-none tracking-tighter text-white">VILA</h1>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 items-end mt-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, ease: luxuryEasing }}
            className="space-y-4"
          >
            <h2 className="text-6xl md:text-[8vw] font-serif font-light leading-[0.85] tracking-tighter uppercase italic">
              KUNRATICE,<br />PRAGUE
            </h2>
            <div className="w-full h-[60vh] relative border border-white/10 overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500" alt="Vila" fill className="object-cover grayscale-[30%]" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               {/* Kompas v pozadí (dekorace) */}
               <Compass className="absolute top-10 right-10 text-white/10" size={120} strokeWidth={0.5} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.3, ease: luxuryEasing }}
            className="space-y-8"
          >
            {/* Parametry - Glassmorphism Grid */}
            <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
              {[
                { icon: Maximize, label: "Plocha", val: "442 m²" },
                { icon: HomeIcon, label: "Pozemek", val: "1.250 m²" },
                { icon: BedDouble, label: "Dispozice", val: "6+KK" },
                { icon: HomeIcon, label: "Terasa", val: "100 m²" },
                { icon: HomeIcon, label: "Garáž", val: "2 místa" },
                { icon: Bath, label: "Koupelny", val: "5" }
              ].map((p, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md p-6 flex flex-col gap-2">
                  <p className="text-[9px] uppercase tracking-widest text-gray-500">{p.label}</p>
                  <p className="text-xl font-bold tracking-tight flex items-center gap-2"><p.icon size={14} className="text-[#D4AF37]"/> {p.val}</p>
                </div>
              ))}
            </div>

            {/* Cena a CTA */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-2">Nabídková cena</p>
                <p className="text-5xl md:text-7xl font-black tracking-tighter text-white">59.000.000 <span className="text-2xl text-gray-500 uppercase">Kč</span></p>
              </div>
              <button className="w-full bg-[#D4AF37] text-black py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl">
                SJEDNAT PRIVÁTNÍ PROHLÍDKU
              </button>
            </div>
          </motion.div>
        </div>

        {/* Makléř Section - Spodní část */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto mt-24 pb-20 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-12 items-center">
           <div className="w-48 h-64 relative border border-white/20 grayscale hover:grayscale-0 transition-all duration-700">
             <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600" alt="Makléř" fill className="object-cover" />
           </div>
           <div>
             <h3 className="text-2xl font-bold uppercase tracking-widest">MICHAL ČERNÝ</h3>
             <p className="text-[10px] text-[#D4AF37] tracking-[0.4em] uppercase mb-4">• VÁŠ EXKLUZIVNÍ MAKLÉŘ</p>
             <div className="flex gap-8 text-[11px] font-bold tracking-widest uppercase text-gray-400">
               <a href="#" className="hover:text-white transition-colors">+420 777 123 456</a>
               <a href="#" className="hover:text-white transition-colors">MICHAL@REMAX-ALPHA.CZ</a>
             </div>
           </div>
        </div>
      </section>

    </main>
  );
}
