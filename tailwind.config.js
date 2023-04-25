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
        sans: ['var(--font-vazir)'],
      },

      colors: {
        "dark": {
          100: "#9ca3af",
          200: "#757575",
          300: "#6b7280",
          400: "#4b5563",
          500: "#374151",
          600: "#2b2b35",
          650: "#20202a",
          700: "#191923",
          800: "#14141c",
          900: "#0e0e14",
        },
        "light": {
          50: "#FBFEFF",
          100: "#F8FCFF",
          200: "#F4FBFE",
          300: "#F1F9FE",
          400: "#EDF8FE",
          500: "#E9F7FE",
          600: "#E6F5FE",
          700: "#E2F4FD",
          800: "#e3fafd",
          900: "#ddf4f7"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
