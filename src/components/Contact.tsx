"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowUpRight, Copy, Check } from "lucide-react";

const email = "meltemyanoglu@gmail.com";

const socials = [
  {
    label: "GitHub",
    handle: "@meltemyanoglu",
    href: "https://github.com/meltemyanoglu",
    Icon: Github,
    color: "hover:bg-ink hover:text-cream",
    border: "border-ink",
  },
  {
    label: "LinkedIn",
    handle: "in/meltemyanoglu",
    href: "https://linkedin.com/in/meltemyanoglu",
    Icon: Linkedin,
    color: "hover:bg-cobalt hover:text-cream hover:border-cobalt",
    border: "border-ink",
  },
  {
    label: "Email",
    handle: email,
    href: `mailto:${email}`,
    Icon: Mail,
    color: "hover:bg-hot-pink hover:text-cream hover:border-hot-pink",
    border: "border-ink",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-neon-lime border-t-2 border-ink overflow-hidden py-20 md:py-28"
    >
      {/* BG texture shapes */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-ink opacity-5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-10 w-28 h-28 bg-hot-pink opacity-20 rotate-45" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-ink opacity-5 rounded-full" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-ink/50" />
          Get In Touch
        </motion.p>

        {/* Big heading */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black uppercase leading-none text-ink"
            style={{ fontSize: "clamp(3rem, 8vw, 10rem)", letterSpacing: "-0.04em" }}
          >
            WANT TO
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black uppercase leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 10rem)",
              letterSpacing: "-0.04em",
              WebkitTextStroke: "3px #0A0A0A",
              color: "transparent",
            }}
          >
            WORK TOGETHER?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-base md:text-lg text-ink/70 max-w-lg mb-12 leading-relaxed"
        >
          I&apos;m open to full-time roles, freelance projects, and interesting collaborations —
          especially where AI, mobile, or creative tech intersect.
        </motion.p>

        {/* Email big button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-3 px-8 py-5 bg-ink text-cream font-display font-black text-xl uppercase tracking-tight border-2 border-ink shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200"
          >
            <Mail size={22} />
            <span>{email}</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-6 py-5 bg-cream text-ink font-bold uppercase tracking-widest text-sm border-2 border-ink shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 border-t-2 border-ink pt-10"
        >
          {socials.map(({ label, handle, href, Icon, color, border }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className={`group flex items-center gap-3 px-5 py-3 bg-transparent text-ink font-bold text-sm uppercase tracking-widest border-2 ${border} ${color} transition-all duration-200 shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg`}
            >
              <Icon size={16} />
              <span>{handle}</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}

          <motion.a
            href="/cv.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.84 }}
            className="group flex items-center gap-3 px-5 py-3 bg-ink text-cream font-bold text-sm uppercase tracking-widest border-2 border-ink hover:bg-hot-pink hover:border-hot-pink transition-all duration-200 shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg"
          >
            <Download size={16} />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
