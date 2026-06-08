import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveCatalog } from './components/InteractiveCatalog';
import { IndustryTabs } from './components/IndustryTabs';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Logo } from './components/Logo';
import { ColorBackground, PageHeader } from './components/ColorBackground';
import { Shirt, Award, BadgeAlert, Sparkles, MapPin, Phone } from 'lucide-react';

// Scroll Restoration script on path modifications
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Beautifully designed Colorful Cards representing Home Features
function HomeFeaturesSection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-rose-600 font-mono text-xs font-black tracking-widest uppercase">The Print Job Specialities</span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-wider uppercase mt-4 mb-4">
          Why Prayagraj Trusts Us
        </h2>
        <p className="text-neutral-500 font-sans text-xs sm:text-sm max-w-lg mx-auto mb-16">
          Combining technical craftsmanship with highly vivid, double-cured print transfers.
        </p>

        {/* Bento style feature block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm relative overflow-hidden text-left hover:border-rose-300 hover:shadow-xl hover:translate-y-[-2px] transition-all group duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-rose-500 to-yellow-400" />
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
              <Shirt className="w-6 h-6" />
            </div>
            <h3 className="text-neutral-900 font-sans font-black text-xl mb-3 pr-2">Premium Wear Fabric</h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              We handpick performance sweat-wicking materials that allow maximum aeration. Perfect for rigorous gym coaches, sports academies, and customized corporate wear.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm relative overflow-hidden text-left hover:border-yellow-400 hover:shadow-xl hover:translate-y-[-2px] transition-all group duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-yellow-400 to-indigo-500" />
            <div className="w-12 h-12 rounded-2xl bg-yellow-50 border border-yellow-105 flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-neutral-900 font-sans font-black text-xl mb-3 pr-2">Swiss Wash-Proof Inks</h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Never worry about fading, peels, or cracks on wash day. Our sublimation dyes and plastisol heat set transfers rely on premium imported pigments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm relative overflow-hidden text-left hover:border-indigo-300 hover:shadow-xl hover:translate-y-[-2px] transition-all group duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-indigo-500 to-cyan-500" />
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-neutral-900 font-sans font-black text-xl mb-3 pr-2">Free In-House Tuning</h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Send us any low-res sketch mockup or logo photo over WhatsApp. Our experienced designers will vector-trace and clean your file completely for free.
            </p>
          </div>

        </div>

        {/* Dynamic explore CTA bar */}
        <div className="mt-16 bg-white border border-neutral-200 p-6 rounded-3xl inline-flex flex-col sm:flex-row items-center gap-6 text-left shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-450 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-mono font-bold text-neutral-600">
              Need a quick custom template? Talk directly with our printing specialists.
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-extrabold font-sans text-xs rounded-full hover:opacity-90 transition-all uppercase tracking-wider text-center w-full sm:w-auto"
          >
            Ask On WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main App Component with routed subpages and robust colorful styles
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased flex flex-col justify-between">
        
        <div>
          {/* Persistent Dynamic Header Nav */}
          <Header />

          {/* Core Routes Manager */}
          <Routes>
            {/* 1. Landing Home Route */}
            <Route
              path="/"
              element={
                <div>
                  {/* Hero Section Banner */}
                  <Hero />

                  {/* Ribbon Feature Ticker Banner with Custom Brand Colors */}
                  <div className="bg-white border-b border-t border-neutral-200 py-5 overflow-hidden select-none relative shadow-inner">
                    <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-y-4 gap-x-8 sm:gap-x-12 justify-center items-center font-mono text-xs text-neutral-500 font-extrabold uppercase tracking-widest text-center">
                      <div className="flex items-center gap-2">
                        <Shirt className="w-4 h-4 text-rose-500" />
                        <span>Premium Fabric Selection</span>
                      </div>
                      <div className="h-4 w-px bg-neutral-250 hidden sm:block" />
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-600" />
                        <span>Swiss Wash-Proof Inks</span>
                      </div>
                      <div className="h-4 w-px bg-neutral-250 hidden sm:block" />
                      <div className="flex items-center gap-2">
                        <BadgeAlert className="w-4 h-4 text-blue-500" />
                        <span>Express Prayagraj Delivery</span>
                      </div>
                      <div className="h-4 w-px bg-neutral-250 hidden sm:block" />
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span>Free Logo Repairing</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights section on Homepage */}
                  <div className="bg-neutral-50">
                    <HomeFeaturesSection />
                  </div>

                  {/* Customer Review desk */}
                  <div className="bg-white py-12 border-t border-b border-neutral-200">
                    <div className="text-center max-w-2xl mx-auto mb-6 px-4">
                      <span className="text-indigo-650 font-mono text-xs font-black tracking-widest uppercase">Verified Client Trust</span>
                      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-neutral-900 tracking-wider uppercase mt-4 mb-3">
                        Customer Love
                      </h2>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                        Read real reviews from schools, gym owners, sports teams, and coaching classrooms around Katra, Kareli, and Civil Lines in Prayagraj.
                      </p>
                    </div>
                    <Testimonials />
                  </div>

                  {/* Trust calling action banner */}
                  <section className="py-20 bg-neutral-50 text-center relative overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-[#E11D48]/5 rounded-full blur-[100px] pointer-events-none" />
                    <h3 className="text-2xl sm:text-4xl font-display uppercase tracking-widest text-neutral-900 mb-4 px-4 leading-none">
                      Tayyar Hain Apne Brand Ko Elevate Karne?
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto mb-10 px-6 leading-relaxed">
                      Talk directly with our experienced design team to trace logos, choose premium active fabrics, and request custom mockups completely for free.
                    </p>
                    <div className="flex justify-center gap-4 flex-col sm:flex-row max-w-xs sm:max-w-none mx-auto px-4">
                      <Link
                        to="/contact"
                        className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full text-xs font-extrabold uppercase transition-all shadow-md tracking-wider"
                      >
                        📞 Contact & Free Quote
                      </Link>
                      <Link
                        to="/services"
                        className="px-8 py-4 bg-white border border-neutral-200 text-neutral-700 font-extrabold rounded-full text-xs uppercase hover:bg-neutral-50 transition-all shadow-sm tracking-wider"
                      >
                        👕 Apparel Collection
                      </Link>
                    </div>
                  </section>
                </div>
              }
            />

            {/* 2. Services Route */}
            <Route
              path="/services"
              element={
                <ColorBackground accentColor="rose">
                  <PageHeader
                    badge="OUR ACTIVE APPAREL DIRECTORY"
                    title="Services Catalog"
                    subtitle="Filter sweat-wicking soccer ensembles, interlock activewear track pants, structured visual caps, and vibrant photo mugs manufactured on demand."
                    colorName="text-rose-600"
                  />
                  <InteractiveCatalog />
                </ColorBackground>
              }
            />

            {/* 3. Industries Route */}
            <Route
              path="/industries"
              element={
                <ColorBackground accentColor="purple">
                  <PageHeader
                    badge="SECTOR SOLUTIONS"
                    title="We Serve Every Sector"
                    subtitle="Select your organizational domain below to discover special custom welcome packages, customized school colors, or team jersey setups."
                    colorName="text-purple-600"
                  />
                  <IndustryTabs />
                </ColorBackground>
              }
            />

            {/* 5. Production Step Process Flow Route */}
            <Route
              path="/process"
              element={
                <ColorBackground accentColor="amber">
                  <PageHeader
                    badge="ORDER MANAGEMENT PIPELINE"
                    title="How It Works"
                    subtitle="Ready to print? We make bulk customizations simple, transparent, and completely worry-free over 4 active stages."
                    colorName="text-amber-600"
                  />
                  <Process />
                </ColorBackground>
              }
            />

            {/* 6. Contact Desk Page Route */}
            <Route
              path="/contact"
              element={
                <ColorBackground accentColor="emerald">
                  <PageHeader
                    badge="GET FREE QUOTE OR VISIT US"
                    title="Contact & Enquiries"
                    subtitle="Have structural questions about fabric feels, color dyes, or express Prayagraj schedules? Send us a message or find our workshop."
                    colorName="text-emerald-600"
                  />
                  <ContactForm />
                </ColorBackground>
              }
            />
          </Routes>
        </div>

        {/* Persistent Dynamic WhatsApp Float Drawer widget */}
        <WhatsAppFloat />

        {/* Polished Colorful Brand Footer */}
        <footer className="bg-[#0B0B0C] border-t border-white/5 pt-16 pb-8 text-neutral-400 font-mono text-xs text-left relative overflow-hidden">
          {/* Decorative Brand Spectrum line at the top of footer */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#E11D48] via-[#FACC15] via-[#F472B6] via-[#10B981] via-[#F97316] to-[#06B6D4] opacity-90" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-8 w-full">
              
              {/* Column 1: Brand Column */}
              <div className="md:col-span-2 space-y-5">
                <div className="flex items-center gap-3">
                  <Logo variant="full" size={175} />
                </div>
                <p className="text-neutral-450 leading-relaxed font-sans text-xs max-w-sm">
                  4+ years of trust in Prayagraj. Delivering wash-proof customized sports jerseys, corporate team apparel, school team kits, and bulk promotional event wear. Delivered fresh inside Kareli & Prayagraj doors.
                </p>
                <div className="flex gap-4 text-[9px] font-black uppercase tracking-wider bg-white/[0.02] border border-white/5 p-3 rounded-2xl max-w-xs text-rose-500 font-mono">
                  <span>⚡ 100% QUALITY SECURED</span>
                  <span>🔥 EXPRESS PRAYAGRAJ DELIVERY</span>
                </div>
              </div>

              {/* Column 2: Index Directory links Container */}
              <div className="space-y-4">
                <h4 className="text-white text-[10px] uppercase font-black tracking-widest mb-4">Nav Directory</h4>
                <ul className="space-y-3 font-bold font-sans text-xs text-left">
                  <li>
                    <Link to="/services" className="hover:text-rose-500 transition-colors">
                      👕 Core Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries" className="hover:text-purple-500 transition-colors">
                      School / Gym Options
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-rose-500 transition-colors font-black text-rose-500">
                      📞 Request Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link to="/process" className="hover:text-emerald-500 transition-colors">
                      ⚡ Print Pipeline
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-orange-500 transition-colors">
                      📞 Workshop Address
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact quick links info */}
              <div className="space-y-4">
                <h4 className="text-white text-[10px] uppercase font-black tracking-widest mb-4">Prayagraj Hub</h4>
                <ul className="space-y-4 text-neutral-450 font-sans text-xs text-left">
                  <li className="flex gap-2 items-start">
                    <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>Kareli Main Market Area, Prayagraj, UP (Opposite Bank of Baroda ATM)</span>
                  </li>
                  <li className="flex gap-2 items-start font-mono font-bold">
                    <Phone className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>+91 80762 11044</span>
                  </li>
                  <li className="flex gap-2 items-start font-mono font-bold text-neutral-500">
                    <Phone className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
                    <span>+91 96960 85673</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-[10px] text-neutral-500 font-bold">
              <div>
                © 2026 The Print Job. All rights reserved. &nbsp;|&nbsp; Designed for premium corporate printing in Kareli, Prayagraj.
              </div>
              <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent font-black">
                Made with ❤️ in Prayagraj
              </div>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}
