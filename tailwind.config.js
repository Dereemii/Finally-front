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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        success: {
          DEFAULT: '#14a44d',
          '600': '#0d8a3a',
          '700': '#0a682c',
        },
        danger: {
          DEFAULT: '#dc4c64',
          '600': '#c43c52',
          '700': '#a13344',
        },
        warning: {
          DEFAULT: '#e4a11b',
          '600': '#d09419',
          '700': '#b37a14',
        },
        info: {
          DEFAULT: '#54b4d3',
          '600': '#469ab7',
          '700': '#3a8199',
        },
      },
    },
  },
  plugins: [],
};
