import { blueDark, greenDark, mauveDark, redDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import {
  createBorderStyles,
  createColors,
  createFontSizes,
  createRadii,
  createSpaces,
} from 'bepaint';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...createColors(mauveDark),
      ...createColors(blueDark, 'accent'),
      ...createColors(redDark, 'danger'),
      ...createColors(greenDark, 'positive'),
    },

    borderStyles: {
      ...createBorderStyles(mauveDark),
      ...createBorderStyles(blueDark, undefined, 'accent'),
      ...createBorderStyles(redDark, undefined, 'danger'),
      ...createBorderStyles(greenDark, undefined, 'positive'),
    },

    space: createSpaces(),
    radii: createRadii(),
    fontSizes: createFontSizes(),
  },
});
