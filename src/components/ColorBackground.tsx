import React from 'react';
import { motion } from 'motion/react';

interface ColorBackgroundProps {
  children: React.ReactNode;
  accentColor?: 'rose' | 'amber' | 'indigo' | 'emerald' | 'purple' | 'cyan' | 'all';
}

export const ColorBackground: React.FC<ColorBackgroundProps> = ({ children, accentColor = 'all' }) => {
  return (
    <div className="relative min-h-[60vh] bg-neutral-50 text-neutral-900 overflow-hidden font-sans antialiased">
      {/* Light Mesh Gradient Backdrop overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFDF5] via-[#FCF8FF] to-[#F1F6FF] opacity-95 pointer-events-none z-0" />

      {/* Grid Pattern overlay with soft coloring */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* Glowing atmospheric orbs based on requested color accents or displaying all for maximum colorfulness */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {(accentColor === 'rose' || accentColor === 'all') && (
          <motion.div 
            animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -left-16 w-96 h-96 bg-[#E11D48]/15 rounded-full blur-[100px]" 
          />
        )}
        
        {(accentColor === 'amber' || accentColor === 'all') && (
          <motion.div 
            animate={{ x: [0, -30, 50, 0], y: [0, 30, -40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#FACC15]/10 rounded-full blur-[90px]" 
          />
        )}

        {(accentColor === 'indigo' || accentColor === 'all') && (
          <motion.div 
            animate={{ x: [0, 50, -30, 0], y: [0, 50, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 right-1/4 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px]" 
          />
        )}

        {(accentColor === 'emerald' || accentColor === 'all') && (
          <motion.div 
            animate={{ x: [0, -25, 45, 0], y: [0, -45, 15, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#10B981]/10 rounded-full blur-[100px]" 
          />
        )}

        {(accentColor === 'purple' || accentColor === 'all') && (
          <motion.div 
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[110px]" 
          />
        )}

        {(accentColor === 'cyan' || accentColor === 'all') && (
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-[80px]" 
          />
        )}
      </div>

      {/* Actual Contained View layout */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  colorName?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, badge, colorName = 'text-rose-600' }) => {
  return (
    <div className="pt-28 pb-12 text-center max-w-4xl mx-auto px-4 relative z-10">
      {badge && (
        <span className={`inline-block px-3 py-1 text-[10px] font-extrabold uppercase font-mono tracking-widest bg-white rounded-full border border-neutral-200 shadow-sm ${colorName} mb-4`}>
          ✨ {badge}
        </span>
      )}
      <h1 className="font-display text-5xl sm:text-7xl text-neutral-900 tracking-wider uppercase mb-4 drop-shadow-sm leading-tight">
        {title}
      </h1>
      <p className="text-neutral-500 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      
      {/* Short stylized divider bar */}
      <div className="h-1.5 w-24 bg-gradient-to-r from-rose-500 to-yellow-400 mx-auto rounded-full mt-6 shadow-sm" />
    </div>
  );
};
