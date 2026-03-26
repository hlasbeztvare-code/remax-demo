'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Maximize, BedDouble, ShieldCheck, Plus } from 'lucide-react';

const PROPERTIES = [
  { 
    id: 1, 
    title: "REŽI-VILA OŘECHOVKA", 
    price: "82.5M", 
    location: "PRAHA 6", 
    specs: "510 M² • 6+KK" 
  },
  { 
    id: 2, 
    title: "PENTHOUSE V-TOWER", 
    price: "45.0M", 
    location: "PRAHA 4", 
    specs: "210 M² • 3+KK" 
  }
];

export default function Home() {
  return (
    <main className="bg-[#000000] text-white min-h-screen selection:bg-white selection:text-black">
      {/* MINIMAL NAV */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference">
        <div className="font-black text-sm tracking-[0.4em] uppercase">RE/MAX<span className="opacity-40 text-gray-500">ALPHA</span></div>
        <div className="flex gap-4 items-center uppercase text-[10px] font-bold tracking-widest">
          <span className="hidden md:inline text-gray-500">Menu</span>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-[2px] bg-black"></div>
          </div>
        </div>
      </nav>

      {/* ULTRA-MINIMAL HERO */}
      <section className="h-screen flex flex-col justify-end p-8 md:p-16 pb-24">
        <div className="max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8 text-[#D4AF37]"
          >
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Private Portfolio 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[10vw] font-black leading-[0.75] tracking-tighter uppercase mb-12"
          >
            BEYOND <br /> STANDARDS<span className="text-[#D4AF37]">.</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border-t border-white/10 pt-12">
            <p className="max-w-sm text-xs font-light leading-relaxed text-gray-400 uppercase tracking-widest">
              Definujeme trh s nejexkluzivnějšími nemovitostmi v České republice. Bez kompromisů.
            </p>
            <button className="px-12 py-6 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Prohlédnout kolekci
            </button>
          </div>
        </div>
      </section>

      {/* STREAMLINED LISTING */}
      <section className="py-32 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {PROPERTIES.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-neutral-900 overflow-hidden mb-8">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
                <div className="absolute top-8 right-8 z-20">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Plus size={20} />
                   </div>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-8">
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">{p.location}</span>
                  <h3 className="text-4xl font-black uppercase tracking-tighter">{p.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-sm font-light text-gray-400 block mb-1 uppercase">{p.specs}</span>
                  <span className="text-3xl font-black text-[#D4AF37]">{p.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
