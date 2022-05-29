const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      default: 'var(--color-bg)',
      accent: 'var(--color-bg-accent)',
      action: 'var(--color-bg-action)',
      'action-accent': 'var(--color-bg-action-accent)',
      contrast: 'var(--color-bg-contrast)',
      'contrast-accent': 'var(--color-bg-contrast-accent)',
      paper: 'var(--color-bg-paper)',
      'paper-accent': 'var(--color-bg-paper-accent)',
      primary: 'var(--color-bg-primary)',
      'primary-accent': 'var(--color-bg-primary-accent)',
      'primary-action': 'var(--color-bg-primary-action)',
      'primary-action-accent': 'var(--color-bg-primary-action-accent)',
      'primary-contrast': 'var(--color-bg-primary-contrast)',
      'primary-contrast-accent': 'var(--color-bg-primary-contrast-accent)',
      'primary-paper': 'var(--color-bg-primary-paper)',
      'primary-paper-accent': 'var(--color-bg-primary-paper-accent)',
      secondary: 'var(--color-bg-secondary)',
      'secondary-accent': 'var(--color-bg-secondary-accent)',
      'secondary-action': 'var(--color-bg-secondary-action)',
      'secondary-action-accent': 'var(--color-bg-secondary-action-accent)',
      'secondary-contrast': 'var(--color-bg-secondary-contrast)',
      'secondary-contrast-accent': 'var(--color-bg-secondary-contrast-accent)',
      'secondary-paper': 'var(--color-bg-secondary-paper)',
      'secondary-paper-accent': 'var(--color-bg-secondary-paper-accent)',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: 'var(--color-border)',
      accent: 'var(--color-border-accent)',
      action: 'var(--color-border-action)',
      'action-accent': 'var(--color-border-action-accent)',
      contrast: 'var(--color-border-contrast)',
      'contrast-accent': 'var(--color-border-contrast-accent)',
      paper: 'var(--color-border-paper)',
      'paper-accent': 'var(--color-border-paper-accent)',
      primary: 'var(--color-border-primary)',
      'primary-accent': 'var(--color-border-primary-accent)',
      'primary-action': 'var(--color-border-primary-action)',
      'primary-action-accent': 'var(--color-border-primary-action-accent)',
      'primary-contrast': 'var(--color-border-primary-contrast)',
      'primary-contrast-accent': 'var(--color-border-primary-contrast-accent)',
      'primary-paper': 'var(--color-border-primary-paper)',
      'primary-paper-accent': 'var(--color-border-primary-paper-accent)',
      secondary: 'var(--color-border-secondary)',
      'secondary-accent': 'var(--color-border-secondary-accent)',
      'secondary-action': 'var(--color-border-secondary-action)',
      'secondary-action-accent': 'var(--color-border-secondary-action-accent)',
      'secondary-contrast': 'var(--color-border-secondary-contrast)',
      'secondary-contrast-accent':
        'var(--color-border-secondary-contrast-accent)',
      'secondary-paper': 'var(--color-border-secondary-paper)',
      'secondary-paper-accent': 'var(--color-border-secondary-paper-accent)',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      default: 'var(--color-text)',
      accent: 'var(--color-text-accent)',
      action: 'var(--color-text-action)',
      'action-accent': 'var(--color-text-action-accent)',
      contrast: 'var(--color-text-contrast)',
      'contrast-accent': 'var(--color-text-contrast-accent)',
      paper: 'var(--color-text-paper)',
      'paper-accent': 'var(--color-text-paper-accent)',
      primary: 'var(--color-text-primary)',
      'primary-accent': 'var(--color-text-primary-accent)',
      'primary-action': 'var(--color-text-primary-action)',
      'primary-action-accent': 'var(--color-text-primary-action-accent)',
      'primary-contrast': 'var(--color-text-primary-contrast)',
      'primary-contrast-accent': 'var(--color-text-primary-contrast-accent)',
      'primary-paper': 'var(--color-text-primary-paper)',
      'primary-paper-accent': 'var(--color-text-primary-paper-accent)',
      secondary: 'var(--color-text-secondary)',
      'secondary-accent': 'var(--color-text-secondary-accent)',
      'secondary-action': 'var(--color-text-secondary-action)',
      'secondary-action-accent': 'var(--color-text-secondary-action-accent)',
      'secondary-contrast': 'var(--color-text-secondary-contrast)',
      'secondary-contrast-accent':
        'var(--color-text-secondary-contrast-accent)',
      'secondary-paper': 'var(--color-text-secondary-paper)',
      'secondary-paper-accent': 'var(--color-text-secondary-paper-accent)',
    }),
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1.25rem',
        sm: '1.5rem',
        md: '1.75rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    extend: {
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        amber: {
          100: 'var(--color-amber-100)',
          200: 'var(--color-amber-200)',
          300: 'var(--color-amber-300)',
          400: 'var(--color-amber-400)',
          500: 'var(--color-amber-500)',
          600: 'var(--color-amber-600)',
          700: 'var(--color-amber-700)',
          800: 'var(--color-amber-800)',
          900: 'var(--color-amber-900)',
        },
        gray: {
          25: 'var(--color-gray-25)',
          50: 'var(--color-gray-50)',
          75: 'var(--color-gray-75)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        sky: {
          100: 'var(--color-sky-100)',
          200: 'var(--color-sky-200)',
          300: 'var(--color-sky-300)',
          400: 'var(--color-sky-400)',
          500: 'var(--color-sky-500)',
          600: 'var(--color-sky-600)',
          700: 'var(--color-sky-700)',
          800: 'var(--color-sky-800)',
          900: 'var(--color-sky-900)',
        },
        // service colors
        service: {
          fail: 'var(--color-service-fail)',
          info: 'var(--color-service-info)',
          pass: 'var(--color-service-pass)',
          warn: 'var(--color-service-warn)',
        },
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
        6: '6 6 0%',
        7: '7 7 0%',
        8: '8 8 0%',
        9: '9 9 0%',
        10: '10 10 0%',
        11: '11 11 0%',
        12: '12 12 0%',
        full: '1 1 100%',
        inherit: 'inherit',
      },
      letterSpacing: {
        'tracking-tightest': '-0.1em',
      },
      lineHeight: {
        normal: 'normal',
      },
      listStyleType: {
        square: 'square',
      },
      height: {
        'screen-1/12': '8.333333vh',
        'screen-1/6': '16.666667vh',
        'screen-1/5': '20vh',
        'screen-1/4': '25vh',
        'screen-1/3': '33.333333vh',
        'screen-2/5': '40vh',
        'screen-1/2': '50vh',
        'screen-3/5': '60vh',
        'screen-2/3': '66.666667vh',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
        'screen-5/6': '83.333333vh',
        'screen-11/12': '91.666667vh',
      },
      inset: {
        '1/4': '25%',
        '1/3': '33.3333%',
        '1/2': '50%',
        '2/3': '66.6666%',
        '3/4': '75%',
        full: '100%',
      },
      maxWidth: {
        'screen-1/12': '8.333333vw',
        'screen-1/6': '16.666667vw',
        'screen-1/5': '20vw',
        'screen-1/4': '25vw',
        'screen-1/3': '33.333333vw',
        'screen-2/5': '40vw',
        'screen-1/2': '50vw',
        'screen-3/5': '60vw',
        'screen-2/3': '66.666667vw',
        'screen-3/4': '75vw',
        'screen-4/5': '80vw',
        'screen-5/6': '83.333333vw',
        'screen-11/12': '91.666667vw',
      },
      overflow: {
        inherit: 'inherit',
        initial: 'initial',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        20: '5rem',
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        24: '6rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        32: '8rem',
        33: '8.25rem',
        34: '8.5rem',
        35: '8.75rem',
        36: '9rem',
        37: '9.25rem',
        38: '9.5rem',
        39: '9.75rem',
        40: '10rem',
        41: '10.25rem',
        42: '10.5rem',
        43: '10.75rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        68: '17rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        81: '20.25rem',
        82: '20.5rem',
        83: '20.75rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
        96: '24rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        137: '34.25rem',
        138: '34.5rem',
        139: '34.75rem',
        140: '35rem',
        'vh-1/12': '8.333333vh',
        'vh-1/6': '16.666667vh',
        'vh-1/5': '20vh',
        'vh-1/4': '25vh',
        'vh-1/3': '33.333333vh',
        'vh-2/5': '40vh',
        'vh-1/2': '50vh',
        'vh-3/5': '60vh',
        'vh-2/3': '66.666667vh',
        'vh-3/4': '75vh',
        'vh-4/5': '80vh',
        'vh-5/6': '83.333333vh',
        'vw-11/12': '91.666667vh',
        'vh-full': '100vh',
        'vw-1/12': '8.333333vw',
        'vw-1/6': '16.666667vw',
        'vw-1/5': '20vw',
        'vw-1/4': '25vw',
        'vw-1/3': '33.333333vw',
        'vw-2/5': '40vw',
        'vw-1/2': '50vw',
        'vw-3/5': '60vw',
        'vw-2/3': '66.666667vw',
        'vw-3/4': '75vw',
        'vw-4/5': '80vw',
        'vw-5/6': '83.333333vw',
        'vw-full': '100vw',
      },
      width: {
        auto: 'auto',
        'screen-1/12': '8.333333vw',
        'screen-1/6': '16.666667vw',
        'screen-1/5': '20vw',
        'screen-1/4': '25vw',
        'screen-1/3': '33.333333vw',
        'screen-2/5': '40vw',
        'screen-1/2': '50vw',
        'screen-3/5': '60vw',
        'screen-2/3': '66.666667vw',
        'screen-3/4': '75vw',
        'screen-4/5': '80vw',
        'screen-5/6': '83.333333vw',
        'screen-11/12': '91.666667vw',
      },
    },
    fontFamily: {
      ...fontFamily,
      heading: ["'Nunito Sans'"],
      body: ["'Abhaya Libre'"],
    },
    fontSize: {
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.5'],
      '3xl': ['1.875rem', '1.5'],
      '4xl': ['2.25rem', '1.25'],
      '5xl': ['3rem', '1.25'],
      '6xl': ['3.75rem', '1.25'],
      '7xl': ['4.5rem', '1.25'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
      '1/4': '25%',
      '1/3': '33.333333%',
      '1/2': '50%',
      '2/3': '66.666667%',
      '3/4': '75%',
      full: '100%',
      inherit: 'inherit',
    },
    maxHeight: {
      'screen-1/2': '50vh',
    },
    minHeight: {
      0: '0px',
      '1/4': '25%',
      '1/3': '33.333333%',
      '1/2': '50%',
      '2/3': '66.666667%',
      '3/4': '75%',
      auto: 'auto',
      full: '100%',
      'screen-1/12': '8.333333vh',
      'screen-1/6': '16.666667vh',
      'screen-1/5': '20vh',
      'screen-1/4': '25vh',
      'screen-1/3': '33.333333vh',
      'screen-2/5': '40vh',
      'screen-1/2': '50vh',
      'screen-3/5': '60vh',
      'screen-2/3': '66.666667vh',
      'screen-3/4': '75vh',
      'screen-4/5': '80vh',
      'screen-5/6': '83.333333vh',
      'screen-11/12': '91.666667vh',
      screen: '100vh',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
      '5xl': '2560px',
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
      '5xl': '2560px',
      accessibility: { raw: 'accessibility' },
      portrait: { raw: '(orientation: portrait)' },
      print: { raw: 'print' },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      filter: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
      textColor: ['even', 'odd'],
    },
  },
  plugins: [],
};