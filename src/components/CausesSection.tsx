import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const causeImg1 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu6.jpg";
const causeImg2 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu5.jpg";
const causeImg3 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu4.jpg";

export default function CausesSection() {
  const causes = [
    {
      id: "pillar-1",
      tag: "Philanthropy",
      image: causeImg1,
      title: "$100M Commitment: Empowering Young Entrepreneurs",
      raised: "20,000+",
      goal: "$100M Devoted",
      raisedLabel: "Entrepreneurs",
      goalLabel: "Total Funds",
    },
    {
      id: "pillar-2",
      tag: "Economic Philosophy",
      image: causeImg2,
      title: "Africapitalism: Private Sector Driving Transformation",
      raised: "54 Nations",
      goal: "Active Growth",
      raisedLabel: "African Reach",
      goalLabel: "Mission State",
    },
    {
      id: "pillar-3",
      tag: "Infrastructure",
      image: causeImg3,
      title: "Heirs Holdings: Powering & Investing in Africa's Future",
      raised: "Power & Wealth",
      goal: "Long Term",
      raisedLabel: "Key Industries",
      goalLabel: "Strategy",
    },
  ];

  return (
    <section
      id="causes"
      className="relative bg-zinc-950 py-20 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center font-sans text-white border-t border-zinc-900"
    >
      {/* Background radial soft light to resemble Framer grid pattern */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_center,rgba(227,27,35,0.04)_0,transparent_65%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Block exactly matching layout with title on the left, description on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] shadow-[0_0_8px_rgba(227,27,35,0.6)]" />
              <span className="text-sm md:text-base font-bold text-white/90">
                Strategic Philosophy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-white font-display">
              Pillars of Impact
            </h2>
          </div>
          <div className="md:max-w-md lg:max-w-lg text-left md:text-right md:ml-auto">
            <p className="text-zinc-400 font-sans leading-relaxed text-sm md:text-base font-light">
              From robust entrepreneur funding to large-scale infrastructure investments, each pillar works to build a self-reliant Africa.
            </p>
          </div>
        </div>

        {/* 3 Columns Precision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {causes.map((cause, idx) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-[#121212]/90 border border-white/10 rounded-3xl p-5 md:p-6 flex flex-col justify-between hover:border-[#E31B23]/30 hover:bg-[#151515] transition-all duration-300 shadow-2xl h-full"
            >
              <div>
                {/* Img Thumbnail container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 bg-zinc-900">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Title with strict clamping */}
                <h3 className="font-display font-medium text-white text-lg md:text-xl tracking-tight leading-snug line-clamp-2 h-14 group-hover:text-[#E31B23] transition-colors duration-200 mb-6 text-left">
                  {cause.title}
                </h3>
              </div>

              {/* Raised & Goal Details row */}
              <div>
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-white/5">
                  <div className="text-left">
                    <span className="block text-zinc-500 text-[11px] tracking-wide uppercase font-sans">
                      {cause.raisedLabel}
                    </span>
                    <span className="text-lg font-bold text-white mt-1 block">
                      {cause.raised}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-zinc-500 text-[11px] tracking-wide uppercase font-sans">
                      {cause.goalLabel}
                    </span>
                    <span className="text-lg font-bold text-zinc-300 mt-1 block">
                      {cause.goal}
                    </span>
                  </div>
                </div>

                {/* White full size learning pill button */}
                <a
                  href="#help"
                  className="w-full group-hover:bg-[#E31B23] group-hover:text-white bg-white text-zinc-950 font-bold py-3.5 rounded-full inline-flex items-center justify-center gap-1.5 text-sm md:text-base cursor-pointer tracking-wide transition-all duration-300 text-center"
                >
                  Explore Pillar
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
