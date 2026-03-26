'use client';

import { motion } from 'framer-motion';
import { MapPin, Maximize, BedDouble, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* MINIMAL NAVBAR - Jméno Makléře */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference text-white">
        <div className="font-black tracking-widest uppercase text-xs md:text-sm">
          MICHAL<span className="text-gray-400 font-light"> ČERNÝ</span>
        </div>
        <div className="hidden md:flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
          <a href="#property" className="hover:text-[#D4AF37] transition-colors">Nemovitost</a>
          <a href="#details" className="hover:text-[#D4AF37] transition-colors">Specifikace</a>
          <a href="#broker" className="hover:text-[#D4AF37] transition-colors">Makléř</a>
        </div>
        <a href="#broker" className="text-[9px] border border-white/20 px-6 py-2 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Kontakt
        </a>
      </nav>

      {/* 1. HERO SECTION - THE PROPERTY REVEAL */}
      <section 
        className="relative h-screen flex flex-col justify-center px-8 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505] z-0"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
               <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.4em]">Exclusive Listing</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light uppercase tracking-tighter leading-[0.9]">
              VILA<br />
              <span className="font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">KUNRATICE</span>
            </h1>
            
            <div className="mt-12 flex flex-col md:flex-row gap-8 md:items-end justify-between">
              <p className="text-xs font-light tracking-widest max-w-md text-gray-400 uppercase leading-relaxed">
                Architektonický klenot zasazený v privátním lese. Místo, kde se surový beton potkává s absolutním klidem přírody.
              </p>
              <div className="text-right">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mb-2">Nabídková cena</div>
                <div className="text-4xl md:text-6xl font-black tracking-tighter text-[#D4AF37]">
                  59.000.000 <span className="text-2xl text-gray-500">Kč</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE GRID - PROPERTY SPECS (Inspirováno ruským vzorem) */}
      <section id="details" className="py-24 px-8 md:px-16 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tighter">
               Technické a designové<br /><span className="font-black">parametry rezidence</span>
             </h2>
          </div>
          
          {/* Vertikální grid s oddělovacími čarami */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-white/10 border-y border-white/10 py-12">
            
            <div className="md:pr-12 space-y-6">
              <Maximize className="text-[#D4AF37]" size={24} />
              <div>
                <h3 className="text-xs text-white font-black uppercase tracking-widest mb-3">Velkorysý prostor</h3>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  Užitná plocha 442 m² a pozemek o rozloze 1.250 m². Dispozice 6+KK je navržena pro maximální komfort, oddělení privátní a společenské zóny.
                </p>
              </div>
            </div>

            <div className="md:px-12 space-y-6">
              <BedDouble className="text-[#D4AF37]" size={24} />
              <div>
                <h3 className="text-xs text-white font-black uppercase tracking-widest mb-3">Materiály & Technologie</h3>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  Pohledový beton, velkoformátové hliníkové prosklení a italský mramor. Nemovitost je vybavena systémem Smart Home pro řízení mikroklimatu a bezpečnosti.
                </p>
              </div>
            </div>

            <div className="md:pl-12 space-y-6">
              <MapPin className="text-[#D4AF37]" size={24} />
              <div>
                <h3 className="text-xs text-white font-black uppercase tracking-widest mb-3">Lokalita Kunratice</h3>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  Slepá ulice zaručující absolutní diskrétnost. Přímý vstup do lesoparku, avšak s perfektní dostupností do centra Prahy (15 minut).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BROKER SECTION - Bílý kontrastní závěr pro osobní brand */}
      <section id="broker" className="bg-white text-black py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Fotka Makléře (Zatím placeholder box) */}
          <div className="aspect-[3/4] bg-neutral-200 relative overflow-hidden flex items-center justify-center grayscale">
            <span className="text-neutral-400 font-black uppercase tracking-widest text-xs">Portrét Makléře</span>
            {/* Sem později dáme <Image src="/makler.jpg" fill className="object-cover" /> */}
          </div>

          {/* Vizitka & Kontakt */}
          <div>
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
              <a href="tel:+420777123456" className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#D4AF37] transition-colors">
                <Phone size={18} className="text-[#D4AF37]"/> +420 777 123 456
              </a>
              <a href="mailto:michal@remax-alpha.cz" className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase hover:text-[#D4AF37] transition-colors">
                <Mail size={18} className="text-[#D4AF37]"/> michal@remax-alpha.cz
              </a>
            </div>

            <button className="w-full md:w-auto px-12 py-5 bg-black text-white text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-black transition-colors">
              Sjednat privátní prohlídku
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
