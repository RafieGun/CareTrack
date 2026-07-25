import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        surface: "var(--surface)",
        card: "var(--card)",
        line: "var(--line)",
        primary: "var(--primary)",
        due: "var(--due)",
        overdue: "var(--overdue)",
        done: "var(--done)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
