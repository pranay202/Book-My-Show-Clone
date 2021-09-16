module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 1000px 20000px 20000px 2000px rgba(0, 0, 0, 0.3)',
      none: 'none',
    },

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
          100: '#2b3148',
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
    extend: {
      boxShadow: ['active'],
    },
  },
  plugins: [],
};