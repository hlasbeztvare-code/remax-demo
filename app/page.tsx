'use client';

import { motion } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="bg-white text-[#1a1a1a] min-h-screen font-sans selection:bg-blue-100">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference">
        <div className="text-[11px] font-black uppercase tracking-[0.3em]">AUREO <span className="font-light opacity-50">BY MICHAL ČERNÝ</span></div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-gray-500">
             <a href="#" className="hover:text-black transition-colors">Vily</a>
             <a href="#" className="hover:text-black transition-colors">O mně</a>
             <a href="#" className="hover:text-black transition-colors">Kontakt</a>
          </div>
          <Menu size={20} className="cursor-pointer" />
        </div>
      </nav>

      {/* HERO SECTION - Ten prosvětlený vibe z obrázku */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#f8f9fa]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Tady si představ tu bílou moderní vilu proti modré obloze */}
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500" 
            alt="Luxury Villa" 
            fill 
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            {...fadeUp}
            className="text-5xl md:text-[5.5vw] font-medium tracking-[-0.04em] leading-[1.05] mb-8"
          >
            Exceptional Living<br />Starts Here
          </motion.h1>
          <motion.p 
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm md:text-base text-gray-500 font-light max-w-xl mx-auto leading-relaxed tracking-wide"
          >
            Experience timeless architecture, exclusive locations, and luxury homes designed to inspire your next chapter.
          </motion.p>
        </div>
        
        {/* Scroll indicator line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 w-[1px] bg-black/10"
        />
      </section>

      {/* SECTION 2 - Content with Image (Dle tvého nového vzoru) */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
              Your Home, Your<br />Legacy, Designed<br />Forever
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              More than just a residence. Haven is a reflection of your individuality — thoughtfully designed, expertly crafted, and created to inspire for generations to come.
            </p>
            <div className="flex gap-4">
              <div className="w-40 h-24 bg-gray-100 relative overflow-hidden rounded-xl">
                 <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400" alt="Detail" fill className="object-cover" />
              </div>
              <div className="w-40 h-24 bg-gray-100 relative overflow-hidden rounded-xl">
                 <Image src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=400" alt="Detail" fill className="object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl shadow-black/5"
          >
            <Image 
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2000" 
              alt="Villa Exterior" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Detail grid */}
      <section className="bg-[#f8f9fa] py-32 px-8 md:px-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-3xl font-medium tracking-tight">Experience Inspired Living<br/>in Every Detail</h3>
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 max-w-[200px] text-right">
              Browse curated homes where elegance and innovation meet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1,2,3].map((item) => (
               <div key={item} className="aspect-[4/5] bg-gray-200 relative group overflow-hidden rounded-2xl cursor-pointer">
                  <Image 
                    src={`https://images.unsplash.com/photo-1600${607687920 + item}-4e2a09cf159d?q=80&w=800`} 
                    alt="Interior" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight size={20} />
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

    </main>
  );
}
