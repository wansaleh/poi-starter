import React from 'react';
import tw from 'tailwind.macro';
import { css, Global } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      body {
        ${tw`font-sans text-gray-900 select-none`} /* line-height: 1.15; */
      }

      a {
        ${tw`text-primary-500 hover:text-black no-underline`}
        transition: all 0.2s ease;
      }
    `}
  />
);
