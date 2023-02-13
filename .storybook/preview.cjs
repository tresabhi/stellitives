export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    default: 'appBackground1',

    values: [
      {
        name: 'appBackground1',
        value: '#161618',
      },
      {
        name: 'appBackground2',
        value: '#1C1C1F',
      },
    ],
  },
};
