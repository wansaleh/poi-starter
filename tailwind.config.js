const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindColorPalette = require('@ky-is/tailwind-color-palette');
const mdcolors = require('./tailwind-md');

const primary = tailwindColorPalette('#3742fa', {
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
        sans: [...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '2xs': '0.7rem',
        '7xl': '5rem',
        '8xl': '6rem'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
};
