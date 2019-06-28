/*import micromatch from 'micromatch';*/

module.exports = {
    entry: { entityView: './lib/entry/entityView.js', },
    output: {
	filename: '[name]Bundle.js',
	path: __dirname + '/dist',
    },
};
