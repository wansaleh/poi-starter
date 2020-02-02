const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const { rgba, mix } = require('polished');
const mdcolors = require('./tailwind-md');

// const primary = tailwindColorPalette('#0652DD', {
// const primary = tailwindColorPalette('#ff6348', {
const primary = tailwindColorPalette('#3742fa', {
  // const primary = tailwindColorPalette('#0549FF', {
  // const primary = tailwindColorPalette(md['blue-a700'], {
  // const primary = tailwindColorPalette('#05c46b', {
  name: 'primary',
  greyscale: true,
  ui: true
});

const secondary = tailwindColorPalette('#DDC313', {
  name: 'secondary',
  greyscale: false,
  ui: false
});

module.exports = {
  // important: true,
  separator: ':',
  theme: {
    extend: {
      colors: {
        ...primary,
        ...secondary,
        ...mdcolors
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        events: ['Oswald', 'Roboto Condensed', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '2xs': '0.7rem',
        '7xl': '5rem',
        '8xl': '6rem'
      },
      boxShadow: theme => ({
        '3xl': `0 10px 20px ${rgba(
          theme('colors.gray.800'),
          0.1
        )}, 0 0 3px ${rgba(theme('colors.gray.800'), 0.05)}, 0 0 2px 1px ${rgba(
          theme('colors.gray.800'),
          0.07
        )}`,
        card: `0 15px 30px ${rgba('#000', 0.07)}, 0 1px 2px ${rgba(
          '#000',
          0.05
        )}, 0 -1px 2px ${rgba('#000', 0.025)}`,
        cardhover: `0 15px 30px ${rgba('#000', 0.07)}, 0 1px 2px ${rgba(
          '#000',
          0.05
        )}, 0 -1px 2px ${rgba('#000', 0.025)}, 0 0 0 4px ${rgba('#000', 0.2)}`
      })
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    // eslint-disable-next-line
    function({ addUtilities, addComponents, e, prefix, config, theme }) {
      addUtilities({
        '.g-primary': {
          background: `linear-gradient(to bottom, ${theme(
            'colors.primary.500'
          )}, ${mix(
            0.5,
            theme('colors.primary.500'),
            theme('colors.primary.600')
          )})`
        }
      });
    }
  ]
};
