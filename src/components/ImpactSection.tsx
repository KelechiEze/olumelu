import { motion } from "motion/react";

const impactImg1 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu6.jpg";
const impactImg2 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu5.jpg";
const impactImg3 = "https://kelechieze.wordpress.com/wp-content/uploads/2026/06/mrelu4.jpg";

export default function ImpactSection() {
  const impacts = [
    {
      id: "impact-1",
      metric: "20,000+",
      title: "Startups Direct Funded",
      desc: "Nurturing outstanding talent across all 54 African countries.",
      image: impactImg1,
    },
    {
      id: "impact-2",
      metric: "$100M+",
      title: "Catalytic Capital Disbursed",
      desc: "Giving $5,000 non-refundable grants direct to young founders.",
      image: impactImg2,
    },
    {
      id: "impact-3",
      metric: "400,000+",
      title: "Sustainable Jobs Created",
      desc: "Lifting communities, creating income, and driving local trade.",
      image: impactImg3,
    },
  ];

  return (
    <section
      id="impact"
      className="relative bg-[#F3F4F6] py-20 md:py-28 lg:py-32 overflow-hidden flex items-center justify-center font-sans text-zinc-900 border-t border-zinc-200"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Block exactly matching responsive layout with title on the left, description on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] shadow-[0_0_8px_rgba(227,27,35,0.6)]" />
              <span className="text-sm md:text-base font-bold text-zinc-900">
                Our Scaled Impact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-zinc-950 font-display uppercase">
              Shaping a New Africa
            </h2>
          </div>
          <div className="md:max-w-md lg:max-w-lg text-left md:text-right md:ml-auto">
            <p className="text-zinc-600 font-sans leading-relaxed text-sm md:text-base font-light">
              Fostering entrepreneurship and providing access to mentoring, training, and capital to catalyze immense development across the continent.
            </p>
          </div>
        </div>

        {/* 3 Columns Precision Overlay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {impacts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-3xl aspect-[1.3] md:aspect-[1.4] flex flex-col justify-end p-6 md:p-8 select-none bg-zinc-900 border border-zinc-200 shadow-xl"
            >
              {/* Card Image element covering container */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Absolute dark overlay gradient (custom fine-tuned values) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 transition-opacity duration-300 group-hover:via-black/60" />

              {/* Text content absolute over image overlay */}
              <div className="relative z-10 text-left">
                {/* Metric Big visual indicator */}
                <span className="text-5xl md:text-[3.50rem] font-extrabold tracking-[-0.035em] text-white font-display block leading-none">
                  {item.metric}
                </span>

                {/* Subtitle / Topic banner */}
                <h3 className="text-lg md:text-xl font-bold text-white mt-1.5 leading-tight">
                  {item.title}
                </h3>

                {/* Desc with nice organic font weight */}
                <p className="text-xs md:text-sm text-zinc-300 font-light mt-1.5 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
