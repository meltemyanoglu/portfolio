"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const floatingShapes = [
  { color: "bg-hot-pink", size: "w-16 h-16", top: "10%", left: "5%", delay: 0, shape: "rounded-full" },
  { color: "bg-neon-lime", size: "w-10 h-10", top: "20%", right: "8%", delay: 0.3, shape: "rounded-none rotate-45" },
  { color: "bg-sunny", size: "w-20 h-20", top: "60%", right: "5%", delay: 0.6, shape: "rounded-full" },
  { color: "bg-cobalt", size: "w-8 h-8", top: "40%", left: "3%", delay: 0.9, shape: "rounded-none" },
  { color: "bg-hot-pink", size: "w-6 h-6", top: "75%", left: "12%", delay: 1.2, shape: "rounded-none rotate-12" },
  { color: "bg-neon-lime", size: "w-12 h-12", top: "15%", left: "35%", delay: 0.15, shape: "rounded-full" },
];

const sticker = (text: string, color: string, rotate: string) => (
  <span
    className={`inline-block px-3 py-1 ${color} border-2 border-ink font-bold text-xs uppercase tracking-widest ${rotate} shadow-hard`}
  >
    {text}
  </span>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen bg-cream flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Floating background shapes */}
      {floatingShapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.size} ${s.color} ${s.shape} opacity-80 animate-float`}
          style={{
            top: s.top,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? s.right : undefined,
            animationDelay: `${s.delay}s`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.6, delay: s.delay + 0.4 }}
        />
      ))}

      {/* Animated blob background */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-blush/40 animate-blob-slow -z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-neon-lime/30 animate-blob -z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-ink" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
            Portfolio 2025
          </span>
          <span className="w-8 h-px bg-ink" />
        </motion.div>

        {/* Main name — editorial oversized */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-black leading-none uppercase text-ink"
            style={{ fontSize: "clamp(4rem, 12vw, 14rem)", letterSpacing: "-0.04em" }}
          >
            MELTEM
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-black leading-none uppercase"
            style={{
              fontSize: "clamp(4rem, 12vw, 14rem)",
              letterSpacing: "-0.04em",
              WebkitTextStroke: "2.5px #0A0A0A",
              color: "transparent",
            }}
          >
            YANOGLU
          </motion.h1>
        </div>

        {/* Role + stickers row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-3 max-w-md">
            <p className="font-display font-semibold text-xl md:text-2xl text-ink leading-snug">
              Creative Developer{" "}
              <span className="bg-hot-pink text-cream px-2 py-0.5 -rotate-1 inline-block">
                AI
              </span>{" "}
              &{" "}
              <span className="bg-neon-lime text-ink px-2 py-0.5 rotate-1 inline-block">
                Flutter
              </span>{" "}
              Builder
            </p>
            <p className="font-sans text-sm md:text-base text-ink/70 leading-relaxed max-w-sm">
              I craft intelligent apps & bold digital experiences — blending computer
              engineering, machine learning, and design sensibility.
            </p>
          </div>

          {/* Sticker cluster */}
          <div className="flex flex-wrap gap-3 max-w-xs">
            {sticker("AI Dev", "bg-sunny", "-rotate-2")}
            {sticker("Flutter", "bg-cobalt text-cream", "rotate-1")}
            {sticker("Next.js", "bg-hot-pink text-cream", "-rotate-1")}
            {sticker("PyTorch", "bg-neon-lime", "rotate-2")}
            {sticker("Computer Vision", "bg-sunny", "rotate-1")}
            {sticker("Generative AI", "bg-cobalt text-cream", "rotate-2")}
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-between mt-12"
        >
          <p className="font-mono text-xs text-ink/40 uppercase tracking-widest">
            Based in Turkey ✦ Open to Remote
          </p>
          <a
            href="#works"
            className="group flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-ink hover:text-hot-pink transition-colors"
          >
            <span>See my work</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} strokeWidth={2.5} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-ink text-cream overflow-hidden border-t-2 border-ink">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 font-display font-bold text-xs uppercase tracking-widest px-6">
              <span>Creative Developer</span>
              <span className="text-hot-pink">✦</span>
              <span>AI Integration</span>
              <span className="text-neon-lime">✦</span>
              <span>Flutter Apps</span>
              <span className="text-sunny">✦</span>
              <span>Next.js</span>
              <span className="text-hot-pink">✦</span>
              <span>Machine Learning</span>
              <span className="text-neon-lime">✦</span>
              <span>UI/UX Design</span>
              <span className="text-sunny">✦</span>
              <span>Computer Engineering</span>
              <span className="text-hot-pink">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
