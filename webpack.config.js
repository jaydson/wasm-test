var path = require('path');

module.exports = {
  	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
	  extensions: ['*', '.js', '.jsx', '.wasm']
	},
	module: {
		loaders: [
	    {
	      test: /\.wasm$/,
	      loaders: ['wasm-loader']
	    }
	  ]
	}
};