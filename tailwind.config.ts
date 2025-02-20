import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        //Solid Colors

        primary: '#FFC200', //Yellow
        'dark-green': '#112018', //Dark Green (used for bg)
        white: '#FFFFFF',
        'saturated-light-green': '#00FF00', //light green
        'light-dark-green': '#00401C', //light green (used in outline)
        'medium-dark-green': '#1A3E2A', //medium dark green
        'black-30-opacity': 'rgba(0, 0, 0, 0.3)' , //Use for overlay in pictures to darken
      },
      backgroundImage: {
        // Always double-check if opacity adjustments were applied to the gradient or overall color appearance. 
        // Sometimes, gradients are visually manipulated (e.g., in Figma) to achieve a specific look, 
        // which may not directly translate to Tailwind CSS. Ensure the intended effect is accurately recreated.

        'gradient-ltr-lightgreen-transparent'://linear fading gradient
          'linear-gradient(to right, #36FF90,rgba(115, 115, 115, 0))',
        'gradient-utd-lightgreen-darkgreen'://100% opaque
          'linear-gradient(to bottom, #1C653B, #113620)', 
        'gradient-ltr-darkgreen-lightgreen'://100% opaque
          'linear-gradient(to right, #1A3E2A, #3EB372)',
        'gradient-ltr-solid-yellow-lightyellow'://100% opaque
          'linear-gradient(to right, #FFC200, #FFDC6C)',
        'gradient-ltr-transparent-yellow'://linear fading gradient
          'linear-gradient(to right,rgba(138, 255, 191, 0), #FFC201)',//BG in Recognition section
        'gradient-utd-transparent-black'://linear fading gradient
          'linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, rgba(0, 0, 0, 0.49) 18%, rgba(0, 0, 0, 1) 48%)', //BG in Recognition section
        'gradient-middle-green-transparent'://middle vertical fading gradient
          'linear-gradient(180deg, rgba(17,32,24,0) 0%, rgba(17,32,24,0.66) 23%, rgba(17,32,24,1) 44%, rgba(17,32,24,1) 66%, rgba(17,32,24,0) 100%)',
        'gradient-ltr-green-transparent'://linear fading gradient
          'linear-gradient(to right, #1A3E2A,rgba(26, 62, 42, 0))',
        'gradient-utd-saturatedGreen-transparent'://linear fading gradient
          'linear-gradient(to bottom, rgba(62, 179, 115, 0), #00833A)',
        'gradient-utd-green-transparent': //linear fading gradient
          'linear-gradient(180deg, rgba(17,32,24,0.8) ,rgba(0,64,28,1))',

      },
    },
  },
  plugins: [],
};
export default config;
