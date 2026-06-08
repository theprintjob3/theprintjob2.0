import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productsData } from '../data';
import { Product } from '../types';
import { ShoppingCart, CheckCircle, Info, X, ArrowRight, MessageSquare } from 'lucide-react';

export const InteractiveCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wear' | 'gift'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = productsData.filter((product) => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  });

  const handleOrderWhatsApp = (product: Product) => {
    const text = `Hi! I want to enquire about ordering custom "${product.name}" (${product.emoji}). Can you share a custom quote for it?`;
    window.open(`https://wa.me/918076211044?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-12 bg-transparent text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Navigation */}
        <div className="flex justify-center items-center gap-2.5 mb-12 flex-wrap">
          <button
            onClick={() => { setActiveCategory('all'); setSelectedProduct(null); }}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase font-mono border transition-all duration-300 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-rose-500 border-rose-500 text-white shadow-md shadow-rose-200'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            📋 All Products
          </button>
          <button
            onClick={() => { setActiveCategory('wear'); setSelectedProduct(null); }}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase font-mono border transition-all duration-300 cursor-pointer ${
              activeCategory === 'wear'
                ? 'bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-200'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            👕 Apparel & Team Wear
          </button>
          <button
            onClick={() => { setActiveCategory('gift'); setSelectedProduct(null); }}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase font-mono border transition-all duration-300 cursor-pointer ${
              activeCategory === 'gift'
                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200'
                : 'bg-white/80 backdrop-blur-sm border-neutral-200 text-neutral-500 hover:text-neutral-950 hover:border-neutral-400'
            }`}
          >
            🎁 Corporate & Photo Mugs
          </button>
        </div>

        {/* Cards Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => {
            // Colorful borders and highlights based on category
            const accentBg = product.category === 'wear' ? 'bg-orange-50/70' : 'bg-blue-50/70';
            const accentText = product.category === 'wear' ? 'text-orange-500 border-orange-100 bg-orange-50' : 'text-blue-500 border-blue-100 bg-blue-50';

            return (
              <motion.div
                layout
                key={product.id}
                onClick={() => handleOrderWhatsApp(product)}
                className="p-6 rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur-sm hover:border-emerald-500 hover:ring-2 hover:ring-emerald-500/10 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 cursor-pointer flex flex-col justify-between select-none"
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl shadow-inner ${accentBg}`}>
                      {product.emoji}
                    </div>
                    <span className={`text-[10px] font-mono font-extrabold tracking-widest px-3 py-1 rounded-full border ${accentText}`}>
                      CUSTOM PRINT
                    </span>
                  </div>

                  {/* Info Text */}
                  <h3 className="font-sans font-black text-xl text-neutral-800 text-left mb-2 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm text-left leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Card Footer action indicators */}
                <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-xs font-mono">
                  <div className="text-left">
                    <div className="text-neutral-400 uppercase tracking-widest text-[9px] font-bold">Pricing</div>
                    <div className="text-rose-500 font-extrabold text-xs mt-0.5">Custom Quote</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(selectedProduct?.id === product.id ? null : product);
                      }}
                      className="text-neutral-400 hover:text-neutral-700 font-bold transition-colors flex items-center gap-1 cursor-pointer py-1 px-2.5 hover:bg-neutral-50 rounded-lg border border-neutral-100 bg-neutral-50/50"
                      title="View specifications"
                    >
                      <Info className="w-3.5 h-3.5 text-rose-500" />
                      <span>Specs</span>
                    </span>

                    <span className="text-emerald-500 font-extrabold flex items-center gap-1 hover:text-emerald-600 transition-colors">
                      <MessageSquare className="w-4 h-4 fill-emerald-50/20" />
                      <span>Chat</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Product Specifications Detail Panel */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl relative text-left"
            >
              {/* Decorative colorful band in specs modal */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-yellow-400 to-blue-500 rounded-t-3xl" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-800 bg-neutral-100 p-2 rounded-xl transition-colors cursor-pointer"
                title="Close specifications"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start mt-2">
                <div className="text-5xl sm:text-6xl p-5 bg-neutral-50 border border-neutral-200 rounded-2xl flex-shrink-0 shadow-inner">
                  {selectedProduct.emoji}
                </div>
                <div className="w-full">
                  <div className="text-rose-600 font-mono text-[10px] font-black tracking-widest uppercase mb-1">
                    🌟 Technical Material Specifications
                  </div>
                  <h4 className="font-sans font-black text-2xl text-neutral-900 tracking-tight mb-2">
                    {selectedProduct.name} Specs
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    Our team implements custom print templates using high-grade stretch fabrics and wash-proof Swiss pigments, ensuring highly vivid prints with no cracking or fading over dozens of heavy wash cycles.
                  </p>

                  {/* Bullet Spec points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                    {selectedProduct.specs.map((spec, index) => (
                      <div key={index} className="flex gap-2 items-start text-xs sm:text-sm text-neutral-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:justify-between border-t border-neutral-100 pt-6 gap-4 w-full">
                    <span className="text-neutral-400 text-xs font-mono text-left block">
                      *Get custom vector mockups & fabric samples fully for free.
                    </span>

                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        handleOrderWhatsApp(selectedProduct);
                      }}
                      className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-indigo-600 hover:opacity-90 text-white font-extrabold px-6 py-4 rounded-full flex items-center justify-center gap-2 transform active:scale-95 transition-all text-xs cursor-pointer shadow-lg shadow-indigo-100"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Proceed on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
