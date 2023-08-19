/** @type {import('tailwindcss').Config} */
// https://colorhunt.co/palette/ffc6acfff6dcc4c1a49e9fa5
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        primary: "#313866",
        secondary: {
          500:"#6350bf",
          700:"#504099", 
        },
        tertiary: "#974EC3",
        quaternary: "#FE7BE5",
        accent: {
          DEFAULT: "white",
        },
      },
      
    },
  },
  plugins: [],
}

