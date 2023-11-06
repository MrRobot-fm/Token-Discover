import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";

const config: Config = withTV({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-works-sans)", "san-serif"],
        spaceMono: ["var(--font-space-mono)", "san-serif"],
      },
      colors: {
        background: {
          black: "#2B2B2B",
          grey: "#3B3B3B",
        },
        label: {
          grey: "#858584",
          white: "#FFF",
        },
        callToAction: "#A259FF",
      },
      backgroundImage: {
        purpleBlue: "linear-gradient(128deg, #A259FF 49.75%, #377DF7 136.56%)",
        purpleRed: "linear-gradient(101deg, #A259FF 13.57%, #FF6250 97.65%)",
      },
    },
  },
  plugins: [],
});

export default config;
