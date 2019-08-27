/*import micromatch from 'micromatch';*/

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: { entityView: './lib/entry/entityView.js', },
    output: {
	filename: '[name]Bundle.js',
        chunkFilename: '[name]Bundle.js',
	path: __dirname + '/dist',
    },
  plugins: [
      new BundleAnalyzerPlugin({analyzerHost: '0.0.0.0'})
  ]
};
