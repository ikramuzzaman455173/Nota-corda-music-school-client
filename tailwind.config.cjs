module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    "accent": "#37CDBE",

    "neutral": "#3D4451",

    "info": "#3ABFF8",

    "warning": "#FBBD23",

    "error": "#F87272",
    extend: {
      fontFamily: {
        'Merienda': ['Merienda', 'cursive'],
        'Pt': ['PT Serif Caption', 'serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
