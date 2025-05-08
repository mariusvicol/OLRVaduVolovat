/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        text: '#2d3748',
        primary: '#3b82f6',
        secondary: '#60a5fa',
        accent: '#93c5fd',
        light: '#f0f9ff',
      },
    },
  },
  plugins: [],
} 