import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Globe, Sparkles, Briefcase, Award, GraduationCap, Users } from "lucide-react";

const slides = [
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu1-1.jpg",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu6.jpg",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu5.jpg"
];

interface HeroSectionProps {
  onLearnMoreClick: () => void;
}

export default function HeroSection({ onLearnMoreClick }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto changing slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: "About Journey", href: "#about" },
    { label: "Our Philosophy", href: "#causes" },
    { label: "Core Pillars", href: "#help" },
    { label: "Impact", href: "#impact" },
    { label: "Inspiration", href: "#testimonials" },
    { label: "Join Movement", href: "#join-us" },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-zinc-950 text-white font-sans">
      
      {/* Background Slides with premium Sliding Left Framer Motion transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ x: "100%", filter: "brightness(0.7) contrast(1.05)" }}
            animate={{ x: "0%", filter: "brightness(0.55) contrast(1.0)" }}
            exit={{ x: "-100%", filter: "brightness(0.4) contrast(0.95)" }}
            transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide]}
              alt="Tony Elumelu visionary legacy header backdrop"
              className="w-full h-full object-cover object-center scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Absolute dark vignette/gradients representing Framer screenshot depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Floating Header Column - Desktop Glassmorphism Pill */}
      <header className="relative z-30 w-full pt-6 px-4 md:px-8 max-w-7xl mx-auto flex justify-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl glass-blur px-4 md:px-7 py-3 rounded-full flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 focus:outline-none">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight font-sans transition-all duration-300">
              ELUMELU<span className="text-[#E31B23]">.</span>
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23] shadow-[0_0_8px_#E31B23]" />
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-white/75 hover:text-white transition-colors duration-200 relative group py-1"
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    const el = document.getElementById(link.href.substring(1));
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E31B23] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Call to Action - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="#join-us"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#E31B23] hover:bg-[#C51118] text-white px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 button-glow text-center cursor-pointer"
            >
              Support TEF
            </a>
          </div>

          {/* Burger menu button - Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white/90 hover:text-white focus:outline-none focus:ring-1 focus:ring-white/20 z-40"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>

        {/* Mobile Navigation Dropdown Overlay menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-4 right-4 z-40 p-6 rounded-3xl bg-zinc-950/95 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-6 md:hidden text-left"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        const el = document.getElementById(link.href.substring(1));
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#join-us"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  e.preventDefault();
                  document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-[#E31B23] text-center hover:bg-[#C51118] text-white py-3.5 rounded-2xl text-base font-semibold tracking-wide transition-all duration-300 shadow-[0_4px_12px_rgba(227,27,35,0.3)] block"
              >
                Support TEF
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sleek Vertical Marquee - Floating Premium Ticker Tape moved closer to the border of the left, using Lucide React icons */}
      <div 
        className="absolute left-1 md:left-2 lg:left-3 xl:left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center w-52 h-[380px] overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Soft edge fade overlay effects for perfect high-end seamless blending */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/85 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

        {/* Center vertical guide line */}
        <div className="absolute left-[26px] top-y-0 h-full w-[1px] bg-white/10 border-dashed border-r border-white/5 pointer-events-none" />

        {/* Vertical Moving Track */}
        <motion.div
          className="flex flex-col gap-4 py-3"
          animate={{ y: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
        >
          {[
            { tag: "UBA GROUP", label: "Chairman & Visionary", icon: Award },
            { tag: "TEF FOUNDER", label: "20,000+ Entrepreneurs", icon: Users },
            { tag: "AFRICAPITALISM", label: "Private Sector Growth", icon: Globe },
            { tag: "HEIRS HOLDINGS", label: "Strategic Investments", icon: Briefcase },
            { tag: "MENTORSHIP", label: "Empowering Youth Leads", icon: GraduationCap },
            { tag: "HONORED", label: "TIME 100 Influencer", icon: Sparkles },
            { tag: "UBA GROUP", label: "Chairman & Visionary", icon: Award },
            { tag: "TEF FOUNDER", label: "20,000+ Entrepreneurs", icon: Users },
            { tag: "AFRICAPITALISM", label: "Private Sector Growth", icon: Globe },
            { tag: "HEIRS HOLDINGS", label: "Strategic Investments", icon: Briefcase },
            { tag: "MENTORSHIP", label: "Empowering Youth Leads", icon: GraduationCap },
            { tag: "HONORED", label: "TIME 100 Influencer", icon: Sparkles },
          ].map((item, i) => {
            const IconEl = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#0a0a0af0] px-3 py-2 rounded-full border border-white/10 shadow-xl w-48 backdrop-blur hover:border-[#E31B23]/40 transition-colors duration-300"
              >
                {/* Floating icon round badge */}
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-[#E31B23] shrink-0 shadow-[0_0_8px_rgba(227,27,35,0.25)]">
                  <IconEl size={13} className="stroke-[2.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold tracking-wider text-[#E31B23] font-mono leading-none">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-white/95 leading-tight mt-0.5 font-sans whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Main Hero Content Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 lg:pl-64 xl:pl-72 pt-32 pb-20 md:py-36 flex flex-col justify-end flex-grow">
        <div className="max-w-2xl text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 flex items-center gap-2"
          >
            <span className="text-sm md:text-base font-bold text-[#E31B23] tracking-wide font-sans md:uppercase">
              The Legacy of Tony O. Elumelu, CFR
            </span>
          </motion.div>

          {/* Heading with 211% precise sizing and display font */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.035em] leading-[0.95] text-white font-display uppercase"
          >
            EMPOWER. ENERGIZE.
            <span className="block mt-1">TRANSFORM.</span>
          </motion.h2>

          {/* Subheading / Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-base md:text-lg lg:text-xl text-zinc-300 font-sans leading-relaxed font-light max-w-lg"
          >
            Your support powers life-changing entrepreneurial initiatives, creating jobs and nurturing a self-reliant Africa through democratic wealth generation.
          </motion.p>

          {/* CTA Buttons - Matching exact styles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4 md:gap-5"
          >
            {/* Donate Now Button with arrow */}
            <a 
              href="#join-us"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#E31B23] hover:bg-[#C51118] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-semibold tracking-wide transition-all duration-300 button-glow cursor-pointer"
            >
              Support the Vision
              <ArrowRight size={18} className="transition-transform duration-300 hover:translate-x-1" />
            </a>

            {/* Learn About Us Button - White BG, Dark text as in screenshot */}
            <button
              onClick={onLearnMoreClick}
              className="px-6 md:px-8 py-3.5 md:py-4 bg-white hover:bg-zinc-100 text-zinc-950 rounded-full text-sm md:text-base font-semibold tracking-wide transition-colors duration-300 cursor-pointer shadow-md"
            >
              Explore His Journey
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating brand badge - bottom-right as seen in screenshot */}
      <div className="absolute bottom-6 right-6 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md shadow-lg border border-zinc-200 select-none text-zinc-900"
        >
          <svg className="w-4 h-4 fill-[#E31B23]" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <span className="text-[11px] font-bold tracking-tight font-sans uppercase">
            TEF Global Initiative
          </span>
        </motion.div>
      </div>
    </section>
  );
}
