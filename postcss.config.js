const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js'],

  whitelistPatterns: [
    /ant/,
    /anticon/,
    /ant-table/,
    /-(enter|appear|leave)/,
    /(sm|md|lg|xl):/,
    /tracking|overflow|leading|z-|float-|opacity-/
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
    // purgecss
  ]
};
