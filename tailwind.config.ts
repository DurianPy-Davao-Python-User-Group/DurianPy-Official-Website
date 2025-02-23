import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#FFC200',
        'dark-green': '#112018',
        white: '#FFFFFF',
        'saturated-light-green': '#00FF00',
        'light-dark-green': '#00401C',
        'medium-dark-green': '#1A3E2A',
        'black-30-opacity': 'rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-ltr-lightgreen-transparent':
          'linear-gradient(to right, #36FF90,rgba(115, 115, 115, 0))',
        'gradient-utd-lightgreen-darkgreen':
          'linear-gradient(to bottom, #1C653B, #113620)',
        'gradient-ltr-darkgreen-lightgreen':
          'linear-gradient(to right, #1A3E2A, #3EB372)',
        'gradient-ltr-solid-yellow-lightyellow':
          'linear-gradient(to right, #FFC200, #FFDC6C)',
        'gradient-ltr-transparent-yellow':
          'linear-gradient(to right,rgba(138, 255, 191, 0), #FFC201)',
        'gradient-utd-transparent-black':
          'linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.49) 18%, rgba(0, 0, 0, 1) 48%)',
        'gradient-middle-green-transparent':
          'linear-gradient(180deg, rgba(17,32,24,0) 0%, rgba(17,32,24,0.66) 23%, rgba(17,32,24,1) 44%, rgba(17,32,24,1) 66%, rgba(17,32,24,0) 100%)',
        'gradient-ltr-green-transparent':
          'linear-gradient(to right, #1A3E2A,rgba(26, 62, 42, 0))',
        'gradient-utd-saturatedGreen-transparent':
          'linear-gradient(to bottom, rgba(62, 179, 115, 0), #00833A)',
        'gradient-utd-green-transparent':
          'linear-gradient(180deg, rgba(17,32,24,0.8) ,rgba(0,64,28,1))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        montserrat: ['var(--font-monstserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
