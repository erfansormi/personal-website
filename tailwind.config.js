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
          100: "#9ca3af",
          200: "#757575",
          300: "#6b7280",
          400: "#4b5563",
          500: "#374151",
          600: "#2b2b35",
          700: "#23232e",
          700.09: "rgba(35,35,46,0.96)",
          750: "#20202a",
          800: "#191923",
          850: "#14141c",
          900: "#0e0e14",
        },
        "light": {
          50: "#FBFEFF",
          100: "#F8FCFF",
          200: "#F4FBFE",
          300: "#F1F9FE",
          400: "#EDF8FE",
          400.09: "rgba(237,248,254,0.90)",
          500: "#E9F7FE",
          600: "#E6F5FE",
          700: "#E2F4FD",
          800: "#e3fafd",
          900: "#ddf4f7"
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