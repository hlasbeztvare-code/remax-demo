'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      <section className="flex flex-col min-h-screen items-center justify-center p-6 text-center">
        
        {/* HERO TITLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[#D4AF37] text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none italic mb-4">
            BEYOND<br/>STANDARDS.
          </h1>
          <p className="mb-20 text-gray-500 font-bold tracking-[0.6em] uppercase text-[10px]">
            RE/MAX ALPHA LUXURY
          </p>
        </motion.div>

        {/* MINIMAL CONTACT FORM */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full max-w-md space-y-4"
        >
          <input 
            type="email" 
            placeholder="VÁŠ EMAIL" 
            className="w-full bg-transparent border-b border-white/20 py-4 text-[10px] font-bold tracking-widest uppercase focus:border-[#D4AF37] outline-none transition-colors text-center"
          />
          <button className="w-full py-5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
            CHCI KONZULTACI
          </button>
        </motion.div>

      </section>
    </main>
  )
}
