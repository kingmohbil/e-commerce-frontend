import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-geist-mono)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  darkMode: 'selector',

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            success: {
              foreground: '#FFF',
            },
          },
        },
      },
    }),
  ],
};
