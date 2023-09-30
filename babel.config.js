module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components/components',
          '@constants': './src/constants/constants',
        },
      },
    ],
  ],
};
