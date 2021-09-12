module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  env: {
    test: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@': '.',
              '~': '.',
            },
          },
        ],
      ],
    },
  },
};
