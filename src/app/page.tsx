'use client';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { Menu, X, MapPin, Maximize, BedDouble, Bath, Car, ArrowRight, Phone, Mail, Sparkles, Wand2 } from 'lucide-react';

// --- 🌟 LUCKYHO TURBO 3D WOW ASSEMBLE ENGINE (smrk) 🌟 ---
const AssembleReveal = ({ children, isVisible, data }: { children: ReactNode, isVisible: boolean, data: any }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[90vh]">
      <style dangerouslySetInnerHTML={{__html: `
        .wow-fragment {
          position: absolute;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform-style: preserve-3d;
          box-shadow: 0 50px 150px rgba(0,0,0,0.3);
          transition: transform 0.15s ease-out;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .is-assembling .wow-fragment {
          animation: wow-assemble-frame 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes wow-assemble-frame {
          0% { opacity: 0; transform: translateZ(900px) rotateX(50deg) rotateY(-20deg) scale(0.4); filter: blur(30px) brightness(0.5); }
          60% { filter: blur(8px) brightness(1.2); }
          100% { opacity: 1; transform: translateZ(0) rotateX(0) rotateY(0) scale(1); filter: blur(0) brightness(1); }
        }
      `}} />
      
      <div className={`absolute inset-0 perspective-[3000px] z-0 ${isVisible ? 'is-assembling' : ''}`}>
        <div className="wow-fragment" style={{ 
          width: '80%', height: '90%', top: '0%', left: '0%', 
          backgroundImage: `url('${data.img}')`,
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
          animationDelay: '0s' 
        }}></div>
        <div className="wow-fragment" style={{ 
          width: '60%', height: '70%', bottom: '0%', right: '0%', 
          backgroundImage: `url('${data.img}')`,
          backgroundPosition: 'right bottom',
          transform: `translate3d(${mousePos.x * -0.6}px, ${mousePos.y * 0.2}px, 50px)`,
          animationDelay: '0.2s' 
        }}></div>
      </div>
      
      <div className={`relative z-10 transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} style={{ transitionDelay: '1.2s' }}>
        {children}
      </div>
    </div>
  );
};

export default function VogueLuxuryPitch() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [pitchOpen, setPitchOpen] = useState(false);
  const [data, setData] = useState({
    title: "VILA KUNRATICE",
    subtitle: "Esence moderního minimalismu v srdci přírody.",
    price: "59.000.000",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    agent: "Michal Černý"
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key.toLowerCase() === 'l') setPitchOpen(p => !p); };
    window.addEventListener('keydown', handleKey);
    setTimeout(() => setHeroVisible(true), 400);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="bg-[#0f172a] text-white font-sans selection:bg-[#cda274] overflow-x-hidden min-h-screen">
      
      {/* 🛠️ LUCKYHO PITCH GENERATOR v3.0 🛠️ */}
      {pitchOpen && (
        <div className="fixed bottom-10 right-10 z-[100] bg-white p-10 shadow-3xl border w-96 animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-black text-[11px] uppercase tracking-[0.5em] text-[#cda274]">Pitch Vogue Engine v3.1</h4>
            <button onClick={() => setPitchOpen(false)} className="text-slate-900"><X size={20}/></button>
          </div>
          <div className="space-y-4 text-slate-900">
            <input className="w-full border p-3 text-xs outline-none focus:border-[#cda274]" placeholder="Nadpis (nř. Vila Kunratice)" value={data.title} onChange={e => setData({...data, title: e.target.value})} />
            <input className="w-full border p-3 text-xs outline-none focus:border-[#cda274]" placeholder="Cena (nř. 59.000.000)" value={data.price} onChange={e => setData({...data, price: e.target.value})} />
            <input className="w-full border p-3 text-xs outline-none focus:border-[#cda274]" placeholder="URL Hlavní fotky" value={data.img} onChange={e => setData({...data, img: e.target.value})} />
            <button 
              onClick={() => {setHeroVisible(false); setTimeout(() => setHeroVisible(true), 250)}} 
              className="w-full flex items-center justify-center gap-4 bg-black text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#cda274] transition-all group"
            >
              WOW Generate <Wand2 size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 py-8 px-16 flex justify-between items-center text-white">
        <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tighter uppercase italic">QARA</span>
            <span className="text-[10px] font-bold text-[#cda274] tracking-[0.4em] uppercase -mt-1 ml-4">Premium</span>
        </div>
        <nav className="hidden md:flex gap-12 text-[11px] font-bold uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-[#cda274] transition-colors">Vily</a>
          <a href="#" className="hover:text-[#cda274] transition-colors">Byty</a>
          <a href="#" className="hover:text-[#cda274] transition-colors">Kontakt</a>
        </nav>
        <button className="flex items-center gap-6 bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#cda274] transition-all">
            Menu <Menu size={18} strokeWidth={1.5} />
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 h-[100vh] flex items-end overflow-hidden pb-12 px-16">
        <AssembleReveal isVisible={heroVisible} data={data}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end max-w-7xl">
            
            <div className="md:col-span-1 h-[70vh]"></div>

            <div className="md:col-span-11 bg-transparent p-12 relative z-20 text-white w-full">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2 relative">
                        <div className="absolute -top-12 left-12 text-4xl font-black tracking-tighter uppercase italic text-white/30 drop-shadow-sm select-none">QARA</div>
                        <h1 className="text-[clamp(4rem,10vw,140px)] font-extrabold font-serif leading-none tracking-tighter uppercase drop-shadow-2xl text-white">
                            {data.title.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? 'italic font-light block md:ml-20 opacity-90 text-[#cda274]' : 'block'}>{word}</span>
                            ))}
                        </h1>
                    </div>

                    <div className="border-t border-white/20 pt-10 mt-10">
                        <div className="flex items-center gap-6 mb-10 text-[#cda274] text-[10px] font-bold uppercase tracking-[0.6em] flex-wrap">
                            <Sparkles size={16} strokeWidth={1}/> {data.agent} • Exclusive Listing
                        </div>
                        {/* 🌟 OPRAVENÁ RESPONZIVNÍ CENA (smrk) 🌟 */}
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 w-full">
                            <div className="min-w-0 flex-shrink">
                                <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-2 leading-relaxed">Plocha: 342 m² | Pozemek: 1.250 m²</div>
                                <div className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter text-white drop-shadow-sm leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                                    {data.price} <span className="text-2xl md:text-3xl text-[#cda274] align-baseline">Kč</span>
                                </div>
                            </div>
                            <button className="group relative flex-shrink-0 flex items-center justify-center gap-6 bg-white text-[#0f172a] px-10 md:px-14 py-6 md:py-7 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden transition-all hover:bg-[#cda274] hover:text-white shadow-2xl">
                                Objevit prostor
                                <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </AssembleReveal>
      </section>

      {/* MAKLEŘ FOOTER */}
      <section className="bg-white py-24 px-10 border-t border-slate-50 relative z-20 text-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 text-center sm:text-left">
            <div className="w-40 h-40 bg-slate-100 overflow-hidden grayscale border-2 border-[#cda274] flex-shrink-0">
               <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold">FOTO</div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-800 tracking-[0.3em] mb-2 block">Váš certifikovaný makléř QARA Premium</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6 uppercase leading-none">{data.agent}</h2>
              <div className="flex flex-col sm:flex-row gap-x-12 gap-y-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">
                <a href={`tel:`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-[#cda274]"><Phone size={14} /> +420 602 123 456</a>
                <a href={`mailto:`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-[#cda274]"><Mail size={14} /> michal.cerny@qara.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
