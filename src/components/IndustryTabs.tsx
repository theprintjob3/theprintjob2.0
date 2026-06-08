import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { industriesData } from '../data';
import { Award, ArrowRight, MessageSquare } from 'lucide-react';

export const IndustryTabs: React.FC = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeIndustry = industriesData[activeTabIdx];

  const handleEnquireWhatsApp = (serviceName: string) => {
    const text = `Hi! I represent a "${activeIndustry.label}" and want to get bulk custom printing prices on items like "${serviceName}" from The Print Job.`;
    window.open(`https://wa.me/918076211044?text=${encodeURIComponent(text)}`, '_blank');
  };

  const getThemeTextClass = (theme: string) => {
    switch (theme) {
      case 'orange': return 'text-orange-600';
      case 'blue': return 'text-blue-600';
      case 'purple': return 'text-purple-600';
      case 'emerald': return 'text-emerald-600';
      default: return 'text-blue-600';
    }
  };

  const getThemeBgClass = (theme: string) => {
    switch (theme) {
      case 'orange': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'blue': return 'bg-blue-50 text-blue-650 border-blue-100';
      case 'purple': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'emerald': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-blue-50 text-blue-600 border-blue-100';
    }
  };

  const getThemeBorderClass = (theme: string) => {
    switch (theme) {
      case 'orange': return 'hover:border-orange-500 hover:shadow-orange-100/50';
      case 'blue': return 'hover:border-blue-500 hover:shadow-blue-100/50';
      case 'purple': return 'hover:border-purple-500 hover:shadow-purple-100/50';
      case 'emerald': return 'hover:border-emerald-500 hover:shadow-emerald-100/50';
      default: return 'hover:border-indigo-500';
    }
  };

  const getTabActiveColor = (theme: string) => {
    switch (theme) {
      case 'orange': return 'bg-orange-600 border-orange-650 text-white shadow-md shadow-orange-100';
      case 'blue': return 'bg-blue-700 border-blue-700 text-white shadow-md shadow-blue-100';
      case 'purple': return 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-100';
      case 'emerald': return 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-100';
      default: return 'bg-indigo-600 border-indigo-600 text-white';
    }
  };

  return (
    <section id="industries" className="py-12 bg-transparent text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tab Controllers Row */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap max-w-4xl mx-auto">
          {industriesData.map((ind, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black font-sans border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? getTabActiveColor(ind.themeColor)
                    : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
                }`}
              >
                <span className="text-lg">{ind.emoji}</span>
                <span className="uppercase tracking-wider font-mono">{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-10"
          >
            {/* Thematic Hero Feature Banner with Custom Gradients */}
            <div className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${activeIndustry.gradientClass} relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl text-left`}>
              {/* Massive ambient decorative bubble vector */}
              <div className="absolute right-0 bottom-0 text-[180px] sm:text-[230px] opacity-15 leading-none translate-y-24 translate-x-12 pointer-events-none select-none select-all-none">
                {activeIndustry.emoji}
              </div>

              {/* Icon Bubble */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl shadow-md flex-shrink-0">
                {activeIndustry.emoji}
              </div>

              {/* Text Blocks */}
              <div className="text-left relative z-10 max-w-2xl">
                <span className="inline-block bg-white/20 text-white font-mono text-[9px] font-black py-1 px-3.5 rounded-full border border-white/20 mb-3.5 uppercase tracking-widest">
                  {activeIndustry.badgeText}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wider uppercase leading-none mb-3">
                  {activeIndustry.title}
                </h3>
                <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                  {activeIndustry.subtitle}
                </p>
              </div>
            </div>

            {/* Structured sector items array */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {activeIndustry.products.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => handleEnquireWhatsApp(p.name)}
                  className={`p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-xl hover:translate-y-[-2px] ${getThemeBorderClass(activeIndustry.themeColor)}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center text-xl border border-neutral-100 shadow-inner">
                        {p.icon}
                      </div>

                      {/* Small badge item price */}
                      <span className={`px-2.5 py-1 rounded-full border text-[9.5px] font-black font-mono tracking-wider ${getThemeBgClass(activeIndustry.themeColor)}`}>
                        {p.tag}
                      </span>
                    </div>

                    <div>
                      <h4 className={`font-sans font-black text-lg text-neutral-800 tracking-tight mb-1 group-hover:${getThemeTextClass(activeIndustry.themeColor)} transition-colors`}>
                        {p.name}
                      </h4>
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  {/* Actions line */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono mt-6 border-t border-neutral-100 pt-4 group-hover:text-black transition-colors">
                    <Award className="w-4 h-4 ml-0.5 text-rose-500" />
                    <span>Quick Quote Enquiry</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs specific to active industry */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => handleEnquireWhatsApp(`Bulk ${activeIndustry.label} Merchandise`)}
                className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-xs px-8 py-4.5 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg transform active:scale-95 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order Custom {activeIndustry.label} Wear</span>
              </button>

              <button
                onClick={() => handleEnquireWhatsApp(`Bulk Request For ${activeIndustry.label}`)}
                className="w-full sm:w-auto bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-extrabold text-xs py-4.5 px-6 rounded-full flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Request Custom Bulk Quotation</span>
                <ArrowRight className="w-4 h-4 text-rose-500" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
