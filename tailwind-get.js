const resolveConfig = require('tailwindcss/resolveConfig');
const userConfig = require('./tailwind.config');

module.exports = resolveConfig(userConfig).theme;
