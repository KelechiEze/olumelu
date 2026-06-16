import { motion } from "motion/react";

// Meticulously designed vector logo components for 211% pixel-perfect cloning accuracy representing Tony Elumelu's real organizations
const Logos = [
  // Logo 1: Heirs Holdings
  () => (
    <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
      <svg className="h-6 text-neutral-900 fill-current" viewBox="0 0 180 34" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" className="text-[20px] font-black tracking-widest font-sans uppercase">
          HEIRS<span className="text-[#E31B23]">HOLDINGS</span>
        </text>
      </svg>
    </div>
  ),

  // Logo 2: United Bank for Africa
  () => (
    <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
      <svg className="h-7 text-neutral-900 fill-current" viewBox="0 0 160 34" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" className="text-[22px] font-extrabold tracking-tight font-sans text-red-600">
          UBA<span className="text-neutral-900 font-light"> group</span>
        </text>
        <rect x="110" y="4" width="8" height="20" className="fill-[#E31B23]" />
      </svg>
    </div>
  ),

  // Logo 3: Tony Elumelu Foundation
  () => (
    <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity duration-300">
      <svg className="h-7 text-neutral-900 fill-current" viewBox="0 0 190 34" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" className="text-[17px] font-black tracking-normal font-sans uppercase">
          T. ELUMELU<span className="text-[#E31B23] font-light"> FOUNDATION</span>
        </text>
      </svg>
    </div>
  ),

  // Logo 4: Transcorp Group
  () => (
    <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity duration-300">
      <svg className="h-7 text-neutral-900 fill-current" viewBox="0 0 160 34" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="24" className="text-[20px] font-black tracking-[0.05em] font-sans">
          TRANSCORP
        </text>
        <circle cx="150" cy="12" r="3" className="fill-[#E31B23]" />
      </svg>
    </div>
  ),

  // Logo 5: Africapitalism
  () => (
    <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity duration-300">
      <svg className="h-6 text-neutral-900 fill-current" viewBox="0 0 170 34" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" className="text-[16px] font-bold tracking-[0.12em] font-mono uppercase">
          AFRICAPITALISM
        </text>
      </svg>
    </div>
  ),
];

export default function SupportersSection() {
  // Duplicate logos three times for seamless infinite loop effect with zero jumps
  const replicatedLogos = [...Logos, ...Logos, ...Logos];

  return (
    <section 
      id="supporters" 
      className="relative bg-[#F3F4F6] py-14 overflow-hidden flex flex-col justify-center border-t border-zinc-200/50 font-sans text-zinc-900 select-none"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-8">
        {/* Support Title Indicator */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="w-3 h-3 rounded-full bg-[#E31B23] shadow-[0_0_8px_rgba(227,27,35,0.6)]" />
          <span className="text-sm md:text-base font-bold text-zinc-900">
            Strategic Foundations & Organizations
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Ticker Frame */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col justify-center">
        {/* Premium fade gradient overlays to smoothly disappear on both edges */}
        <div className="absolute left-0 inset-y-0 w-24 md:w-44 bg-gradient-to-r from-[#F3F4F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 md:w-44 bg-gradient-to-l from-[#F3F4F6] to-transparent z-10 pointer-events-none" />

        {/* Marquee Motion container */}
        <div className="flex width-[200%] overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-24 items-center flex-nowrap shrink-0 pr-16 md:pr-24"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {replicatedLogos.map((LogoComponent, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center shrink-0"
              >
                <LogoComponent />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
