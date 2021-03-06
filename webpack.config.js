/*import micromatch from 'micromatch';*/
const path = require('path');

module.exports = {
    mode: 'development',
    entry: { entityView: './lib/entry/entityView.js', },
    output: {
	filename: '[name]Bundle.js',
        chunkFilename: '[name]Bundle.js',
	path: __dirname + '/dist',
    },
    resolve: {
	alias: {
	    './logger': path.resolve(__dirname, 'src/logger'),
	}
    }
    
};
