import { motion } from "motion/react";
import { HandHelping, Award, Sparkles, HeartHandshake } from "lucide-react";

const helpImg1 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu3.jpg";
const helpImg2 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu1-1.jpg";
const helpImg3 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu6.jpg";

export default function HelpSection() {
  const cards = [
    {
      id: "help-1",
      image: helpImg1,
      icon: Award,
      title: "A Legacy of Honor",
      desc: "Recognized among TIME 100 most influential pioneers, elevating Africa's voice globally.",
      gradient: "from-[#E31B23]/90 via-red-950/85 to-zinc-950/95",
    },
    {
      id: "help-2",
      image: helpImg2,
      icon: HandHelping,
      title: "The Elumelu Way",
      desc: "Delivering structural seed funding and mentorship to cultivate a massive startup ecosystem.",
      gradient: "from-[#E31B23]/95 via-stone-900/85 to-zinc-950/95",
    },
    {
      id: "help-3",
      image: helpImg3,
      icon: HeartHandshake,
      title: "Africapitalism Vision",
      desc: "Forging dynamic private-public partnerships to catalyze long-term infrastructure and trade.",
      gradient: "from-[#E31B23]/90 via-zinc-900/85 to-zinc-950/95",
    },
  ];

  return (
    <section
      id="help"
      className="relative bg-[#F3F4F6] py-20 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center font-sans text-zinc-900 border-t border-zinc-200"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Block exactly matching layout with title on the left, description on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] shadow-[0_0_8px_rgba(227,27,35,0.6)] animate-pulse" />
              <span className="text-sm md:text-base font-bold text-zinc-900">
                Strategic Reach
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-zinc-950 font-display">
              Leadership & Advocacy
            </h2>
          </div>
          <div className="md:max-w-md lg:max-w-lg text-left md:text-right md:ml-auto">
            <p className="text-zinc-600 font-sans leading-relaxed text-sm md:text-base font-light">
              Fostering entrepreneurship, driving critical policy revisions, and constructing deep, resilient business networks to transform local societies.
            </p>
          </div>
        </div>

        {/* Horizontal scroll / clean responsive bento styled grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[2rem] aspect-[1.1] md:aspect-[1.15] flex flex-col justify-end p-6 md:p-8 bg-zinc-900 border border-zinc-200 shadow-xl cursor-default"
              >
                {/* Visual Image Background */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark rich organic colorized mask gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-opacity duration-350" />
                
                {/* Additional color tint on hover for sleek 211% premium design feel */}
                <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Content Overlay */}
                <div className="relative z-20 text-left w-full flex flex-col items-start">
                  
                  {/* Floating Action Logo/Icon */}
                  <div className="mb-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white group-hover:bg-[#E31B23] group-hover:border-[#E31B23] group-hover:scale-110 transition-all duration-300 shadow-md">
                    <IconComponent size={20} className="stroke-[2.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight font-display">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 font-sans font-light mt-2 leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-white">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
