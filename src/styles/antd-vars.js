const { rgba, mix } = require('polished');
const theme = require('../../tailwind-get');

module.exports = {
  'font-size-base': '14px',
  'primary-color': theme.colors.primary['500'],
  'heading-color': theme.colors.black,
  'text-color': theme.colors.black,
  'text-color-secondary ': theme.colors.gray['700'],
  'border-color-base': theme.colors.gray['400'],
  'border-color-split': theme.colors.gray['400'],
  'border-radius-base': '6px',
  'border-radius-sm': '3px',
  'line-height-base': 1.2,
  'animation-duration-base': '0.15s',
  'modal-mask-bg': rgba(mix(0.1, theme.colors.primary['500'], '#000'), 0.9),

  'input-height-base': '40px',
  'input-height-lg': '48px',
  'input-height-sm': '32px',

  'outline-width': '3px',

  'background-color-light': mix(0.1, theme.colors.primary['500'], '#fff'),
  'item-hover-bg': mix(0.1, theme.colors.primary['500'], '#fff'),
  'item-active-bg': mix(0.1, theme.colors.primary['500'], '#fff'),
  'disabled-color': theme.colors.gray['500'],

  'badge-height': '16px',
  'badge-font-size': '10px',
  'badge-font-weight': '700',

  'avatar-size-base': '32px',
  'avatar-size-lg': '50px',
  'avatar-size-sm': '24px',
  'avatar-font-size-base': '18px',
  'avatar-font-size-lg': '30px',
  'avatar-font-size-sm': '14px',
  'avatar-bg': theme.colors.primary['500'],
  'avatar-color': '#fff'
};
