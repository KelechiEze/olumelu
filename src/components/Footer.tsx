import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight,
  Sparkles,
  Globe,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Coins,
  Award
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Story", href: "#about" },
    { label: "Core Pillars", href: "#causes" },
    { label: "Join Network", href: "#join-us" },
  ];

  const otherLinks = [
    { label: "Mentoring Portal", href: "#help" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-0 overflow-hidden font-sans border-t border-zinc-900 select-none">
      
      {/* Background glowing aesthetic light in the background */}
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-t from-[#E31B23]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-12 relative z-10">
        
        {/* Upper tier layout with brand and newsletter input */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-white/5">
          
          {/* Brand logo & Description (6 columns) */}
          <div className="lg:col-span-7 text-left">
            <a href="#" className="flex items-center gap-1.5 focus:outline-none mb-4">
              <span className="text-3xl font-extrabold tracking-tight text-[#E31B23] font-sans">
                Elumelu.
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23] shadow-[0_0_8px_#E31B23]" />
            </a>
            <p className="text-base text-zinc-400 font-sans leading-relaxed font-light max-w-sm mt-3">
              Be the first to hear how robust entrepreneurship is changing the African narrative.
            </p>
          </div>

          {/* Newsletter (5 columns) */}
          <div className="lg:col-span-5 w-full flex flex-col items-start lg:items-end text-left lg:text-right">
            <h4 className="text-lg font-bold tracking-tight text-white font-display">
              The Elumelu Network
            </h4>
            <p className="text-sm text-zinc-400 font-light mt-1.5 mb-5 max-w-xs leading-relaxed">
              Subscribe to gather active updates, grant alerts, and business insights.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm flex items-center gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E31B23]/60 transition-all font-sans"
                />
              </div>
              <button
                type="submit"
                className="p-4 bg-[#E31B23] hover:bg-[#C51118] text-white rounded-full transition-all duration-300 shadow-[0_2px_8px_rgba(227,27,35,0.4)] flex items-center justify-center shrink-0 cursor-pointer hover:scale-105"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={18} className="stroke-[2.5]" />
              </button>
            </form>
            {isSubscribed && (
              <span className="text-xs font-semibold text-[#E31B23] mt-2 block animate-pulse">
                Thanks for subscribing! Check your inbox soon.
              </span>
            )}
          </div>

        </div>

        {/* Lower tier structure mapping exact navigation links rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 text-left">
          
          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold tracking-widest text-[#E31B23] uppercase font-mono">
              Navigation
            </h5>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  {link.label}
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-[1px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Other Links Column */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold tracking-widest text-[#E31B23] uppercase font-mono">
              Portals
            </h5>
            <div className="flex flex-col gap-3">
              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  {link.label}
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-[1px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Connect Column */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold tracking-widest text-[#E31B23] uppercase font-mono">
              Connect
            </h5>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  {link.label}
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-[1px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Column */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold tracking-widest text-[#E31B23] uppercase font-mono">
              Contact Office
            </h5>
            <div className="flex flex-col gap-2.5 text-sm font-light text-zinc-400 font-sans">
              <span className="block font-medium text-white hover:text-[#E31B23] transition-colors duration-200">
                +234 (1) 277 4641
              </span>
              <span className="block hover:text-[#E31B23] transition-colors duration-200">
                info@tonyelumelufoundation.org
              </span>
              <span className="block leading-relaxed">
                Heirs Place, 1 MacGregor Road, Ikoyi, Lagos, Nigeria.
              </span>
            </div>
          </div>

        </div>

        {/* Traditional Copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-zinc-500 font-light text-center md:text-left">
          <span>All copyrights reserved for © Tony Elumelu</span>
          <span>Designed with high precision & 211% accuracy</span>
        </div>

      </div>

      {/* Marquee with ultra-faint texts at the very bottom */}
      <div className="relative border-t border-white/5 py-6 bg-zinc-950 overflow-hidden select-none">
        {/* Soft edge fading overlays */}
        <div className="absolute left-0 inset-y-0 w-20 md:w-36 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 md:w-36 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%]">
          <motion.div
            className="flex gap-12 sm:gap-16 items-center shrink-0 pr-12 sm:pr-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center gap-6 text-zinc-800 text-lg md:text-xl font-extrabold uppercase font-display tracking-widest whitespace-nowrap opacity-25">
                <span>Africapitalism</span>
                <Globe size={18} className="text-[#E31B23] opacity-50 shrink-0" />
                <span>Entrepreneurship</span>
                <Briefcase size={18} className="text-[#E31B23] opacity-50 shrink-0" />
                <span>Economic Independence</span>
                <ShieldCheck size={18} className="text-[#E31B23] opacity-50 shrink-0" />
                <span>Mentorship</span>
                <GraduationCap size={18} className="text-[#E31B23] opacity-50 shrink-0" />
                <span>Grants</span>
                <Coins size={18} className="text-[#E31B23] opacity-50 shrink-0" />
                <span>Leadership</span>
                <Award size={18} className="text-[#E31B23] opacity-50 shrink-0" />
                <span>Transformation</span>
                <Sparkles size={18} className="text-[#E31B23] opacity-50 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </footer>
  );
}
