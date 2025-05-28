import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2ff66',
        secondary: '#33171e',
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        pretendard: ['var(--font-pretendard)'],
        sans: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
