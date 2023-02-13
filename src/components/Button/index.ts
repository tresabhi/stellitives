import { styled } from '@stitches/react';
import { theme } from '../../stitches.config';

export const Button = styled('button', {
  variants: {
    type: { regular: {}, solid: {}, transparent: {} },
    color: { regular: {}, accent: {}, danger: {}, positive: {} },
    disabled: { true: {} },
  },

  defaultVariants: {
    type: 'regular',
    color: 'regular',
    disabled: false,
  },

  compoundVariants: [
    //#region text color
    {
      color: 'regular',
      disabled: false,
      css: { color: theme.colors.textHighContrast },
    },
    {
      color: 'accent',
      disabled: false,
      css: { color: theme.colors.textHighContrast_accent },
    },
    {
      color: 'danger',
      disabled: false,
      css: { color: theme.colors.textHighContrast_danger },
    },
    {
      color: 'positive',
      disabled: false,
      css: { color: theme.colors.textHighContrast_positive },
    },

    {
      color: 'regular',
      disabled: true,
      css: { color: theme.colors.textLowContrast },
    },
    {
      color: 'accent',
      disabled: true,
      css: { color: theme.colors.textLowContrast_accent },
    },
    {
      color: 'danger',
      disabled: true,
      css: { color: theme.colors.textLowContrast_danger },
    },
    {
      color: 'positive',
      disabled: true,
      css: { color: theme.colors.textLowContrast_positive },
    },
    //#endregion

    //#region background color
    {
      color: 'regular',
      disabled: false,
      css: { backgroundColor: theme.colors.component },
    },
    {
      color: 'accent',
      disabled: false,
      css: { backgroundColor: theme.colors.component_accent },
    },
    {
      color: 'danger',
      disabled: false,
      css: { backgroundColor: theme.colors.component_danger },
    },
    {
      color: 'positive',
      disabled: false,
      css: { backgroundColor: theme.colors.component_positive },
    },

    {
      color: 'regular',
      disabled: true,
      css: { backgroundColor: theme.colors.component },
    },
    {
      color: 'accent',
      disabled: true,
      css: { backgroundColor: theme.colors.textLowContrast_accent },
    },
    {
      color: 'danger',
      disabled: true,
      css: { backgroundColor: theme.colors.textLowContrast_danger },
    },
    {
      color: 'positive',
      disabled: true,
      css: { backgroundColor: theme.colors.textLowContrast_positive },
    },
    //#endregion
  ],
});
