import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#243447",
          soft: "#3D4F63",
          muted: "#5C6B7A",
        },
        sage: {
          DEFAULT: "#6A9A96",
          deep: "#4F7A76",
          soft: "#A8C5C2",
          mist: "#E8F2F0",
        },
        paper: {
          DEFAULT: "#F6F3EC",
          warm: "#EFE9DF",
          white: "#FFFcf7",
        },
        accent: {
          DEFAULT: "#8B6F47",
          soft: "#C4A882",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "42rem",
        measure: "68rem",
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(ellipse at 20% 0%, rgba(106,154,150,0.08), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(139,111,71,0.06), transparent 45%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
