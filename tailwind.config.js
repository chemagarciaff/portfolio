/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 OBLIGATORIO para que funcione tu toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};
