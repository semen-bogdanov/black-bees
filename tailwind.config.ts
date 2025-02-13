import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color: {
        color1: '#efeff3',
        color2: 'rgba(255, 255, 255, 0.12)',
      },
      backgroundColor: {
        blackBanner: '#1f1f1f',
        black: '#2b2b2b',
      },
    },
  },
  plugins: [],
};

export default config;
