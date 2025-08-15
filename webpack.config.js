const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: isProduction ? './src/index.js' : './index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'DropdownMenu',
      libraryTarget: 'umd',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, '.'),
      },
      compress: true,
      port: 9000,
    },
  };
};