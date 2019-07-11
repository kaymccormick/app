/*import micromatch from 'micromatch';*/

module.exports = {
    mode: 'development',
    entry: { entityView: './lib/entry/entityView.js', },
    output: {
	filename: '[name]Bundle.js',
        chunkFilename: '[name]Bundle.js',
	path: __dirname + '/dist',
    },
};
