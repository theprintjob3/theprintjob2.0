import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'gym' | 'school' | 'team'>('all');

  const filteredTestimonials = testimonialsData.filter((t) => {
    if (filter === 'all') return true;
    return t.category === filter;
  });

  return (
    <section className="py-12 bg-transparent text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Pill Row */}
        <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4.5 py-2 rounded-full text-xs font-black font-mono border transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-rose-500 border-rose-500 text-white shadow-md shadow-rose-100'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('gym')}
            className={`px-4.5 py-2 rounded-full text-xs font-black font-mono border transition-all duration-300 cursor-pointer ${
              filter === 'gym'
                ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-100'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            🏋️ Gym & Fitness
          </button>
          <button
            onClick={() => setFilter('school')}
            className={`px-4.5 py-2 rounded-full text-xs font-black font-mono border transition-all duration-300 cursor-pointer ${
              filter === 'school'
                ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-100'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            🏫 Schools & Academies
          </button>
          <button
            onClick={() => setFilter('team')}
            className={`px-4.5 py-2 rounded-full text-xs font-black font-mono border transition-all duration-300 cursor-pointer ${
              filter === 'team'
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-100'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            ⚽ Sports Captains
          </button>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((t, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200 flex flex-col justify-between text-left relative overflow-hidden shadow-sm hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
              >
                {/* Big decorative quotes sign */}
                <span className="absolute -top-1 left-4 text-7xl font-sans font-black text-rose-500/5 select-none pointer-events-none">
                  “
                </span>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-450 text-amber-450" />
                    ))}
                  </div>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed italic relative z-10 font-medium">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 border-t border-neutral-100 pt-4">
                  {/* User Initial Circle avatar */}
                  <div className={`w-10 h-10 ${t.colorClass} text-white rounded-full flex items-center justify-center font-black text-xs uppercase shadow-sm`}>
                    {t.initials}
                  </div>

                  <div>
                    <h4 className="font-sans font-black text-sm text-neutral-800">{t.name}</h4>
                    <span className="text-[9.5px] text-neutral-400 font-mono font-black uppercase tracking-wider block mt-0.5">
                      {t.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Google Maps local business trust badge */}
        <div className="mt-12 flex justify-center items-center gap-2.5 text-neutral-400 text-xs font-mono font-bold">
          <MessageSquare className="w-4 h-4 text-rose-500" />
          <span>Need custom mock previews for your team before finalizing? We print sample prototypes!</span>
        </div>

      </div>
    </section>
  );
};
