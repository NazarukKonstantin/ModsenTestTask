const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');
const { config } = require('dotenv');

config.resolve ??= {};
config.resolve.fallback = {
  crypto: require.resolve('crypto-browserify'),
  os: require.resolve('os-browserify/browser'),
  path: require.resolve('path-browserify'),
};

module.exports = {
  output: {
    path: join(__dirname, './dist/bookshop'),
  },
  devServer: {
    port: 4200,
  },
  resolve:{
  fallback:{
    "crypto":require.resolve("crypto-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "path":require.resolve("path-browserify"),
    "vm": require.resolve("vm-browserify"),
    "buffer": require.resolve("buffer/"),
    "stream": require.resolve("stream-browserify"),
    "events": require.resolve("events/")
  }
},
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/app/index.tsx',
      index: './public/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};