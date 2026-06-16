import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonialBg = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu6.jpg";

const testimonials = [
  {
    id: "t-1",
    quote: "The seed capital of $5,000 from the Tony Elumelu Foundation was the exact catalytic start that transformed our local agrotech dream into a major supplier feeding families.",
    author: "Ebele Onyekwelu, TEF Alumni & Agrotech lead",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "t-2",
    quote: "Africapitalism is not just an investment theory; it is a long-term economic model that mandates the private sector to develop Africa through profitable, social growth.",
    author: "Tony O. Elumelu, CFR",
    avatar: "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu1-1.jpg",
  },
  {
    id: "t-3",
    quote: "The programmatic training and mentorship provided by TEF redefined our operations. Today we employ 45 young developers in digital finance systems.",
    author: "Abdi Farah, Fintech Innovator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      className="relative bg-[#F3F4F6] py-16 md:py-24 lg:py-28 overflow-hidden flex items-center justify-center font-sans text-zinc-900 border-t border-zinc-200"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Block exactly matching responsive layout with title on the left, description on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-in">
          <div className="text-left">
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] shadow-[0_0_8px_rgba(227,27,35,0.6)] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-zinc-900">
                Inspirational Stories & Philosophy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-zinc-950 font-display">
              Voices of Change
            </h2>
          </div>
          <div className="md:max-w-md lg:max-w-lg text-left md:text-right md:ml-auto">
            <p className="text-zinc-600 font-sans leading-relaxed text-sm md:text-base font-light">
              Listen to the young people building sustainable industries and our guiding beliefs in a prosperous continent.
            </p>
          </div>
        </div>

        {/* Large Testimonial Display Area */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl aspect-[1.8] md:aspect-[2.2] w-full min-h-[380px] md:min-h-[460px] flex flex-col justify-end p-6 sm:p-10 md:p-16 select-none border border-zinc-800">
          
          {/* Static Background Image with smooth transitions constraint */}
          <div className="absolute inset-0 z-0">
            <img
              src={testimonialBg}
              alt="Joyful playing kids testimonial backdrop"
              className="w-full h-full object-cover object-center scale-[1.01]"
              referrerPolicy="no-referrer"
            />
            {/* Rich gradient layers for 211% supreme readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Interactive animated quote container */}
          <div className="relative z-10 text-left max-w-3xl flex-grow flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4 text-white"
              >
                {/* Quote details */}
                <h3 className="font-display font-medium text-lg sm:text-xl md:text-2xl lg:text-[1.85rem] leading-snug tracking-tight text-white/95">
                  "{testimonials[activeIndex].quote}"
                </h3>
                
                {/* Author attribution with red tag */}
                <span className="font-sans font-semibold text-sm sm:text-base text-zinc-400 mt-2 block">
                  — <span className="text-white font-bold">{testimonials[activeIndex].author}</span>
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Avatars Picker Block on the bottom-left */}
            <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-12">
              {testimonials.map((person, idx) => (
                <button
                  key={person.id}
                  onClick={() => setActiveIndex(idx)}
                  className="relative focus:outline-none transition-transform duration-300 hover:scale-110"
                  aria-label={`View testimonial from ${person.author}`}
                >
                  <img
                    src={person.avatar}
                    alt={person.author}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover transition-all duration-300 ${
                      activeIndex === idx
                        ? "ring-4 ring-[#E31B23] ring-offset-2 ring-offset-zinc-950 scale-105 filter grayscale-0"
                        : "ring-2 ring-white/10 opacity-60 hover:opacity-90 filter grayscale"
                    }`}
                  />
                  {activeIndex === idx && (
                    <motion.span
                      layoutId="avatar-glow"
                      className="absolute -inset-1 rounded-full bg-[#E31B23]/20 -z-10 animate-pulse pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
