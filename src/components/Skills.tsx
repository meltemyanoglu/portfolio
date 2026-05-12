"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Mobile",
    emoji: "📱",
    color: "bg-cobalt text-cream border-cobalt",
    tagColor: "bg-cobalt/10 border-cobalt text-cobalt",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    category: "Web",
    emoji: "🌐",
    color: "bg-hot-pink text-cream border-hot-pink",
    tagColor: "bg-hot-pink/10 border-hot-pink text-hot-pink",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "AI / ML",
    emoji: "🧠",
    color: "bg-sunny text-ink border-sunny",
    tagColor: "bg-sunny/20 border-sunny/60 text-ink",
    skills: [
      { name: "Python", level: 88 },
      { name: "PyTorch", level: 75 },
      { name: "AI Integration", level: 82 },
    ],
  },
  {
    category: "Design",
    emoji: "✏️",
    color: "bg-neon-lime text-ink border-neon-lime",
    tagColor: "bg-neon-lime/20 border-neon-lime text-ink",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Motion Design", level: 65 },
    ],
  },
];

const allTags = [
  { name: "Flutter", color: "bg-cobalt text-cream" },
  { name: "Dart", color: "bg-cobalt/80 text-cream" },
  { name: "React", color: "bg-hot-pink text-cream" },
  { name: "Next.js", color: "bg-ink text-cream" },
  { name: "TypeScript", color: "bg-cobalt/60 text-cream" },
  { name: "Python", color: "bg-neon-lime text-ink" },
  { name: "PyTorch", color: "bg-sunny text-ink" },
  { name: "Firebase", color: "bg-hot-pink/70 text-cream" },
  { name: "Tailwind CSS", color: "bg-cobalt/40 text-cream" },
  { name: "Framer Motion", color: "bg-hot-pink/40 text-ink" },
  { name: "Git / GitHub", color: "bg-ink text-cream" },
  { name: "Figma", color: "bg-neon-lime/70 text-ink" },
  { name: "VAE / EnCodec", color: "bg-sunny/80 text-ink" },
  { name: "REST APIs", color: "bg-sage text-cream" },
  { name: "FastAPI", color: "bg-neon-lime/50 text-ink" },
  { name: "UI/UX", color: "bg-hot-pink/50 text-ink" },
];

const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0", "-rotate-1", "rotate-1"];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="bg-cream border-t-2 border-ink py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-3 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-ink/50" />
            Skills & Tools
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black uppercase leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 8rem)", letterSpacing: "-0.03em" }}
            >
              MY{" "}
              <span
                style={{
                  WebkitTextStroke: "2px #0A0A0A",
                  color: "transparent",
                }}
              >
                TOOLKIT
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Skill group cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="border-2 border-ink shadow-hard hover:shadow-hard-lg hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-cream overflow-hidden"
            >
              {/* Header */}
              <div className={`${group.color} border-b-2 border-ink px-4 py-3 flex items-center gap-2`}>
                <span className="text-xl">{group.emoji}</span>
                <span className="font-display font-black text-sm uppercase tracking-widest">
                  {group.category}
                </span>
              </div>

              {/* Skills with bars */}
              <div className="px-4 py-4 flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-sans font-semibold text-xs text-ink">{skill.name}</span>
                      <span className="font-mono text-xs text-ink/40">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-ink/10 border border-ink/20">
                      <motion.div
                        className={`h-full ${group.color.split(" ")[0]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: si * 0.1 + 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t-2 border-ink pt-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ink/50" />
            Everything in the stack
          </p>
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag, i) => (
              <motion.span
                key={tag.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -3 }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.3,
                }}
                viewport={{ once: true }}
                className={`${tag.color} ${rotations[i % rotations.length]} px-3 py-1.5 border-2 border-ink font-bold text-xs uppercase tracking-wide shadow-hard cursor-default hover:shadow-hard-lg transition-shadow`}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
