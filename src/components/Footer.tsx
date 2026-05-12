"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream border-t-2 border-cream/10 py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-display font-black text-xl tracking-tight"
        >
          MY
          <span className="text-hot-pink">.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-cream/40 uppercase tracking-widest text-center"
        >
          © {year} Meltem Yanoglu — Designed & Built with care
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
          <span className="font-mono text-xs text-cream/40 uppercase tracking-widest">
            Open to work
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
