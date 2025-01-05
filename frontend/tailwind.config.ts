import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black' : '#0d0d0d',
        'custom-green' : '#49f292',
        'custom-red': '#e54f42',
        'custom-white' : '#f4e8da'
      },
      screens: {
        'md' : '35em',
        'lg' : '45em',
        'mobile' : {max : '34.9em'}
      },
      fontSize: {
        'fs-900': '6rem',
        'fs-800': '4.5rem',
        'fs-700': '3rem',
        'fs-600': '2.5rem',
        'fs-500': '1.75rem',
        'fs-400': '1.25rem',
        'fs-300': '1rem',
        'fs-200': '0.77rem'
      },
      gridTemplateColumns: {
        'main-grid' : '1fr auto'
      },
      darkMode: 'class',
      animation: {
        'typing' : 'typing 3s steps(18, end) infinite',
        'blink': 'blink 0.5s step-end infinite'
      },
      keyframes: {
        typing: {
          '0%' : {width: '0'},
          '100%' : {width: '100%'}
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
