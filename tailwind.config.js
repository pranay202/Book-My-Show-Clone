module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navColor:
        {
          50: '#eef0fa',
          100: '#cfd2e2',
          200: '#b0b3cc',
          300: '#9095b8',
          400: '#7177a4',
          500: '#585d8c',
          600: '#44496d',
          700: '#31344e',
          800: '#1d1f30',
          900: '#090914',
        },
        navLgColor: 
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        btColor: 
        {
          50: '#ffe5ed',
          100: '#f9bcc9',
          200: '#ee91a5',
          300: '#e66681',
          400: '#dd3b5d',
          500: '#c42244',
          600: '#991835',
          700: '#6f1025',
          800: '#440616',
          900: '#1e0007',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};