"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const facts = [
  { label: "Degree", value: "Computer Engineering" },
  { label: "Focus",  value: "AI + Mobile + Web" },
  { label: "Based",  value: "Padua" },
  { label: "Status", value: "Open to Work ✦" },
];



/* ─── Ana bölüm ───────────────────────────────────────────────────────────── */
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const tickerItems = [
    "Computer Engineering", "AI Research", "Mobile Development",
    "Web Design", "Creative Technology", "Machine Learning", "Flutter", "Next.js",
  ];

  return (
    <section id="about" className="relative bg-ink text-cream overflow-hidden py-20 md:py-28">
      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20"
      >
        {/* Etiket */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-cream/40 mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-cream/40" />
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Sol: fact grid + stats + currently */}
          <div className="flex flex-col gap-8">

            {/* Fact grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="border border-cream/20 p-4 hover:border-neon-lime transition-colors duration-200"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-cream/40 mb-1">{f.label}</p>
                  <p className="font-display font-bold text-sm text-cream">{f.value}</p>
                </div>
              ))}
            </motion.div>


          </div>

          {/* Sağ: bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black uppercase leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.03em" }}
              >
                HELLO, I&apos;M{" "}
                <span className="text-hot-pink">MELTEM.</span>
              </motion.h2>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed text-cream/80">
              I&apos;m a computer engineering graduate who sits at the crossroads of{" "}
              <span className="text-neon-lime font-semibold">artificial intelligence</span>,{" "}
              <span className="text-hot-pink font-semibold">mobile development</span>, and{" "}
              <span className="text-sunny font-semibold">visual design</span>. I believe the best
              products live where technical depth meets aesthetic intention.
            </p>

            <p className="font-sans text-sm md:text-base leading-relaxed text-cream/60">
              My thesis explored emotionally conditioned music generation using deep learning —
              training VAE models on audio tokens to map mood coordinates to soundscapes. Beyond
              research, I build Flutter apps, Next.js experiences, and whatever sits at the
              interesting edge of &ldquo;can I make this?&rdquo;
            </p>

            <p className="font-sans text-sm md:text-base leading-relaxed text-cream/60">
              When I&apos;m not shipping code, I&apos;m usually exploring editorial design,
              obsessing over type, or hunting for the intersection where technology becomes art.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-neon-lime text-ink font-bold uppercase tracking-widest text-sm border-2 border-neon-lime shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200"
              >
                Work Together
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-transparent text-cream font-bold uppercase tracking-widest text-sm border-2 border-cream/40 hover:border-cream hover:bg-cream/10 transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-20 border-t border-cream/10 pt-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-6 font-display font-bold text-xs uppercase tracking-widest text-cream/30">
              {tickerItems.map((item, j) => (
                <span key={j} className="flex items-center gap-6">
                  <span>{item}</span>
                  <span className="text-hot-pink">★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
