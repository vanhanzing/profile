/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      mob: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      laptopl: '1440px',
    },
    extend: {
      backgroundImage: {
        'lightcover-darkdots': "url('/light-background.png')",
        'darkcover-lightdots': "url('/dark-background.png')",
        'sun-shine': "url('/sun.svg')",
        'moon-crescent': "url('/moon.svg')",
      },
      fontFamily: {
        custom: ['signature', 'sans-serif'],
      },
      colors: {
        primary: '#edbe03',
      },
    },
  },
  plugins: [],
};
