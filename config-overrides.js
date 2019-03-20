const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#25b864' },
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[path]__[name]__[local]___[hash:base64:5]' 
  }),
);
