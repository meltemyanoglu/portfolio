"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowUpRight, ChevronDown } from "lucide-react";

/* ─── Ana 4 proje ─────────────────────────────────────────────────────────── */
const projects = [
  {
    id: "01",
    title: "MoodFlow",
    subtitle: "Feel it. Play it.",
    description:
      "A Flutter mood-tracking app that reads your emotional state and curates personalised music playlists. Log daily moods, spot patterns in your wellbeing, and let the algorithm find the soundtrack to your day.",
    tags: ["Flutter", "Dart", "Firebase", "Spotify API", "ML"],
    github: "https://github.com/meltemyanoglu",
    live: null,
    bg: "bg-cobalt",
    text: "text-cream",
    accent: "bg-neon-lime text-ink",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="flex items-end gap-1.5">
          {[40, 65, 50, 80, 45, 90, 60, 75, 55, 85, 70, 48].map((h, i) => (
            <motion.div
              key={i}
              className="w-3 bg-neon-lime rounded-t-sm"
              initial={{ height: 0 }}
              whileInView={{ height: h }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            />
          ))}
        </div>
        <div className="absolute bottom-2 right-2 text-4xl">🎵</div>
      </div>
    ),
  },
  {
    id: "02",
    title: "Fridgenie",
    subtitle: "What's in the fridge?",
    description:
      "Snap a photo of your fridge ingredients and get AI-generated meal suggestions instantly. Powered by a multi-modal LLM pipeline that understands context, dietary needs, and cooking skill level.",
    tags: ["Flutter", "Python", "OpenAI API", "FastAPI", "Firebase"],
    github: "https://github.com/meltemyanoglu",
    live: null,
    bg: "bg-neon-lime",
    text: "text-ink",
    accent: "bg-ink text-cream",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center gap-4 flex-wrap p-4">
        {["🥕", "🧅", "🍅", "🧀", "🥦", "🥚", "🌿", "🫑"].map((e, i) => (
          <motion.span
            key={i}
            className="text-2xl"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            {e}
          </motion.span>
        ))}
        <motion.div
          className="absolute top-2 right-2 bg-ink text-cream text-xs font-bold px-2 py-1 uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI ✨
        </motion.div>
      </div>
    ),
  },
  {
    id: "03",
    title: "Emotional Music Generation",
    subtitle: "Thesis · Valence–Arousal AI",
    description:
      "A deep-learning system that generates emotionally conditioned music. Uses a Variational Autoencoder with EnCodec audio tokens, guided by valence–arousal coordinates on the Russell circumplex mood model.",
    tags: ["Python", "PyTorch", "VAE", "EnCodec", "Music AI"],
    github: "https://github.com/meltemyanoglu",
    live: null,
    bg: "bg-sunny",
    text: "text-ink",
    accent: "bg-hot-pink text-cream",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-80">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="20" fill="#0A0A0A" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#0A0A0A" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#0A0A0A" strokeWidth="1.5" />
          <text x="105" y="18" fontSize="9" fontWeight="bold" fill="#0A0A0A">VALENCE</text>
          <text x="105" y="185" fontSize="9" fontWeight="bold" fill="#0A0A0A">–</text>
          <text x="182" y="103" fontSize="9" fontWeight="bold" fill="#0A0A0A">+</text>
          <circle cx="135" cy="70" r="6" fill="#FF3CAC" />
          <circle cx="75" cy="130" r="5" fill="#2563EB" />
          <circle cx="150" cy="125" r="4" fill="#1D4ED8" />
        </svg>
      </div>
    ),
  },
  {
    id: "04",
    title: "UI/UX Experiments",
    subtitle: "Creative web & design lab",
    description:
      "A living collection of visual explorations — editorial layouts, microinteraction prototypes, generative art, and design-system experiments. Where code meets craft.",
    tags: ["Next.js", "Figma", "Framer", "p5.js", "CSS Art"],
    github: "https://github.com/meltemyanoglu",
    live: null,
    bg: "bg-hot-pink",
    text: "text-cream",
    accent: "bg-cream text-ink",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center gap-3">
        {[
          { shape: "w-14 h-14 rounded-full bg-sunny border-2 border-ink", rotate: "-rotate-6" },
          { shape: "w-10 h-10 bg-neon-lime border-2 border-ink", rotate: "rotate-12" },
          { shape: "w-16 h-16 rounded-full bg-cobalt border-2 border-ink", rotate: "rotate-3" },
          { shape: "w-8 h-8 bg-cream border-2 border-ink rotate-45", rotate: "-rotate-3" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className={`${s.shape} ${s.rotate}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          />
        ))}
      </div>
    ),
  },
];

/* ─── Ek projeler — buraya kendi projelerini ekle ─────────────────────────── */
const extraProjects = [
  {
    id: "05",
    title: "Proje Adı",           // ← değiştir
    subtitle: "Kısa açıklama",    // ← değiştir
    description:
      "Projen hakkında bir iki cümle yaz. Ne yaptı, hangi problemi çözdü, ne öğretti.",
    tags: ["Flutter", "Firebase"],  // ← değiştir
    github: "https://github.com/meltemyanoglu",
    live: null,
    bg: "bg-sage",
    text: "text-cream",
    accent: "bg-neon-lime text-ink",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-display font-black text-6xl text-cream/20">05</span>
      </div>
    ),
  },
  {
    id: "06",
    title: "Proje Adı",           // ← değiştir
    subtitle: "Kısa açıklama",    // ← değiştir
    description:
      "Projen hakkında bir iki cümle yaz. Ne yaptı, hangi problemi çözdü, ne öğretti.",
    tags: ["React", "TypeScript"],  // ← değiştir
    github: "https://github.com/meltemyanoglu",
    live: null,
    bg: "bg-ink",
    text: "text-cream",
    accent: "bg-sunny text-ink",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-display font-black text-6xl text-cream/20">06</span>
      </div>
    ),
  },
];

/* ─── Kart bileşeni ───────────────────────────────────────────────────────── */
type Project = (typeof projects)[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${project.bg} border-2 border-ink shadow-hard-lg hover:shadow-[8px_8px_0px_#0A0A0A] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      {/* Visual area */}
      <div className="h-48 border-b-2 border-ink relative overflow-hidden">
        {project.visual}
        <span className={`absolute top-3 left-3 font-mono font-bold text-xs ${project.text} opacity-50`}>
          {project.id}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <p className={`font-mono text-xs uppercase tracking-widest ${project.text} opacity-60 mb-1`}>
            {project.subtitle}
          </p>
          <h3 className={`font-display font-black text-3xl uppercase leading-tight ${project.text}`}>
            {project.title}
          </h3>
        </div>

        <p className={`font-sans text-sm leading-relaxed ${project.text} opacity-80`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 ${project.accent} border-2 border-ink font-bold text-xs uppercase tracking-wide`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2 border-t-2 border-ink/20">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest ${project.text} hover:opacity-60 transition-opacity`}
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest ${project.text} hover:opacity-60 transition-opacity`}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </div>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className={`w-8 h-8 ${project.accent} border-2 border-ink flex items-center justify-center`}>
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Ana bölüm ───────────────────────────────────────────────────────────── */
export default function Works() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="works" className="bg-cream border-t-2 border-ink py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Başlık */}
        <div ref={headingRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-3 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-ink/50" />
            Selected Works
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={headingInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black uppercase leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 8rem)", letterSpacing: "-0.03em" }}
            >
              THINGS{" "}
              <span style={{ WebkitTextStroke: "2px #0A0A0A", color: "transparent" }}>
                I BUILT
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Ana 4 kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* See All butonu */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group flex items-center gap-3 px-8 py-4 bg-cream text-ink font-bold uppercase tracking-widest text-sm border-2 border-ink shadow-hard hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg hover:bg-ink hover:text-cream transition-all duration-200"
          >
            <span>
              {showAll
                ? "Show Less"
                : `See All Projects (${extraProjects.length + projects.length})`}
            </span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={18} strokeWidth={2.5} />
            </motion.div>
          </button>
        </motion.div>

        {/* Açılan ek kartlar */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              key="extra"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {extraProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub linki */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/meltemyanoglu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-ink text-cream font-bold uppercase tracking-widest border-2 border-ink shadow-hard hover:bg-hot-pink hover:border-hot-pink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg transition-all duration-200"
          >
            <Github size={18} />
            <span>More on GitHub</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
