'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* MINIMAL NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 mix-blend-difference text-white">
        <div className="font-black tracking-widest uppercase text-sm">RE/MAX<span className="text-gray-400">ALPHA</span></div>
        <div className="hidden md:flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Hlavní</a>
          <a href="#" className="hover:text-white transition-colors">O nás</a>
          <a href="#" className="hover:text-white transition-colors">Projekty</a>
          <a href="#" className="hover:text-white transition-colors">Služby</a>
        </div>
        <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
          <div className="w-full h-[1px] bg-white"></div>
          <div className="w-2/3 h-[1px] bg-white self-end"></div>
        </div>
      </nav>

      {/* 1. HERO SECTION S FOTKOU NA POZADÍ */}
      <section 
        className="relative h-screen flex flex-col justify-center px-8 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Tmavý filtr přes fotku */}
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mt-20 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter leading-[1.1]">
              PRÉMIOVÉ<br />
              <span className="font-black">REALITNÍ SLUŽBY</span><br />
              A INVESTICE
            </h1>
            <p className="mt-8 text-xs font-light tracking-widest max-w-md text-gray-300 uppercase leading-relaxed">
              Vytváříme hodnoty, které dokonale propojují exkluzivní lokality, nadčasovou architekturu a bezpečné uložení kapitálu.
            </p>
            <button className="mt-10 px-10 py-4 bg-[#D4AF37] text-black text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white transition-colors">
              Zahájit spolupráci
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="hidden md:block text-right">
            <div className="text-3xl font-light tracking-tighter uppercase leading-tight">
              Inovace<br />V Každém<br />Detailu
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DARK PRINCIPLES SECTION */}
      <section className="py-32 px-8 md:px-16 bg-[#050505] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tighter mb-20">
          Principy, na kterých<br /><span className="font-black">stavíme naši práci</span>
        </h2>
        
        {/* Vertikální grid přesně podle vzoru */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-white/10">
          <div className="md:pr-10 space-y-4">
            <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Inovativní přístup a diskrétnost</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Díky našemu know-how a off-market nabídkám se naše portfolio odlišuje nejen exkluzivitou, ale i maximálním soukromím. Hledáme pro vás domovy, které nejsou na běžném trhu.
            </p>
          </div>
          <div className="md:px-10 space-y-4">
            <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Unikátní design a funkčnost</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Spolupracujeme s předními architekty. Naším cílem je, aby každá nemovitost splňovala nejnáročnější požadavky na moderní a efektivní bydlení pro 21. století.
            </p>
          </div>
          <div className="md:pl-10 space-y-4">
            <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Komplexní právní servis</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Integrace špičkového právního dohledu do každé transakce zajišťuje hladký průběh. Optimalizujeme procesy pro bezstarostné předání klíčů našim klientům.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH IMAGE WITH BOTTOM GRID */}
      <section 
        className="relative h-[80vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        
        {/* Spodní Grid - Služby */}
        <div className="relative z-10 w-full border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { title: "Off-Market Reality", desc: "Zprostředkování luxusních nemovitostí mimo veřejné portály." },
              { title: "Investiční Analýzy", desc: "Daty podložené modely pro maximální zhodnocení kapitálu." },
              { title: "Home Staging", desc: "Příprava vaší nemovitosti pro dosažení nejvyšší prodejní ceny." },
              { title: "Property Management", desc: "Kompletní správa vašeho portfolia bez jakýchkoliv starostí." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 md:p-12 hover:bg-white/5 transition-colors cursor-pointer group">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-4">{item.title}</h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLEAN WHITE ABOUT SECTION */}
      <section className="bg-white text-black py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="w-12 h-[1px] bg-black"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em]">O NÁS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tighter mb-8">
            Zjistěte více o naší<br /><span className="font-black">společnosti</span>
          </h2>
          <p className="text-sm text-gray-600 font-light uppercase tracking-widest mb-12">
            Vítejte ve světě exkluzivních nemovitostí a diskrétního servisu s naším týmem — RE/MAX ALPHA.
          </p>
          <button className="px-10 py-4 border border-black text-[10px] font-black tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all">
            Celý příběh
          </button>
        </div>
      </section>
    </main>
  );
}
