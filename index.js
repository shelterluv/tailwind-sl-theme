const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(
  // Plugin handler
  function (options = {}) { },

  // Config extensions
  function (options = {})  {
    const prefix = options.prefix ?? 'sl';

    return {
      theme: {
        extend: {
          colors: {
            [prefix]: {
              yellow: {
                50: '#FEF8E8',
                100: '#FDF1D0',
                200: '#FCE4A1',
                300: '#FAD672',
                400: '#F9C943',
                500: '#F7BB14',
                600: '#C69610',
                700: '#94700C',
                800: '#634B08',
                900: '#312504',
              },
              green: {
                50: '#EFF6F6',
                100: '#DEECEC',
                200: '#BDD9D9',
                300: '#9DC7C7',
                400: '#7CB4B4',
                500: '#5A9D9D',
                600: '#467C7C',
                700: '#376161',
                800: '#244040',
                900: '#122020',
              },
              blue: {
                50: '#EEF7FD',
                100: '#DDEEFC',
                200: '#BBDEF8',
                300: '#99CDF5',
                400: '#77BDF1',
                500: '#55ACEE',
                600: '#448ABE',
                700: '#33678F',
                800: '#22455F',
                900: '#112230',
              },
              gray: {
                50: '#F3F3F3',
                100: '#E6E6E6',
                200: '#CCCCCC',
                300: '#B3B3B3',
                400: '#999999',
                500: '#808080',
                600: '#666666',
                700: '#4D4D4D',
                800: '#333333',
                900: '#1A1A1A',
              },

              // Semantic colors
              general: {
                100: '#FDF1D0',
                500: '#F7BB14',
              },
              error: {
                100: '#FCCCCC',
                500: '#EE0000',
              },
              'in-process': {
                100: '#FFE4DB',
                500: '#C35521',
              },
              adopted: {
                100: '#E3DDF2',
                500: '#7356BF',
              },
              'pending-review': {
                100: '#D4E2FC',
                500: '#276EF1',
              },
              denied: {
                100: '#F9D1CC',
                500: '#E11900',
              },
              accepted: {
                100: '#CDEADC',
                500: '#05944F',
              },
              archived: {
                100: '#EBE0DB',
                500: '#99644C',
              },
            },
          },
        },
      },
    };
  },
);
