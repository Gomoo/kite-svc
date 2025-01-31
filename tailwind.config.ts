/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import inviewPlugin from 'tailwind-inview';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lugfa: ['var(--font-lufga)'],
        raleway: ['var(--font-raleway)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: '#0063F2',
        deepblue: '#001430',
        bggray: '#F9FAFB',
        textgray: '#505050',
        lightgray: '#9E9E9E',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slidein: 'slidein 1s ease var(--slidein-delay, 0) forwards',
        slidein300: 'slidein 1s ease 300ms forwards',
        slidein500: 'slidein 1s ease 500ms forwards',
        slidein700: 'slidein 1s ease 700ms forwards',
        slidein1000: 'slidein 1s ease 1000ms forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), inviewPlugin, require('tailwindcss-animated')],
} satisfies Config;
