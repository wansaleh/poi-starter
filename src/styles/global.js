import React from 'react';
import tw from 'tailwind.macro';
import { css, Global } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      body {
        ${tw`font-sans text-gray-900`}
      }
    `}
  />
);
