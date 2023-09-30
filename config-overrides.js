const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, 'src/components/components'),
    ['@constants']: path.resolve(__dirname, 'src/constants/constants'),
  })
);
