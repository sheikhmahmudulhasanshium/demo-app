import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      display: ['Oswald', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
      FigTree: ['Figtree', 'sans-serif'],
      Montserrat: ['Montserrat','sans-serif']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        CustomBlue: "#0099FF", 
      },
    },
  },
  plugins: [], 
};

export default config;
