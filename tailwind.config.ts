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
        background: "var(--background)",
        foreground: "var(--foreground)",
        page: {
          DEFAULT: "#FAF9F6",
          subtle: "#F4F3EE",
          card: "#FFFFFF",
          muted: "#EDECE6",
        },
        steel: {
          DEFAULT: "#181D20",
          light: "#262C30",
          dark: "#0F1214",
        },
        slate: {
          DEFAULT: "#5A626A",
          muted: "#7A838C",
          light: "#A0A8B0",
          border: "rgba(24, 29, 32, 0.08)",
        },
        gmm: {
          amber: "#FD953A",
          flame: "#FA5D19",
          rust: "#BF1E07",
          gold: "#FE8825",
          highlight: "#FFF3E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "DM Sans", "Hind Siliguri", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        bengali: ["var(--font-bengali)", "Hind Siliguri", "sans-serif"],
      },
      animation: {
        "marquee-slow": "marquee 35s linear infinite",
        "float-gentle": "float 8s ease-in-out infinite",
        "spin-very-slow": "spin 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
export default config;
