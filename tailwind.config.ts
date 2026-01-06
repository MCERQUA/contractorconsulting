import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0EA5E9", // Sky blue/Teal
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F97316", // Orange
          foreground: "#FFFFFF",
        },
        dark: {
          900: "#0f1825", // Deep blue/slate
          800: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
