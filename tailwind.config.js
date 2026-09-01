/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // បើកប្រើ dark mode តាម class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          DEFAULT: '#2563eb', // ពណ៌ចម្បង
          600: '#1d4ed8',    // ងងឹតជាង (ប្រើសម្រាប់ hover)
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        // សម្រាប់ភាសាអង់គ្លេស (font-sans)
        sans: ['"Times New Roman"', 'Times', 'serif'],
        // សម្រាប់ភាសាខ្មែរ (font-khmer)
        khmer: ['Battambang', 'Khmer OS Battambang', 'sans-serif'],
      },
    },
  },
  plugins: [],
};