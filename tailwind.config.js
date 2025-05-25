/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffcc00',
        black: '#0a0f14',
        white: '#e0e0c0',
        gray: {
          100: '#e0e0c0',    // Optional, für hellere graue Töne
          400: '#999',    // Dein Blau statt Grau
          600: '#999',    // Falls irgendwo 600 benutzt wird, kannst du es hier auch anpassen
  
        },
        heading: '#00ffe1',
        meta: '#999', // 88c0d0
        code: '#ff66a1',
        dark: '#0a0f14',
        light: '#e0e0c0',
      },
    },
  },
};
