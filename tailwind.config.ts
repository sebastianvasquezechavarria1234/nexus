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
        nexus: {
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          pink: "#ec4899",
        }
      },
      backgroundImage: {
        'nexus-gradient': 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      }
    },
  },
  plugins: [],
};
export default config;
