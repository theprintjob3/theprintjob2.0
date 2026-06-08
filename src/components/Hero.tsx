import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Flame, ArrowRight, Sparkles, ShieldCheck, CheckCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const shirtColors = [
    { name: 'Cosmic Slate', hex: '#1E293B', text: 'text-[#EDEDED]', bg: 'bg-[#1E293B] border border-neutral-300' },
    { name: 'Deep Royal', hex: '#1D4ED8', text: 'text-blue-500', bg: 'bg-blue-700' },
    { name: 'Pure Silk White', hex: '#FAFAFA', text: 'text-neutral-900', bg: 'bg-[#FFFFFF] border border-neutral-300' },
    { name: 'Mystic Purple', hex: '#7C3AED', text: 'text-indigo-400', bg: 'bg-purple-600' }
  ];

  const [activeColorIdx, setActiveColorId] = useState(0);

  return (
    <section className="relative bg-[#0B0B0C] text-[#EDEDED] overflow-hidden py-16 lg:py-24">
      {/* Dynamic Spectrum backdrops */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-[350px] h-[350px] bg-rose-500/10 rounded-full blur-[110px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle background grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Indicator Promo */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-black mb-6 shadow-md"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-450 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <span className="font-mono text-rose-400 text-[10px] tracking-widest uppercase">PRAYAGRAJ'S PREMIER CUSTOM PRINTER</span>
            </motion.div>

            {/* Headline with vibrant spectrum logo styling */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl md:text-8xl tracking-widest text-white leading-none mb-6 text-left uppercase"
            >
              Print Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-yellow-400 via-pink-400 to-blue-400 font-medium italic">Vibe.</span>
              <br />
              <span className="font-sans font-black text-xs sm:text-xs md:text-sm lg:text-sm bg-white/[0.04] px-4 py-2 rounded-xl border border-white/10 shadow-inner text-yellow-300 inline-block mt-4 normal-case tracking-widest uppercase">
                🚀 CUSTOMIZE YOUR VISION IN HIGH FIDELITY
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 font-medium"
            >
              We manufacture customized merchandise and bulk activewear. From dry-wick sports jerseys to sleek school uniforms and photo corporate gifting welcome mugs, we translate your vision into physical artworks.
            </motion.p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-md text-left">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-mono font-bold">
                <ShieldCheck className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <span>Wash-Proof Premium Prints</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-mono font-bold">
                <CheckCircle className="w-5 h-5 text-yellow-405 flex-shrink-0" />
                <span>Free In-house Vector Tuning</span>
              </div>
            </div>

            {/* Interactive CTAs linked directly to routes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto text-left"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 hover:opacity-90 text-white font-extrabold text-xs px-8 py-5 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-rose-900/10 cursor-pointer transform active:scale-95 transition-all duration-300 uppercase tracking-wider"
              >
                <span>🎨 Start Custom Order</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-white" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white text-white font-black text-xs py-5 px-6 rounded-full flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>EXPLORE PRODUCTS</span>
              </Link>
            </motion.div>

            {/* Live Metrics Counts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-8 mt-12 py-4 border-t border-white/5 w-full max-w-xl text-neutral-400 font-mono text-center sm:text-left"
            >
              <div>
                <div className="font-sans font-black text-2xl md:text-3xl text-rose-500">500+</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1 font-black">Local Clients</div>
              </div>
              <div className="h-8 w-px bg-white/5" />
              <div>
                <div className="font-sans font-black text-2xl md:text-3xl text-yellow-400">10k+</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1 font-black">Items Printed</div>
              </div>
              <div className="h-8 w-px bg-white/5" />
              <div>
                <div className="font-sans font-black text-2xl md:text-3xl text-blue-400">4+ Years</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-500 mt-1 font-black">Est. Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Dynamic Customizer Interface */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Card Top bar */}
              <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono font-bold">
                <span className="flex items-center gap-1 text-rose-500 font-black uppercase tracking-widest text-[9px] bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                  <Flame className="w-3 h-3 fill-current animate-pulse text-rose-450" />
                  PREVIEW MOCKUP
                </span>
                <span>SWEAT-SHIRT // PRO</span>
              </div>

              {/* T-Shirt Visualizer with state driven color rendering */}
              <div className="my-auto flex justify-center items-center relative py-4">
                <motion.div
                  key={activeColorIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="w-44 h-44 sm:w-52 sm:h-52 relative flex items-center justify-center p-2"
                >
                  {/* Colored t-shirt vector backglow */}
                  <div
                    className="absolute w-36 h-36 rounded-full opacity-20 blur-3xl transition-colors duration-500"
                    style={{ backgroundColor: shirtColors[activeColorIdx].hex }}
                  />

                  {/* High Quality Canvas SVG rendering t-shirt */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full stroke-none transition-all duration-500 drop-shadow-xl"
                    style={{ fill: shirtColors[activeColorIdx].hex }}
                  >
                    <path d="M18,2H16c-1,1-2,1-4,1S9,3,8,2H6C3.8,2,2,3.8,2,6v2c0,0.5,0.4,1,1,1h1v11c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V9h1c0.6,0,1-0.5,1-1V6C22,3.8,20.2,2,18,2z" />
                  </svg>

                  {/* High quality brand Vector Logo overlay onto the t-shirt chest */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
                    <div className="scale-90 hover:scale-110 transition-transform duration-300">
                      <Logo variant="mark" size={40} />
                    </div>
                    {/* Small print brand label */}
                    <span className="text-[7px] font-mono text-white/50 tracking-widest font-black uppercase mt-1">
                      KARELI / PRAYAGRAJ
                    </span>
                  </div>
                </motion.div>

                {/* Vertical detail text */}
                <span className="absolute left-0 bottom-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest rotate-90 origin-left">
                  100% Breathable Mesh
                </span>
              </div>

              {/* Bottom Customizer selector */}
              <div className="border-t border-white/5 pt-4 text-left">
                <div className="text-[11px] text-neutral-450 font-mono font-bold mb-2">
                  Garment Shade: <span className="text-white font-extrabold">{shirtColors[activeColorIdx].name}</span>
                </div>
                {/* Selectors dots */}
                <div className="flex gap-3 justify-start items-center">
                  {shirtColors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveColorId(idx)}
                      className={`w-6 h-6 rounded-full transition-all duration-300 cursor-pointer ${color.bg} ${
                        activeColorIdx === idx
                          ? 'scale-115 ring-2 ring-rose-500 ring-offset-2 ring-offset-[#0B0B0C]'
                          : 'hover:scale-110'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
