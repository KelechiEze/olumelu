import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const aboutImg = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu2.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#F3F4F6] py-20 md:py-28 lg:py-36 overflow-hidden flex items-center justify-center font-sans text-zinc-900"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Tag / Indicator with Red Dot */}
            <div className="flex items-center gap-2.5 mb-5 md:mb-6 select-none">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] shadow-[0_0_8px_rgba(227,27,35,0.6)] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-zinc-900">
                His Story & Journey
              </span>
            </div>

            {/* Heading with Display Typography */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-zinc-950 font-display">
              Unlocking African Entrepreneurship
            </h2>

            {/* Paragraph with copy requested explicitly */}
            <p className="mt-6 text-zinc-600 font-sans leading-relaxed text-base md:text-lg font-light max-w-lg">
              Tony O. Elumelu, CFR, is one of Africa’s most influential business leaders. As Champion of Africapitalism, he has built world-class companies and pioneered the largest philanthropic initiative for young African innovators.
            </p>

            {/* Outline pill button */}
            <div className="mt-8">
              <a
                href="#causes"
                className="group inline-flex items-center gap-3.5 border border-zinc-900 bg-transparent hover:bg-[#E31B23] hover:border-[#E31B23] hover:text-white px-7 md:px-8 py-3.5 rounded-full text-zinc-900 text-sm md:text-base font-semibold tracking-wide transition-all duration-300 cursor-pointer"
              >
                Explore His Philosophy
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Block - Rounded Image Grid Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-zinc-200 bg-zinc-200">
              <img
                src={aboutImg}
                alt="Tony Elumelu engaging in discussion"
                className="w-full h-auto object-cover object-center max-h-[500px]"
                referrerPolicy="no-referrer"
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem] md:rounded-[2.5rem] pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
