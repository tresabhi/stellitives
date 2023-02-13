import { styled } from '@stitches/react';
import { theme } from '../../stitches.config';

export const Button = styled('button', {
  padding: theme.space.paddingRegular,
  background: 'none',
  borderRadius: theme.radii.regular,
  // TODO: add button font size
  fontSize: theme.fontSizes.input,

  variants: {
    type: {
      regular: {},
      solid: { border: 'none !important' },
      transparent: {},
    },
    color: { regular: {}, accent: {}, danger: {}, positive: {} },
    disabled: { false: { cursor: 'pointer' } },
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

    //#region regular background color
    {
      type: 'regular',
      color: 'regular',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentInteractive,

        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive,
        },
      },
    },
    {
      type: 'regular',
      color: 'accent',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentInteractive_accent,

        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover_accent,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive_accent,
        },
      },
    },
    {
      type: 'regular',
      color: 'danger',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentInteractive_danger,

        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover_danger,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive_danger,
        },
      },
    },
    {
      type: 'regular',
      color: 'positive',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentInteractive_positive,

        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover_positive,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive_positive,
        },
      },
    },

    {
      type: 'regular',
      color: 'regular',
      disabled: true,
      css: { backgroundColor: theme.colors.componentNonInteractive },
    },
    {
      type: 'regular',
      color: 'accent',
      disabled: true,
      css: { backgroundColor: theme.colors.componentNonInteractive_accent },
    },
    {
      type: 'regular',
      color: 'danger',
      disabled: true,
      css: { backgroundColor: theme.colors.componentNonInteractive_danger },
    },
    {
      type: 'regular',
      color: 'positive',
      disabled: true,
      css: { backgroundColor: theme.colors.componentNonInteractive_positive },
    },
    //#endregion

    //#region solid background color
    {
      type: 'solid',
      color: 'regular',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentSolidInteractive,

        '&:hover': {
          backgroundColor: theme.colors.componentSolidInteractiveHover,
        },
        '&:active': {
          backgroundColor: theme.colors.componentSolidInteractiveActive,
        },
      },
    },
    {
      type: 'solid',
      color: 'accent',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentSolidInteractive_accent,

        '&:hover': {
          backgroundColor: theme.colors.componentSolidInteractiveHover_accent,
        },
        '&:active': {
          backgroundColor: theme.colors.componentSolidInteractiveActive_accent,
        },
      },
    },
    {
      type: 'solid',
      color: 'danger',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentSolidInteractive_danger,

        '&:hover': {
          backgroundColor: theme.colors.componentSolidInteractiveHover_danger,
        },
        '&:active': {
          backgroundColor: theme.colors.componentSolidInteractiveActive_danger,
        },
      },
    },
    {
      type: 'solid',
      color: 'positive',
      disabled: false,
      css: {
        backgroundColor: theme.colors.componentSolidInteractive_positive,

        '&:hover': {
          backgroundColor: theme.colors.componentSolidInteractiveHover_positive,
        },
        '&:active': {
          backgroundColor:
            theme.colors.componentSolidInteractiveActive_positive,
        },
      },
    },

    {
      type: 'solid',
      color: 'regular',
      disabled: true,
      css: { backgroundColor: theme.colors.componentSolidNonInteractive },
    },
    {
      type: 'solid',
      color: 'accent',
      disabled: true,
      css: {
        backgroundColor: theme.colors.componentSolidNonInteractive_accent,
      },
    },
    {
      type: 'solid',
      color: 'danger',
      disabled: true,
      css: {
        backgroundColor: theme.colors.componentSolidNonInteractive_danger,
      },
    },
    {
      type: 'solid',
      color: 'positive',
      disabled: true,
      css: {
        backgroundColor: theme.colors.componentSolidNonInteractive_positive,
      },
    },
    //#endregion

    //#region transparent background color
    {
      type: 'transparent',
      color: 'regular',
      disabled: false,
      css: {
        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive,
        },
      },
    },
    {
      type: 'transparent',
      color: 'accent',
      disabled: false,
      css: {
        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover_accent,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive_accent,
        },
      },
    },
    {
      type: 'transparent',
      color: 'danger',
      disabled: false,
      css: {
        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover_danger,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive_danger,
        },
      },
    },
    {
      type: 'transparent',
      color: 'positive',
      disabled: false,
      css: {
        '&:hover': {
          backgroundColor: theme.colors.componentInteractiveHover_positive,
        },
        '&:active': {
          backgroundColor: theme.colors.componentInteractiveActive_positive,
        },
      },
    },
    //#endregion

    //#region borders
    {
      color: 'regular',
      disabled: false,

      css: { border: theme.borderStyles.interactive },
    },
    {
      color: 'accent',
      disabled: false,

      css: { border: theme.borderStyles.interactive_accent },
    },
    {
      color: 'danger',
      disabled: false,

      css: { border: theme.borderStyles.interactive_danger },
    },
    {
      color: 'positive',
      disabled: false,

      css: { border: theme.borderStyles.interactive_positive },
    },

    {
      color: 'regular',
      disabled: true,

      css: { border: theme.borderStyles.nonInteractive },
    },
    {
      color: 'accent',
      disabled: true,

      css: { border: theme.borderStyles.nonInteractive_accent },
    },
    {
      color: 'danger',
      disabled: true,

      css: { border: theme.borderStyles.nonInteractive_danger },
    },
    {
      color: 'positive',
      disabled: true,

      css: { border: theme.borderStyles.nonInteractive_positive },
    },
    //#endregion
  ],
});
