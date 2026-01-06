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
        background: "#FFFFFF", // White background
        foreground: "#1A1A1A", // Dark grey for text
        primary: {
          DEFAULT: "#000000", // Black for emphasis
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#808080", // Medium grey for subtle accents
          foreground: "#FFFFFF",
        },
        // Removed 'dark' palette
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
