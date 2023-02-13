import { blueDark, greenDark, mauveDark, redDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import { createBordersStyles, createColors } from 'bepaint';

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
      ...createBordersStyles(mauveDark),
      ...createBordersStyles(blueDark, 'accent'),
      ...createBordersStyles(redDark, 'danger'),
      ...createBordersStyles(greenDark, 'positive'),
    },
  },
});
