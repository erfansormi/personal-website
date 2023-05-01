/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        vazir: ['var(--font-vazir)'],
      },
      colors: {
        "dark": {
          100: "#b0b0d5",
          200: "#9292b1",
          300: "#77778f",
          400: "#5f5f74",
          500: "#40404e",
          600: "#2b2b35",
          700: "#23232e",
          700.9: "rgba(35,35,46,0.96)",
          750: "#20202a",
          800: "#191923",
          850: "#14141c",
          900: "#0e0e14",
        },
        "light": {
          100: "#f0f2ff",
          200: "#e4e8ff",
          300: "#d9dffd",
          300.9: "#d9dffde3",
          400: "#D2DAFF",
          500: "#bdc8fb",
          600: "#AAC4FF",
          700: "#B1B2FF",
          800: "#999af7",
          900: "#7f80f7",
        },
        "yellow": {
          400: "#FFD43B",
          500: "#FCC419",
          600: "#FAB005",
          700: "#F59F00",
          800: "#F08C00",
          900: "#E67700"
        },
        "blue": {
          50: "#E7F5FF",
          100: "#D0EBFF",
          200: "#A5D8FF",
          300: "#74C0FC",
          400: "#4DABF7",
          500: "#339AF0",
          600: "#228BE6",
          700: "#1C7ED6",
          800: "#1971C2",
          900: "#1864AB"
        },
        "white": "#fff",
        "black": "#000"
      },
      boxShadow: {
        "sm": "0 0 2px 0 rgb(0 0 0 / 0.05)",
        "shadow": "0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px -1px rgb(0 0 0 / 0.1)",
        "md": "0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)",
        "lg": "0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)",
        "xl": "0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 0 50px -12px rgb(0 0 0 / 0.25)"
      }
    },
  },
  darkMode: "class",
  plugins: [],
}