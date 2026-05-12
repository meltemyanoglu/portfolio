"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Works", "About", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm border-b-2 border-ink"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-display font-black text-xl tracking-tighter text-ink"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 bg-ink text-cream font-black text-sm rounded-none border-2 border-ink group-hover:bg-hot-pink group-hover:border-hot-pink transition-colors duration-200">
            MY
          </span>
          <span className="hidden sm:inline">meltem</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative font-semibold text-sm uppercase tracking-widest text-ink group"
              >
                <span className="relative z-10 group-hover:text-hot-pink transition-colors duration-200">
                  {link}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hot-pink group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-ink text-cream font-bold text-sm uppercase tracking-widest border-2 border-ink hover:bg-hot-pink hover:border-hot-pink transition-all duration-200 shadow-hard hover:shadow-hard-pink hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 border-2 border-ink bg-cream hover:bg-hot-pink hover:border-hot-pink transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-cream border-b-2 border-ink overflow-hidden"
          >
            <ul className="flex flex-col px-6 pb-6 pt-2 gap-4">
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block font-display font-bold text-3xl uppercase tracking-tight text-ink hover:text-hot-pink transition-colors border-b border-ink/20 pb-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.06 }}
              >
                <a
                  href="#contact"
                  className="inline-block mt-2 px-6 py-3 bg-ink text-cream font-bold uppercase tracking-widest border-2 border-ink shadow-hard"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
