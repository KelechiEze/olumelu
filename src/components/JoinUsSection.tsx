import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const bentoImgLeft = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu1-1.jpg";
const bentoImgTopRight1 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu5.jpg";
const bentoImgTopRight2 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu3.jpg";

export default function JoinUsSection() {
  return (
    <section
      id="join-us"
      className="relative bg-[#F3F4F6] py-16 md:py-24 lg:py-28 overflow-hidden flex items-center justify-center font-sans text-zinc-900 border-t border-zinc-200"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Responsive dual-column collage bento grid matching screenshot precisely */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column Box Grid - "Reshaping the future" (Spans 6 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative overflow-hidden rounded-[2.5rem] bg-zinc-900 aspect-[1.1] sm:aspect-square md:aspect-[1.1] lg:aspect-auto flex flex-col justify-end p-8 md:p-12 shadow-2xl border border-zinc-200"
          >
            {/* Background image covering card */}
            <img
              src={bentoImgLeft}
              alt="Tony Elumelu visionary leadership"
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.01] hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Dense smooth dark vignette mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

            {/* Typography block matching screenshot */}
            <div className="relative z-10 text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                Reshaping the future
                <span className="block text-[#E31B23] mt-1.5 font-bold">Through Bold Action.</span>
              </h3>
            </div>
          </motion.div>

          {/* Right Column Box Grid - Split Container (Spans 6 columns) */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8 justify-between">
            
            {/* Top Row - Two side by side visual accent photos */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Photo 1: Speech / engagement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square sm:aspect-[1.25] lg:aspect-square overflow-hidden rounded-3xl md:rounded-[2rem] bg-zinc-800 shadow-xl border border-zinc-200"
              >
                <img
                  src={bentoImgTopRight1}
                  alt="Tony Elumelu speaking"
                  className="w-full h-full object-cover object-center scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300" />
              </motion.div>

              {/* Photo 2: Climber at sunrise sunset */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative aspect-square sm:aspect-[1.25] lg:aspect-square overflow-hidden rounded-3xl md:rounded-[2rem] bg-zinc-800 shadow-xl border border-zinc-200"
              >
                <img
                  src={bentoImgTopRight2}
                  alt="Tony Elumelu global honors"
                  className="w-full h-full object-cover object-center scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300" />
              </motion.div>

            </div>

            {/* Bottom Row - Complete dark counter metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-zinc-900 flex flex-col justify-between items-stretch text-left flex-grow"
            >
              <div>
                {/* Title Copy */}
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white/95 leading-snug font-display">
                  Join the largest movement of African entrepreneurs transforming their communities.
                </h4>

                {/* Big Metric numbers in Red */}
                <div className="mt-6 md:mt-8 flex flex-col">
                  <span className="text-5xl sm:text-6xl md:text-[4rem] font-black tracking-tighter text-[#E31B23] leading-none font-display">
                    1.5 Million+
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide mt-1.5 font-sans">
                    Applicants on the TEFConnect platform
                  </span>
                </div>
              </div>

              {/* Full size bright red actionable button */}
              <div className="mt-8 md:mt-10">
                <a
                  href="#footer"
                  className="w-full bg-[#E31B23] hover:bg-[#C51118] text-white font-bold py-4.5 px-6 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer tracking-wider button-glow transition-all duration-300 shadow-[0_5px_15px_rgba(227,27,35,0.35)] text-center"
                >
                  Apply & Support the Legacy
                  <ArrowRight size={18} className="transition-transform duration-300 hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
