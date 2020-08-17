const path = require('path');

module.exports = {
  entry: {
    'dist/main': './src/app/main.ts',
    './sw': './src/app/sw.ts',
    // main: './src/app/main.ts',
    // sw: './src/app/sw.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        exclude: /node_modules/,
        options: {
          esModule: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      node_modules: path.join(__dirname, 'node_modules'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './'),
    // path: path.resolve(__dirname, './dist'),
  },
};
