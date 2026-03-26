'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#0a0b0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* 1. HERO SECTION (Tech-Luxury) */}
      <section className="relative h-screen w-full flex flex-col justify-center px-8 md:px-16 border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0b0a]"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-gray-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4">ZA 3 MĚSÍCE S ODPOVEDNOSTÍ</h2>
            <h1 className="text-6xl md:text-[9vw] font-black uppercase tracking-widest leading-[0.85] mb-8">
              HOTOVÝ DŮM<br />
              <span className="text-gray-600 font-light italic">VAŠÍCH SNŮ</span>
            </h1>
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-12">
            <div className="border border-white/20 px-6 py-3 backdrop-blur-md bg-black/20 text-[10px] uppercase tracking-widest font-bold">Stavíme po celé ČR</div>
            <div className="border border-white/20 px-6 py-3 backdrop-blur-md bg-black/20 text-[10px] uppercase tracking-widest font-bold">Individuální přístup</div>
          </div>
        </div>
      </section>

      {/* 2. GRID SECTION (The Pain Points) */}
      <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            CO BRÁNÍ<br/>ROZHODNUTÍ?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            "Neustálé překračování rozpočtu",
            "Dlouhé stavební práce",
            "Strach o kvalitu",
            "Nemožnost kontroly"
          ].map((text, i) => (
            <div key={i} className={`p-8 aspect-square flex flex-col justify-between ${i === 2 ? 'bg-white text-black' : 'bg-[#0a0b0a]'}`}>
              <span className="text-[11px] font-bold uppercase tracking-widest leading-relaxed">{text}</span>
              <Plus size={20} className="self-end opacity-50" />
            </div>
          ))}
        </div>
      </section>

      {/* 3. FINAL LIST (Architectural Detail) */}
      <section className="py-24 px-8 md:px-16 border-t border-white/10 bg-[#0a0b0a]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-6xl font-black uppercase tracking-widest">VÝHODNÉ<br/>ŘEŠENÍ</h3>
            <div className="w-full aspect-video bg-neutral-900 border border-white/10 grayscale opacity-70"></div>
          </div>
          
          <div className="flex flex-col justify-center gap-16 pl-12 border-l border-white/10">
            {[
              { t: "ÚSPORA ČASU", d: "Montáž domu za 7-10 dní." },
              { t: "NÍZKÉ NÁKLADY", d: "Prémiová izolace a úspora energií." },
              { t: "STABILITA", d: "Konstrukce z lepeného LVL dřeva." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <Plus size={14} className="absolute -left-[63px] top-1 text-[#D4AF37]" />
                <h4 className="text-sm font-black tracking-widest uppercase mb-2">{item.t}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
