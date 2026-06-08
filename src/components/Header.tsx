import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="header-nav"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200 py-2.5'
          : 'bg-[#0B0B0C] border-b border-white/5 py-4'
      }`}
    >
      {/* Decorative Brand Spectrum line at the bottom of header */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E11D48] via-[#FACC15] via-[#F472B6] via-[#10B981] via-[#F97316] to-[#06B6D4] opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and Branding Link */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-lg p-1"
          >
            <div className="group-hover:scale-105 transition-transform duration-300">
              <Logo variant="mark" size={42} />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-sans font-black tracking-tight text-lg sm:text-lg md:text-xl leading-none transition-colors ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>
                The Print Job
              </span>
              <span className="text-[10px] md:text-[10.5px] text-rose-500 uppercase tracking-widest font-bold font-mono mt-0.5">
                Customize Your Vision
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className={`flex items-center gap-6 font-sans text-xs sm:text-xs font-bold uppercase tracking-wider ${
              isScrolled ? 'text-neutral-600' : 'text-neutral-300'
            }`}>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `transition-colors hover:text-rose-500 py-1.5 focus:outline-none ${
                      isActive ? 'text-rose-500 border-b-2 border-rose-500' : ''
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/industries"
                  className={({ isActive }) =>
                    `transition-colors hover:text-purple-500 py-1.5 focus:outline-none ${
                      isActive ? 'text-purple-500 border-b-2 border-purple-500' : ''
                    }`
                  }
                >
                  Industries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/process"
                  className={({ isActive }) =>
                    `transition-colors hover:text-emerald-500 py-1.5 focus:outline-none ${
                      isActive ? 'text-emerald-500 border-b-2 border-emerald-500' : ''
                    }`
                  }
                >
                  Process
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `transition-colors hover:text-orange-500 py-1.5 focus:outline-none ${
                      isActive ? 'text-orange-500 border-b-2 border-orange-500' : ''
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-2 transform active:scale-95 cursor-pointer shadow-md ${
                isScrolled
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                  : 'bg-white text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                isScrolled
                  ? 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu overlay and slide down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`md:hidden overflow-hidden border-b ${
              isScrolled ? 'bg-white/95 border-neutral-200' : 'bg-neutral-950 border-white/5'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2 text-left">
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-rose-500/10 text-rose-500'
                      : isScrolled
                      ? 'text-neutral-700 hover:bg-neutral-100'
                      : 'text-neutral-300 hover:bg-neutral-900'
                  }`
                }
              >
                👕 Services
              </NavLink>
              <NavLink
                to="/industries"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-purple-500/10 text-purple-500'
                      : isScrolled
                      ? 'text-neutral-700 hover:bg-neutral-100'
                      : 'text-neutral-300 hover:bg-neutral-900'
                  }`
                }
              >
                🏫 Industries
              </NavLink>
              <NavLink
                to="/process"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : isScrolled
                      ? 'text-neutral-700 hover:bg-neutral-100'
                      : 'text-neutral-300 hover:bg-neutral-900'
                  }`
                }
              >
                ⚡ Process
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-500'
                      : isScrolled
                      ? 'text-neutral-700 hover:bg-neutral-100'
                      : 'text-neutral-300 hover:bg-neutral-900'
                  }`
                }
              >
                📞 Contact & Find Us
              </NavLink>

              <div className="pt-4 px-3 border-t border-neutral-200">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 hover:opacity-90 text-white font-extrabold px-4 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-5 h-5 animate-pulse" />
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
