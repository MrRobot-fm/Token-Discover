import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-works-sans)"],
        spaceMono: ["var(--font-space-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
