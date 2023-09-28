module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
        },
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
