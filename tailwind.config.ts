import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2EDE4",
        ink: "#0A0A0A",
        "hot-pink": "#FF3CAC",
        "neon-lime": "#B5FF39",
        "sunny": "#FFE500",
        "cobalt": "#1D4ED8",
        "navy": "#0D1B2A",
        "blush": "#FFB3C6",
        "sage": "#2D6A4F",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      boxShadow: {
        hard: "4px 4px 0px #0A0A0A",
        "hard-lg": "6px 6px 0px #0A0A0A",
        "hard-pink": "4px 4px 0px #FF3CAC",
        "hard-lime": "4px 4px 0px #B5FF39",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(2deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        blob: "blob 8s ease-in-out infinite",
        "blob-slow": "blob 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
