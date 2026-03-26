'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // OPRAVA TYPESCRIPTU: Natvrdo řekneme, že jsou to přesně 4 čísla pro křivku
  const smooth: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <main className="bg-[#0a0b0a] text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 mix-blend-difference flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
        <div>RE/MAX ALPHA</div>
        <div>MICHAL ČERNÝ</div>
      </nav>

      {/* SECTION 1: HERO BLUEPRINT */}
      <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center px-8 md:px-16 overflow-hidden">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0">
          <Image src="/images/vila-ref.jpg" alt="Vila" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0b0a]"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: smooth }}>
            <h2 className="text-gray-400 font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
              ZA 3 MĚSÍCE K NASTĚHOVÁNÍ
            </h2>
            <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-widest leading-[0.9] text-white/90">
              HOTOVÝ DŮM<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-gray-500">VAŠICH SNŮ</span>
            </h1>
          </motion.div>

          {/* Architektonické štítky s linkami (jako na screenu) */}
          <div className="relative mt-16 h-40 hidden md:block">
            <motion.div 
              initial={{ width: 0, opacity: 0 }} animate={{ width: 200, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="absolute left-0 top-0 border-t border-l border-white/20 p-4 bg-black/40 backdrop-blur-md"
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-300">Stavíme po celé<br/>České republice</span>
            </motion.div>
            
            <motion.div 
              initial={{ width: 0, opacity: 0 }} animate={{ width: 250, opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              className="absolute left-[300px] top-[40px] border-t border-l border-white/20 p-4 bg-black/40 backdrop-blur-md"
            >
              <span className="text-[10px] uppercase tracking-widest text-gray-300">Od individuálních řešení<br/>po hotové projekty</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GRID & PAIN POINTS */}
      <section className="relative py-32 px-8 md:px-16 border-t border-white/10 bg-[#0a0b0a]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: smooth }}
            className="flex flex-col justify-end"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-widest leading-[0.9] text-white/90">
              CO BRÁNÍ<br />ROZHODNUTÍ<br />KE KOUPI?
            </h2>
          </motion.div>

          {/* Technický Grid (Glassmorphism s pluskama) */}
          <div className="grid grid-cols-2 gap-px bg-white/10 p-px">
            {[
              "Neustálé překračování rozpočtu",
              "Dlouhé a nepředvídatelné stavební práce",
              "Strach, že dům nevydrží dlouho",
              "Nemožnost kontrolovat proces"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8 }}
                className={`relative bg-[#0a0b0a]/80 backdrop-blur-xl p-8 aspect-square flex flex-col justify-between ${i === 2 ? 'bg-white text-black' : ''}`}
              >
                <div className={`text-xs uppercase tracking-widest leading-relaxed font-bold ${i === 2 ? 'text-black' : 'text-gray-400'}`}>
                  {text}
                </div>
                <div className="self-end">
                  <Plus className={`${i === 2 ? 'text-black' : 'text-white/50'}`} size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VÝHODNÉ ŘEŠENÍ (Features) */}
      <section className="relative py-32 px-8 md:px-16 border-t border-white/10 bg-[#0a0b0a]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: smooth }}
          >
            <h3 className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">MODULÁRNÍ DŮM</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-widest leading-[0.9] text-white/90 mb-12">
              VÝHODNÉ<br />ŘEŠENÍ<br />
              <span className="text-gray-600 font-light">[NA KLÍČ]</span>
            </h2>
            
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden border border-white/10">
              <Image src="/images/vila-ref.jpg" alt="Detail" fill className="object-cover opacity-80" />
              <div className="absolute bottom-0 left-0 bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest">
                ZÁRUKA 5 LET
              </div>
            </div>
          </motion.div>

          {/* Technický List Výhod */}
          <div className="flex flex-col justify-center gap-12 border-l border-white/10 pl-8 md:pl-16 relative">
            {[
              { title: "ÚSPORA ČASU", desc: "Dodávka a montáž hotového domu za pouhých 7-10 dní." },
              { title: "NÍZKÉ NÁKLADY NA VYTÁPĚNÍ", desc: "Prémiová tepelná izolace z nehořlavé kamenné vlny." },
              { title: "PEVNOST A STABILITA", desc: "Konstrukce z lepeného LVL dřeva, odolná vůči extrémním vlivům." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.8, ease: smooth }}
                className="relative"
              >
                <Plus size={14} className="absolute -left-[42px] md:-left-[74px] top-1 text-white/40" />
                <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
