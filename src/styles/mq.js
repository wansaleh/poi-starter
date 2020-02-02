import theme from '../../tailwind-get';

export const mqDown = Object.entries(theme.screens).reduce((obj, [key, value]) => {
  obj[key] = `@media (max-width: ${value})`;
  return obj;
}, {});

export const mqUp = Object.entries(theme.screens).reduce((obj, [key, value]) => {
  obj[key] = `@media (min-width: ${value})`;
  return obj;
}, {});
