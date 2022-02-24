const { colors, fontSize } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontSize: {
      ...fontSize,
      '6xl': '3.375rem',
      '7xl': '4rem',
    },
    fontFamily: {
      'sans': ['Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"']
    },
    extend: {
      screens: {

        'xl': {
          'max': '1170px'
        },

        'max-sm': {
          'max': '639px'
        },
        'max-md': {
          'max': '767px'
        },
        'max-lg': {
          'max': '1023px'
        },
        'max-xl': {
          'max': '1279px'
        },

        'sm-md': {
          'min': '639px',
          'max': '767px'
        },
        'sm-lg': {
          'min': '639px',
          'max': '1023px'
        },
        'md-lg': {
          'min': '768px',
          'max': '1023px'
        },
        'md-xl': {
          'min': '768px',
          'max': '1279px'
        },
        'lg-xl': {
          'min': '1024px',
          'max': '1279px'
        },
      },
      colors: {
        peach: {
          '100': '#FEECEE',
          '200': '#FAB3BB',
          '300': '#F78D99',
          '400': '#F46778',
          '500': '#EF233C',
          '600': '#E4112A',
          '700': '#BE0E23',
          '800': '#850A18',
          '900': '#4C060E',
        },
        pink: {
          '100': '#FEC3CD',
          '200': '#FD879B',
          '300': '#FB4B68',
          '400': '#FA0F36',
          '500': '#D90429',
          '600': '#B40421',
          '700': '#8C031A',
          '800': '#8C031A',
          '900': '#3C010B',
        },
        gray: {
          '100': '#E7EAEE',
          '200': '#cfd2d6',
          '300': '#ABB4C4',
          '400': '#8D99AE',
          '500': '#707F99',
          '600': '#5D6B83',
          '700': '#444E5F',
          '800': '#2B2D42',
          '900': '#191D24',
          '1000': '#080A0C',
        },
        yellow: {
          '100': '#FCF1DC',
          '200': '#F6DBA5',
          '300': '#F3D791',
          '400': '#EFCA6C',
          '500': '#EAB93F',
          '600': '#DCA518',
          '700': '#B88914',
          '800': '#936E10',
          '900': '#6E520C',
        }
      },
      spacing: {},
      maxHeight: {},
      maxWidth: {
        '80': '80ch', 
      },
      width: {
        '80': '80ch',
      },
      minHeight: {},
      height: {
        'screen-1/4': '25vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-2/3': '66vh',
        'screen-3/4': '75vh',
      },
      opacity: {
        '85': 0.85,
      },
    },
  },
  variants: {},
  plugins: [],
}