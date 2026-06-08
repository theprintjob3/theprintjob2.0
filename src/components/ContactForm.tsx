import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phoneNumber) {
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 4000);
      return;
    }

    // Trigger local feedback
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 5000);

    // Format final WhatsApp message
    const formattedText = `Hi! I want to inquire about custom print services:
- Name: ${name}
- Contact Phone: ${phoneNumber}
- Required Category: ${selectedService || 'Not Selected'}
- Message Context: ${message || 'No specific text'}`;

    // Open WhatsApp
    window.open(`https://wa.me/918076211044?text=${encodeURIComponent(formattedText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 bg-transparent text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
          
          {/* Left Block: Business Info card */}
          <div className="space-y-6 text-left w-full">
            <div className="bg-white/95 backdrop-blur-sm border border-neutral-200 p-8 rounded-3xl space-y-8 relative overflow-hidden shadow-sm">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#E11D48]/5 rounded-full blur-2xl" />

              <h3 className="font-sans font-black text-neutral-900 text-2xl tracking-tight">The Print Job Office</h3>

              {/* Utility Rows */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start text-xs sm:text-sm text-neutral-600">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center border border-rose-100 text-rose-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase font-mono text-[9px] font-black tracking-widest">Main Workshop</div>
                    <div className="text-neutral-800 mt-1 leading-relaxed font-bold">Kareli Main Market Area, Prayagraj, UP, India</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-xs sm:text-sm text-neutral-600">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center border border-purple-100 text-purple-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase font-mono text-[9px] font-black tracking-widest">Contact Hotline</div>
                    <div className="text-neutral-800 mt-1 font-black text-sm">+91 80762 11044</div>
                    <div className="text-neutral-500 text-xs mt-0.5 font-semibold">+91 96960 85673</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-xs sm:text-sm text-neutral-600">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 text-blue-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase font-mono text-[9px] font-black tracking-widest">Email Enquiries</div>
                    <div className="text-neutral-800 mt-1 font-bold">theprintjob555@gmail.com</div>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-xs sm:text-sm text-neutral-600">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100 text-emerald-600 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase font-mono text-[9px] font-black tracking-widest">Operating Slots</div>
                    <div className="text-neutral-805 mt-1 font-bold">Monday – Saturday: 9:00 AM – 8:00 PM</div>
                    <div className="text-neutral-400 text-xs mt-0.5">*(Closed on Sunday)</div>
                  </div>
                </div>
              </div>

              {/* Social Platform Badges */}
              <div className="pt-6 border-t border-neutral-100">
                <div className="text-neutral-400 uppercase font-mono text-[9px] font-black tracking-widest mb-3.5">Instant Social Previews</div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://instagram.com/theprintjob2.0"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4.5 py-2.5 bg-[#FDF2F8] border border-[#FBCFE8] hover:border-pink-400 text-[#DB2777] rounded-full text-xs font-black flex items-center gap-1.5 focus:outline-none transition-all duration-300 shadow-sm"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Instagram @theprintjob2.0</span>
                  </a>
                  <a
                    href="https://facebook.com/theprintjob2.0"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4.5 py-2.5 bg-blue-50 border border-blue-200 hover:border-blue-400 text-blue-700 rounded-full text-xs font-black flex items-center gap-1.5 focus:outline-none transition-all duration-300 shadow-sm"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook @theprintjob2.0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Live Form customized box */}
          <div className="bg-white/95 backdrop-blur-sm border border-neutral-200 p-6 sm:p-8 rounded-3xl text-left relative overflow-hidden shadow-sm w-full">
            <h3 className="font-sans font-black text-[#E11D48] text-xl tracking-tight mb-2">Send Bulk Enquiries</h3>
            <p className="text-neutral-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Fill out this dynamic checklist sheet and we will directly reach back with customized pricing templates on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* input name */}
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-rose-500 rounded-2xl px-4 py-3 text-neutral-800 text-sm font-sans focus:outline-none placeholder-neutral-400 transition-colors"
                />
              </div>

              {/* input phone number */}
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone number, e.g., +91 XXXXX XXXXX"
                  className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-rose-500 rounded-2xl px-4 py-3 text-neutral-800 text-sm font-sans focus:outline-none placeholder-neutral-400 transition-colors"
                />
              </div>

              {/* selector dropdown */}
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                  Select Custom Category
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-rose-500 rounded-2xl px-4 py-3 text-neutral-700 text-sm font-sans focus:outline-none transition-colors"
                >
                  <option value="">Choose category...</option>
                  <option value="Gym Wear">Gym Wear / Staff Uniforms 🏋️</option>
                  <option value="School College Uniforms">School / College Uniforms 🏫</option>
                  <option value="Coaching Institute Merch">Coaching Institute Merch 📚</option>
                  <option value="Sports Jerseys">Sports Jerseys / Full Kits ⚽</option>
                  <option value="Custom T-Shirts">Custom printed T-Shirts 👕</option>
                  <option value="Printed Ceramic Mugs">Ceramic Printed Mugs ☕</option>
                  <option value="Merchandise Welcome Packs">Merchandise Welcome Kits 🎁</option>
                </select>
              </div>

              {/* description text block */}
              <div>
                <label className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 font-mono">
                  Details / Sizes & Quantities
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about fabric preferences, color combos, or required delivery date..."
                  className="w-full bg-neutral-50/50 border border-neutral-200 focus:border-rose-500 rounded-2xl px-4 py-3 text-neutral-800 text-sm font-sans focus:outline-none placeholder-neutral-400 transition-colors resize-none"
                />
              </div>

              {/* Trigger Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 hover:opacity-90 text-white font-extrabold text-xs py-4.5 rounded-full flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-300 shadow-lg cursor-pointer mt-6 border-none"
              >
                <Send className="w-4 h-4" />
                <span>Submit Form to WhatsApp</span>
              </button>

            </form>

            {/* Success & Error feedbacks */}
            <AnimatePresence>
              {showSuccessToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 flex items-center gap-2.5 p-3.5 bg-emerald-50 border border-emerald-150 rounded-2xl text-emerald-600 text-xs font-mono"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Form compiled! Redirecting directly into our WhatsApp helper desk...</span>
                </motion.div>
              )}

              {showErrorToast && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 flex items-center gap-2.5 p-3.5 bg-rose-50 border border-rose-150 rounded-2xl text-rose-600 text-xs font-mono"
                >
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span>Aapka Naam aur Phone number provide karna zaroori hai!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
