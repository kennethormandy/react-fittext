var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

let config = {
  devServer: {
    contentBase: __dirname + '/src',
  },
  context: __dirname + '/src',
  entry: {
    FitText: './FitText.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'FitText.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: pkg.babel,
          },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerPort: 8888,
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  // This is for a stand-alone build, ex. if you are
  // going to use it in the browser with a script tag
  config.externals = {
    // This config is based on the draft-js Webpack config
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  }
} else {
  config.entry['dev'] = './dev.js'
  config.output['filename'] = './[name].js'
}

module.exports = config
