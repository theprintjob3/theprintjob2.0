import React from 'react';
import { motion } from 'motion/react';

export const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const text = `Hi! I visited your website "The Print Job" and want to know more about bulk customization pricing.`;
    window.open(`https://wa.me/918076211044?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Floating Tooltip */}
      <span className="mr-3 scale-0 group-hover:scale-100 origin-right transition-transform duration-250 bg-neutral-900 border border-white/10 text-white font-mono text-xs font-semibold py-1.5 px-3.5 rounded-lg shadow-lg pointer-events-none select-none">
        Order on WhatsApp 💬
      </span>

      {/* Floating Pulsing WhatsApp Button */}
      <button
        onClick={handleClick}
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 active:scale-95 transition-all"
        aria-label="Contact on WhatsApp"
      >
        {/* Animated Custom Pulse Waves */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        <span className="absolute -inset-2.5 rounded-full bg-[#25D366] opacity-10 animate-pulse pointer-events-none" />

        {/* WhatsApp Vector Icon inside */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.022-.08-.117-.118-.17-.14 1.157-1.12 1.197-2.616.326-3.793a3.541 3.541 0 0 0-2.825-1.424l-.15-.003c-.93 0-1.802.361-2.458 1.018a3.463 3.463 0 0 0-1.018 2.458c0 .937.362 1.815 1.018 2.47a3.46 3.46 0 0 0 2.458 1.02h.15a3.52 3.52 0 0 0 2.766-1.391c.075.02.261.077.34.1.258.077.525-.01.616-.215.14-.3.048-.686-.184-1l-.019-.015zM12.002 2c-5.514 0-10 4.486-10 10 0 1.956 1.116 3.8 2.894 4.793L3.633 22l5.35-1.25c.954.542 2.015.827 3.019.827 5.514 0 10-4.486 10-10s-4.486-10-10-10zm2.762 13.904c-.381.189-.79.378-1.218.498a5.556 5.556 0 0 1-1.636.19c-.838-.035-1.67-.282-2.383-.71a5.61 5.61 0 0 1-1.745-1.57 5.516 5.552 0 0 1-1.074-2.228 5.6 5.6 0 0 1 .1-2.5 5.57 5.57 0 0 1 1.188-2.09c.304-.326.68-.535 1.11-.6.417-.065.818.067 1.12.355.244.272.3.66.14.97-.205.4-.523.714-.852 1.026.046.208.136.402.266.57.48.618 1.12 1.066 1.83 1.282.164.05.334.058.5.026a2.43 2.43 0 0 0 .9-.508c.28-.24.672-.257.97-.04.4.29.53.8.31 1.18-.152.262-.352.518-.518.784z" />
        </svg>
      </button>
    </div>
  );
};
